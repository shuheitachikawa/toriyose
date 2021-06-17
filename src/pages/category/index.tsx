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

// ↓generate時にredirectはサポートされていないため、next.configに書く。
// export async function getStaticProps() {
//   return {
//     redirect: {
//       destination: '/',
//       permanent: false,
//     },
//   }
// }

export default Categories;