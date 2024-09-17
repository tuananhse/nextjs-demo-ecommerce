"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


function LanguageSwitcher({lang }: {lang: string}) {
  const pathname = usePathname();

  return (
  <Link
    locale={lang}
    href={pathname}
   >
    English
  </Link>
  )
}