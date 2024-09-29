/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        I'm a passionate developer creating amazing web experiences. Explore my
        projects and blogs to learn more about my work.
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/blogs">Read Blog</Link>
        </Button>
      </div>
    </div>
  );
}
