import type { ReactNode, VFC } from "react";
import Link from "next/link";
import { Category } from "src/types";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import media from 'styled-media-query';
import { ContactDialog } from "src/components/contactDialog";

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const mediaMobile = (media as any).lessThan('420px');
const Circle = styled.div`
  position: absolute;
  height: 69px;
  width: 69px;
  ${mediaMobile`
  height: 62px;
  width: 62px;
  `}
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
    <div className="min-h-screen relative pb-40 flex flex-col font-main">
      <header className="bg-pitari pt-4 px-2 sm:px-4">
        <div className="max-w-main mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="pl-1 sm:pl-0 cursor-pointer inline-block select-none">
                <span className="text-2xl font-bold mr-4 block sm:inline-block">TORIYOSE</span>
                <span className="text-xs">お取り寄せグルメサイト集</span>
              </h1>
            </Link>
            <ContactDialog />
          </div>
        </div>
      </header>
      {/* <div className="bg-pitari sticky z-10 top-0 flex overflow-x-scroll pt-3 sm:pt-4 pb-3 sm:pb-5 pl-4 pr-4"> */}
      <div className="bg-pitari flex overflow-x-scroll pt-3 sm:pt-4 pb-3 sm:pb-5 pl-4 pr-4">
        <div className="mr-4 select-none">
          <Link href="/">
            <div className="cursor-pointer">
              <div className="relative z-10">
                {router.route === "/" && <Circle />}
                <div className="bg-white hover:bg-gray-50 duration-300 h-14 w-14 sm:h-16 sm:w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
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
                    <div className="bg-white hover:bg-gray-50 duration-300 h-14 w-14 sm:h-16 sm:w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
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
      <main className="px-2 sm:px-4">{children}</main>
      <footer className="absolute bottom-0 w-full">
        <div className="max-w-main mx-auto py-10 text-gray-500 font-light text-sm">
          <ul className="flex justify-center">
            <li className="mr-5"><Link href="/">ホーム</Link></li>
            <li className="mr-5"><Link href="/privacy-policy">プライバシーポリシー</Link></li>
            <li><a href="https://bubekiti.com/bubekiti" rel="noopener">運営者</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
