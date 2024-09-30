import { getAllProject } from "@/actions/project.action";
import { getAllPost } from "@/actions/blog.action";
import AnimatedHome from "@/components/animated-home";

export const revalidate = 60;

export default async function Home() {
  const projects = await getAllProject();
  const posts = await getAllPost();

  return <AnimatedHome projects={projects} posts={posts} />;
}
