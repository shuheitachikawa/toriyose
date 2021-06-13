import { NextPage } from "next";
import { HeadComponent } from "src/components/head";
import { axiosInstance } from "src/lib/api";
import Image from "next/image";
import { Layout } from "src/components/layout";
import { Posts } from "src/components/posts";
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
        url="https://toriyose.me"
      />
      <Layout categories={categories} pageName={pageName}>
        <Posts posts={posts} pageName={pageName} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const baseUrl = process.env.micro_cms_base_url;
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
