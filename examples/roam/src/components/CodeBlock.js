import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// import bash from 'refractor/lang/bash'
// import clojure from 'refractor/lang/clojure'
// import jsx from 'refractor/lang/jsx'
import CodeBlockStyle from './CodeBlockStyle'

// SyntaxHighlighter.registerLanguage('bash', bash)
// SyntaxHighlighter.registerLanguage('clojure', clojure)
// SyntaxHighlighter.registerLanguage('jsx', jsx)

const rewriteLang = (lang) => {
  if (lang === 'js') return 'jsx'
  if (lang === 'javascript') return 'jsx'
  if (lang === 'clj') return 'clojure'
  if (lang === 'cljs') return 'clojure'
  if (lang === 'clojurescript') return 'clojure'
  return lang
}

export default function CodeBlock({ language = 'jsx', showLineNumbers = true, children }) {
  return (
    <CodeBlockStyle>
      <SyntaxHighlighter
        language={rewriteLang(language)}
        showLineNumbers={showLineNumbers}
        useInlineStyles={false}
      >
        {children}
      </SyntaxHighlighter>
    </CodeBlockStyle>
  )
}
