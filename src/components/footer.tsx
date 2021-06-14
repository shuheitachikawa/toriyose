import type { VFC } from "react";
import Link from "next/link";

export const Footer: VFC = () => {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="max-w-main mx-auto py-10 text-gray-500 font-light text-sm">
        <ul className="flex justify-center">
          <li className="mr-5"><Link href="/">ホーム</Link></li>
          <li className="mr-5"><Link href="/privacy-policy">プライバシーポリシー</Link></li>
          <li><a href="https://bubekiti.com/bubekiti" rel="noopener">運営者</a></li>
        </ul>
      </div>
    </footer>
  )
}
