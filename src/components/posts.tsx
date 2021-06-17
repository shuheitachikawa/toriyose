import type { VFC } from "react";
import { Post } from "src/types";
import Image from "next/image";
interface Props {
  posts: Post[];
  pageName: string;
}

export const Posts: VFC<Props> = ({ posts, pageName }) => {
  return (
    <div className="max-w-main mx-auto pt-6">
      <h2 className="text-lg mb-4">{pageName}</h2>
      <div className="flex justify-around flex-wrap xl:justify-between">
        {posts.map((post) => {
          return (
            <div key={post.id} className="mb-10 max-w-cardPc">
              <a href={post.url} target="_blank" rel="noopener">
                <div className="max-w-cardPc">
                  <Image
                    className="transform hover:scale-110 duration-300"
                    src={`${post.fv.url}?fit=fill&w=600&h=371`}
                    alt={post.name}
                    width={400}
                    height={247}
                    objectFit={"cover"}
                  />
                </div>
              </a>
              <p className="font-light truncate">{post.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
