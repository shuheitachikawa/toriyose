import { NextPage } from "next";
import { axiosInstance } from "src/lib/api";
import { Layout } from "src/components/layout";
import { PrivacyPolicy, Category } from "src/types"
import styled from "styled-components";


const InnerHtml = styled.div`
  color: #4b4b4b;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 40px;
  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 32px 0 8px;
  }
`

interface Props {
  categories: Category[];
  pv: PrivacyPolicy;
}

const PrivacyPolicyPage: NextPage<Props> = ({categories, pv}) => {
  const pageName = "プライバシーポリシー"
  return (
    <Layout categories={categories} pageName={pageName}>
      <div className="">
        <InnerHtml
          dangerouslySetInnerHTML={{
            __html: `${pv.content}`,
          }}
        />
      </div>
    </ Layout>
  )
}

export const getStaticProps = async () => {
  const baseUrl = process.env.micro_cms_base_url;
  const { data } = await axiosInstance.get(`${baseUrl}/privacy-policy`);
  const pv: PrivacyPolicy = data;
  const resCategories = await axiosInstance.get(`${baseUrl}/category?limit=1000`);
  const categories: Category[] = resCategories.data.contents
  console.log(categories)
  return {
    props: {
      pv: pv,
      categories: categories
    },
  };
};

export default PrivacyPolicyPage