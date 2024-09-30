"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Typography from "./typography";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleNavigate = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <nav className="shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary z-10">
              Sukum Dev
            </Link>
          </div>

          <nav
            className={`absolute top-0 left-0 flex flex-col gap-8 justify-center items-center h-screen w-full duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"} sm:translate-y-0 sm:relative sm:h-fit sm:w-fit sm:flex-row bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 sm:!text-foreground sm:!bg-background z-40`}
          >
            <div className="sm:hidden mb-3">
              <Typography variant="h2" text="Sukum Dev" />
            </div>
            
            <ul className="flex flex-col gap-8 justify-center items-center sm:flex-row [&>li]:cursor-pointer">
              <li
                className="rounded-md text-sm font-medium"
                onClick={() => handleNavigate("/")}
              >
                Home
              </li>
              <li
                className="rounded-md text-sm font-medium"
                onClick={() => handleNavigate("/about")}
              >
                About
              </li>
              <li
                className="rounded-md text-sm font-medium"
                onClick={() => handleNavigate("/projects")}
              >
                Projects
              </li>
              <li
                className="rounded-md text-sm font-medium"
                onClick={() => handleNavigate("/blogs")}
              >
                Blogs
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4 z-50">
            <div className="md:hidden flex items-center">
              {isOpen ? (
                <X
                  className="w-6 h-6 text-slate-50 dark:text-slate-900"
                  onClick={handleToggle}
                />
              ) : (
                <AlignJustify className="w-6 h-6" onClick={handleToggle} />
              )}
            </div>

            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
