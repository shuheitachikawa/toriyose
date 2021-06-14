import { VFC, useState, useEffect } from 'react'
import { Post } from 'src/types'

interface Props {
  post: Post;
}

export const LikeButton: VFC<Props> = ({ post }) => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    // console.log(post)
  }, [count])


  return (
    <div className="">
      <button onClick={countUp}>いいね：{count}</button>
    </div>
  )
}