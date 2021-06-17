import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { HeadComponent } from "src/components/head";
import { axiosInstance } from "src/lib/api";
import { Layout } from "src/components/layout";
import { Posts } from "src/components/posts";
import { Post, Category } from "src/types";

const Home = ({
  categories,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageName = "新着";
  return (
    <div className="">
      <HeadComponent
        title="TORIYOSE"
        description="美味しそうなお取り寄せグルメサイト集"
        keyword="お取り寄せ グルメ"
        image="/image.png"
        url="https://toriyose.me"
      />
      <Layout categories={categories} pageName={pageName}>
        <Posts posts={posts} pageName={pageName} />
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = process.env.micro_cms_base_url;
  const getPosts = (): Promise<any> => {
    return axiosInstance.get(`${baseUrl}/site?limit=1000`);
  };
  const getCategories = (): Promise<any> => {
    return axiosInstance.get(`${baseUrl}/category?limit=1000`);
  };
  const [resPosts, resCategories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);
  const categories: Post[] = resCategories.data.contents;
  const posts: Post[] = resPosts.data.contents;
  const puppeteer = require('puppeteer')
  posts.forEach(async (p: Post) => {
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(p.url)
      const name = await page.evaluate(() => document.title)
      p.name = name
      console.log(p.name)
      await browser.close();
    } catch(e) {
      console.error(e)
    }
  })
  return {
    props: {
      categories,
      posts,
    },
  };
};

export default Home;
