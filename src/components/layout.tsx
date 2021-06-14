import type { ReactNode, VFC } from "react";
import { Category } from "src/types";
import { useRouter } from "next/router";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { CategoryMenu } from "src/components/categoryMenu";

interface Props {
  children: ReactNode;
  categories: Category[];
  pageName: string;
}

export const Layout: VFC<Props> = ({ children, categories }) => {
  const router = useRouter();
  const pageName =
    categories.find((c) => c.key === router.query.id)?.name || "";
  return (
    <div className="min-h-screen relative pb-40 flex flex-col font-main">
      <Header />
      <CategoryMenu categories={categories} pageName={pageName} />
      <main className="px-2 sm:px-4">{children}</main>
      <Footer />
    </div>
  );
};
