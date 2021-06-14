import type { VFC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import media from 'styled-media-query';
import { Category } from "src/types";

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
  categories: Category[];
  pageName: string;
}

export const CategoryMenu: VFC<Props> = ({ categories, pageName }) => {
  const router = useRouter();
  return (
    <menu className="bg-pitari m-0 p-0">
    {/* <div className="bg-pitari sticky z-10 top-0 flex overflow-x-scroll pt-3 sm:pt-4 pb-3 sm:pb-5 pl-4 pr-4"> */}
      <ul className="max-w-main mx-auto flex overflow-x-scroll pt-3 sm:pt-4 pb-3 sm:pb-5 pl-4 pr-4">
        <li className="mr-4 select-none">
          <Link href="/">
            <div className="cursor-pointer">
              <div className="relative z-10">
                {router.route === "/" && <Circle />}
                <div className="bg-white duration-300 h-14 w-14 sm:h-16 sm:w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
                  ⭐️
                </div>
              </div>
              <div className="text-xs text-center">新着</div>
            </div>
          </Link>
        </li>
        {categories.map((c) => {
          return (
            <li key={c.key} className="mr-4 select-none">
              <Link href={`/category/${c.key}`}>
                <div className="cursor-pointer">
                  <div className="relative z-10">
                    {c.name === pageName && <Circle className="" />}
                    <div className="bg-white duration-300 h-14 w-14 sm:h-16 sm:w-16 text-4xl flex justify-center items-center rounded-4xl mb-2">
                      {c.icon}
                    </div>
                  </div>
                  <div className="text-xs text-center">{c.name}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </menu>
  )
}
