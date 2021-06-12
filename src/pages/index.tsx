import { NextPage } from "next";
import { HeadComponent } from "src/components/head";
import { axiosInstance } from "src/lib/api";
import Image from "next/image";
import { Layout } from "src/components/layout";
import { Post, Category } from "src/types";

interface Props {
  posts: Post[];
  categories: Category[];
}

const Home: NextPage<Props> = ({ categories, posts }) => {
  const pageName = "新着";
  return (
    <div className="">
      <HeadComponent
        title="TORIYOSE"
        description="美味しそうなお取り寄せグルメサイト集"
        keyword="お取り寄せ グルメ"
        image="/cat.jpg"
        url="https://bubekiti.com"
      />
      <Layout categories={categories}>
        <div className="max-w-main mx-auto pt-6">
          <h2 className="text-lg mb-4">{pageName}</h2>
          <div className="flex justify-around flex-wrap xl:justify-between">
            {posts.map((post) => {
              return (
                <div key={post.id} className="mb-10">
                  <a href={post.url} target="_blank">
                    <div className="w-cardPc h-cardPc mb-2 border border-gray-100">
                      <img
                        src={post.fv.url}
                        alt={post.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  <p>{post.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const baseUrl = process.env.MICROCMS_BASE_URL;
  const getPosts = (): Promise<any> => {
    return axiosInstance.get(`${baseUrl}/site`);
  };
  const getCategories = (): Promise<any> => {
    return axiosInstance.get(`${baseUrl}/category`);
  };
  const [resPosts, resCategories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);
  const categories: Post[] = resCategories.data.contents;
  const posts: Post[] = resPosts.data.contents;
  return {
    props: {
      categories,
      posts,
    },
  };
};

export default Home;
