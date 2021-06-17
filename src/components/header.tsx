import type { VFC } from "react";
import Link from "next/link";
import { ContactDialog } from "src/components/contactDialog";

export const Header: VFC = () => {
  return (
    <header className="bg-pitari pt-4 px-2 sm:px-4">
      <div className="max-w-main mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="pl-1 sm:pl-0 cursor-pointer inline-block select-none">
              <span className="text-2xl font-bold mr-4 block sm:inline-block">TORIYOSE</span>
              <span className="text-xs">お取り寄せグルメサイト集aaa</span>
            </h1>
          </Link>
          <ContactDialog />
        </div>
      </div>
    </header>
  )
}
