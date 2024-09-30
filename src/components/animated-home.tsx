"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity/sanity.image";
import Typography from "@/components/typography";
import { motion } from "framer-motion";
import {
  FIND_ALL_BLOGResult,
  FIND_ALL_PROJECTResult,
} from "../../sanity.types";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface IProps {
  projects: FIND_ALL_PROJECTResult;
  posts: FIND_ALL_BLOGResult;
}

export default function AnimatedHome({ projects, posts }: IProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
      className="container mx-auto px-4 py-12"
    >
      <motion.section variants={fadeInUp} className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          I'm a passionate developer creating amazing web experiences. Explore
          my projects and blogs to learn more about my work.
        </p>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex justify-center space-x-4"
        >
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blogs">Read Blog</Link>
          </Button>
        </motion.div>
      </motion.section>

      <motion.section variants={fadeInUp} className="mb-16">
        <Typography variant="h2" className="mb-6" text="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug.current}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage)
                        .width(400)
                        .height(200)
                        .url()}
                      alt={project.mainImage.alt || project.title}
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full h-48 mb-4"
                    />
                  )}
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <Badge key={category.title} variant="secondary">
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="ml-auto">
                    <Link href={`/projects/${project.slug.current}`}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={fadeInUp}>
        <Typography variant="h2" className="mb-6" text="Latest Blogs" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.slug.current}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  {post.mainImage && (
                    <Image
                      src={urlFor(post.mainImage).width(400).height(200).url()}
                      alt={post.mainImage.alt || post.title}
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full h-48 mb-4"
                    />
                  )}
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <Badge key={category.title} variant="secondary">
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="ml-auto">
                    <Link href={`/blogs/${post.slug.current}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
