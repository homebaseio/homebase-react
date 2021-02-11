import { useParams } from 'react-router-dom'
import Block from '../components/Block'

const PageUid = () => {
  const { uid } = useParams()
  return <Block key={uid} uid={uid} withLinkedRefs withPlaceholder />
}

export default PageUid
