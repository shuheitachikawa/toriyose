import { NextPage } from "next";
import { HeadComponent } from "src/components/head";
import { axiosInstance } from "src/lib/api";
import { Layout } from "src/components/layout";
import { Posts } from "src/components/posts";
import { Post, Category } from "src/types";


const Categories: NextPage = () => {
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
      <Layout categories={[]} pageName="">
      </Layout>
    </div>
  );
};

export default Categories;