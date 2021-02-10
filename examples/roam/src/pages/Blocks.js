import { useQuery, useTransact } from 'homebase-react'
import { nanoid } from 'nanoid'
import React from 'react'
import Block from '../components/Block'

const Blocks = () => {
  const [transact] = useTransact()
  const [blocks] = useQuery({
    $find: 'block',
    $where: { block: { isNode: true } },
  })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        transact([
          {
            block: {
              uid: nanoid(9),
              open: true,
              isNode: true,
              title: new Date().toDateString(),
              time: Date.now(),
            },
          },
        ])
      } catch (err) {
        // This is expected to fail due to the unique
        // constraint on the block.title attribute
        return false
      }
      return true
    }, 3000)
  }, [transact])

  return blocks
    .sort((a, b) => (a.get('time') > b.get('time') ? 1 : -1))
    .map((block) => <Block key={block.get('id')} id={block.get('id')} withPlaceholder />)
}

export default Blocks
