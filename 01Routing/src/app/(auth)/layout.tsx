"use client";
import Link from "next/link";
import React from "react";
import { IChildren, INavLinks } from "./type";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: IChildren) => {
  const pathname = usePathname();
  const navLinks: INavLinks[] = [
    { title: "Login", href: "/login" },
    { title: "Register", href: "/register" },
    { title: "Forget", href: "/forget-password" },
  ];
  return (
    <div>
      <h1>Auth Layout</h1>
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;
        // const isActive = pathname.startsWith(link.href);

        return (
          <Link
            key={index}
            href={link.href}
            className={`font-medium text-blue-600 dark:text-blue-500 hover:underline p-2 ${
              isActive ? `text-blue-900` : ""
            }`}
          >
            {link.title}
          </Link>
        );
      })}
      {children}

      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3"
        href="/article/article-123?lang=en"
      >
        Article in English
      </Link>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3"
        href="/article/article-456?lang=fr"
      >
        Article in Franch
      </Link>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="/article/article-789?lang=sp"
      >
        Article in Spanish
      </Link>
    </div>
  );
};

export default AuthLayout;
