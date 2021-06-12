import type { ReactNode, VFC } from "react";
import Link from "next/link";
import { Category } from "src/types";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { ContactDialog } from "src/components/contactDialog";

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Circle = styled.div`
  position: absolute;
  height: 68px;
  width: 68px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  background: linear-gradient( -45deg, rgb(255, 166, 73), rgb(247, 100, 91), rgb(128, 94, 212));
  animation: 2s infinite linear ${rotate};
`;

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
    <div className="min-h-screen flex flex-col font-main">
      <header className="bg-pitari py-4 px-4">
        <div className="max-w-main mx-auto">
          <div className="mb-4 flex justify-between items-center">
            <Link href="/">
              <h1 className="cursor-pointer inline-block select-none">
                <span className="text-2xl font-bold mr-4">TORIYOSE</span>
                <span className="text-xs">お取り寄せグルメサイト集</span>
              </h1>
            </Link>
            {/* <ContactDialog /> */}
          </div>
          <div className="flex">
            <div className="mr-4 select-none">
              <Link href="/">
                <div className="cursor-pointer">
                  <div className="relative z-10">
                    {router.route === "/" && <Circle />}
                    <div className="bg-white hover:bg-gray-50 duration-300  h-16 w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
                      ⭐️
                    </div>
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
                      <div className="relative z-10">
                        {c.name === pageName && <Circle className="" />}
                        <div className="bg-white hover:bg-gray-50 duration-300 h-16 w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
                          {c.icon}
                        </div>
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
