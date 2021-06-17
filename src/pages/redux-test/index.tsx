import { NextPage } from 'next'
import { useState, useEffect, EffectCallback } from 'react'
import { LikeButton } from 'src/components/test/LikeButton'
import { axiosInstance } from "src/lib/api";
import { Post } from 'src/types'

import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from 'src/reducks/users/actions'

const Test: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  // useEffect(() => {
  //   const baseUrl = process.env.micro_cms_base_url;
  //   axiosInstance.get(`${baseUrl}/site?limit=1000`).then((res: any) => setPosts(res.data.contents))
  // }, [])

  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  console.log((selector as any).users)
  // console.log((selector as any).history)

  return (
    <>
      <div className="">テストページ</div>
      <button onClick={() => dispatch(signInAction({uid: 'test', username:'tachikawa'}))}>サインイン</button>
      <ul>
        {posts.map(post => {
          return (
            <div key={post.id} className="mb-4">
              <p>{post.name}</p>
              <LikeButton post={post} />
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default Test