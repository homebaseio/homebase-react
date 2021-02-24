import { useEntity, useTransact } from 'homebase-react'
import { nanoid } from 'nanoid'
import React from 'react'
import ReactMarkdownWithHTML from 'react-markdown/with-html'
import { Link } from 'react-router-dom'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import gfm from 'remark-gfm'
import styled from 'styled-components'
import CodeBlock from './CodeBlock'

const TweetWrap = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
const matchTweetId = /twitter.com\/.*status\/([\d]+)/im
const findTweetId = (text) => {
  const match = text.match(matchTweetId)
  return match && match[1]
}

const useFindOrCreatePage = (title, refBlockId) => {
  const [block] = useEntity({ block: { title } })
  const [transact] = useTransact()
  React.useEffect(() => {
    if (!block?.get('id')) {
      transact([
        {
          block: {
            id: -1,
            title,
            open: true,
            isNode: true,
            uid: nanoid(9),
            time: Date.now(),
          },
        },
        {
          block: {
            id: refBlockId,
            refs: -1,
          },
        },
      ])
    } else if (refBlockId && !(block.get('_refs', 'id') || []).includes(refBlockId)) {
      transact([
        {
          block: {
            id: refBlockId,
            refs: block.get('id'),
          },
        },
      ])
    }
  }, [block, transact, title, refBlockId])
  return [block]
}

const Tag = ({ title, blockId }) => {
  const [block] = useFindOrCreatePage(title, blockId)

  return (
    <Link
      className="font-bold"
      to={`/page/${block?.get('uid')}`}
      onClick={(e) => e.stopPropagation()}
    >
      #{title}
    </Link>
  )
}

const PageRef = ({ title, colon, blockId }) => {
  const [block] = useFindOrCreatePage(title, blockId)
  return colon ? (
    <Link
      className="font-bold"
      to={`/page/${block?.get('uid')}`}
      onClick={(e) => e.stopPropagation()}
    >
      {title}:
    </Link>
  ) : (
    <span className="text-gray-400">
      [[
      <Link
        className="text-blue-500"
        to={`/page/${block?.get('uid')}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title}
      </Link>
      ]]
    </span>
  )
}

const BlockRef = ({ uid }) => {
  const [block] = useEntity({ block: { uid } })
  return (
    <Link className="underline" to={`/page/${uid}`} onClick={(e) => e.stopPropagation()}>
      {block?.get('string') || block?.get('title')}
    </Link>
  )
}

const renderTextSection = (blockId) => (text, i) => {
  const tag = text.match(/^#\[\[(.+?)\]\]$|^#(.+?)$/s)
  if (tag) return <Tag key={i} title={tag[1] || tag[2]} blockId={blockId} />
  const colonPageRef = text.match(/^(.+?)::/s)
  if (colonPageRef) return <PageRef colon key={i} title={colonPageRef[1]} blockId={blockId} />
  const pageRef = text.match(/(?!#)\[\[(.+?)\]\]/s)
  if (pageRef) return <PageRef key={i} title={pageRef[1]} blockId={blockId} />
  const blockRef = text.match(/\(\((.+?)\)\)/s)
  if (blockRef) return <BlockRef key={i} uid={blockRef[1]} />
  const hr = text.match(/^:hiccup \[:hr\]$/s)
  if (hr) return <hr key={i} />
  return (
    <span key={i} className="whitespace-pre-wrap">
      {text}
    </span>
  )
}

const renderers = (blockId) => ({
  link: ({ href, children }) => (
    <a href={href} className="text-blue-500" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  // Swap bold and italic to match Roam
  strong: ({ children }) => <em>{children}</em>,
  emphasis: ({ children }) => <strong>{children}</strong>,
  heading: ({ level, children }) => {
    const Hx = `h${level}`
    return <Hx className={`text-${8 - level}xl font-bold`}>{children}</Hx>
  },
  blockquote: ({ children }) => (
    <blockquote className="py-1 pl-3 border-l-2 border-gray-400 bg-gray-100">{children}</blockquote>
  ),
  inlineCode: ({ children }) => (
    <code className="py-0.25 px-0.5 rounded border border-gray-400 bg-gray-100 text-sm">
      {children}
    </code>
  ),
  code: ({ language, value }) => <CodeBlock language={language}>{value}</CodeBlock>,
  paragraph: ({ children }) => children,
  text: ({ value }) => {
    // Adds support for Roam style markup
    // NOTE: these regexs are a quick hack for this demo. Extend the gfm parser in a prod setting
    const sections = value
      .split(
        /(^.+?::)|(#\[\[.+?\]\])|(\s|^)(#.+?)(\s|\n|\n\r|$)|((?!#)\[\[.+?\]\])|(\(\(.+?\)\))|(^:hiccup \[:hr\]$)/gs,
      )
      .filter(Boolean)
    const roamifiedText = sections.map(renderTextSection(blockId))
    const tweetId = findTweetId(value)
    if (tweetId) {
      return (
        <>
          {roamifiedText}
          <TweetWrap>
            <TwitterTweetEmbed tweetId={tweetId} />
          </TweetWrap>
        </>
      )
    }
    return roamifiedText
  },
})

function RoamMarkdown({ children, blockId }) {
  return (
    <ReactMarkdownWithHTML plugins={[gfm]} renderers={renderers(blockId)}>
      {children}
    </ReactMarkdownWithHTML>
  )
}

const RoamMarkdownMemo = React.memo(RoamMarkdown)

export default RoamMarkdownMemo
