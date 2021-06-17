import { NextPage } from "next";
import { Layout } from "src/components/layout";

const Categories: NextPage = () => {
  return (
    <div className="">
      <Layout categories={[]} pageName="">
        <div className=""></div>
      </Layout>
    </div>
  );
};

// export async function getStaticProps() {
//   const data = null
//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     props: { data }, 
//   }
// }

export default Categories;