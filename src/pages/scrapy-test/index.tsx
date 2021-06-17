import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { axiosInstance } from "src/lib/api";
import { Post, Category } from "src/types";

const Home = ({
  categories,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageName = "新着";
  return (
    <div className="">
      <div className="">
        aaaa
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = process.env.micro_cms_base_url;
  const { data } = await axiosInstance.get(`${baseUrl}/site?limit=3`);
  let posts: Post[] = data.contents
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
      posts: posts
    },
  };
};

export default Home;
