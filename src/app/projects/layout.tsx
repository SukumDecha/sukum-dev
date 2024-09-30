import React from "react";
import { Metadata } from "next";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "Sukum Dev | %s",
    default: "Sukum Dev | Projects",
  },
  description:
    "Sukum Dev is my personal portfolio website where I showcase my projects and share my blogs. It highlights my journey, skills, and experiences through a curated selection of work. Visitors can explore detailed case studies of my projects, read my thoughts on various topics in the blog section, and get an insight into my background and interests. This site serves as a hub for everything I create and my professional journey.",
};

const Layout = ({ children }: IProps) => {
  return <>{children}</>;
};

export default Layout;
