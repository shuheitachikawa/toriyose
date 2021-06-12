import type { VFC } from "react";
import { Post } from "src/types";
import Image from "next/image";
interface Props {
  posts: Post[];
  pageName: string;
}

export const Posts: VFC<Props> = ({posts, pageName}) => {
  return (
    <div className="max-w-main mx-auto pt-6">
          <h2 className="text-lg mb-4">{pageName}</h2>
          <div className="flex justify-around flex-wrap xl:justify-between">
            {posts.map((post) => {
              return (
                <div key={post.id} className="mb-10">
                  <a href={post.url} target="_blank">
                    <div className="w-cardPc h-cardPc mb-2 border border-gray-100">
                    <Image src={`${post.fv.url}?fit=fill&w=600&h=371`} width={400} height={247} />
                    </div>
                  </a>
                  <p>{post.name}</p>
                </div>
              );
            })}
          </div>
        </div>
  )
}