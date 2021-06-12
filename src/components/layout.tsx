import type { ReactNode, VFC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Category } from "src/types";

interface Props {
  children: ReactNode;
  categories: Category[];
  pageName: string;
}

export const Layout: VFC<Props> = ({ children, categories }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col font-main">
      <header className="bg-pitari py-4 px-4">
        <div className="max-w-main mx-auto">
          <div className="mb-4">
            <Link href="/">
              <h1 className="cursor-pointer inline-block select-none">
                <span className="text-2xl font-bold mr-4">TORIYOSE</span>
                <span className="text-xs">お取り寄せグルメサイト集</span>
              </h1>
            </Link>
          </div>
          <div className="flex">
            <div className="mr-4 select-none">
              <Link href="/">
                <div className="cursor-pointer">
                  <div className="bg-white h-16 w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
                    ⭐️
                  </div>
                  <div className="text-xs text-center">新着</div>
                </div>
              </Link>
            </div>
            {categories.map((c) => {
              return (
                <div key={c.key} className="mr-4 select-none">
                  <Link href={`/category/${c.key}`}>
                    <div className="cursor-pointer">
                      <div className="bg-white h-16 w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
                        {c.icon}
                      </div>
                      <div className="text-xs text-center">{c.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </header>
      <main className="px-4">{children}</main>
    </div>
  );
};
