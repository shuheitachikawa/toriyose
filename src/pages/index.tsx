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

  // スクレイピング開始▶動いたけど禁止されているよう。
  // const puppeteer = require("puppeteer");
  // const chromium = require("chrome-aws-lambda");
  // for (let i = 0; i < posts.length; i++) {
  //   try {
  //     // const browser = await puppeteer.launch();
  //     const browser = await chromium.puppeteer.launch({
  //       args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
  //       defaultViewport: chromium.defaultViewport,
  //       executablePath: await chromium.executablePath,
  //       headless: true,
  //       ignoreHTTPSErrors: true,
  //     })
  //     const page = await browser.newPage();
  //     await page.goto(posts[i].url);
  //     const name = await page.evaluate(() => document.title);
  //     posts[i].name = name;
  //     console.log(posts[i].name);
  //     await browser.close();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  // スクレイピングここまで
  return {
    props: {
      categories,
      posts,
    },
  };
};

export default Home;
