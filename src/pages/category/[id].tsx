import { NextPage, GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import { HeadComponent } from "src/components/head";
import { axiosInstance } from "src/lib/api";
import { Layout } from "src/components/layout";
import { Posts } from "src/components/posts";
import { Post, Category } from "src/types";
import { useRouter } from "next/router";


const Home = ({ categories, posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const pageName = categories.find((c: Category) => c.key === router.query.id)?.name || ""
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

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const baseUrl = process.env.micro_cms_base_url;
  const { data } = await axiosInstance.get(`${baseUrl}/category`);
  // console.log(data)
  const paths = data.contents.map((category: Category) => `/category/${category.key}`);
  return { paths, fallback: true };
};



export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.id;
  console.log(context)
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
  const categories: Category[] = resCategories.data.contents;
  const posts: Post[] = resPosts.data.contents.filter((c:Post) => c.categories.some((d: Category) => d.key === category))
  return {
    props: {
      categories,
      posts,
    },
    // revalidate: 10,
  };
};

export default Home;
