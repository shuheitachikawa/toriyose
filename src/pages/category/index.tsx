import { NextPage } from "next";
import { Layout } from "src/components/layout";

const Categories: NextPage = () => {
  return (
    <div className="">
      <Layout categories={[]} pageName="">
      </Layout>
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}

export default Categories;