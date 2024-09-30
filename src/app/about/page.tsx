"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Typography from "@/components/typography";

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Java"] },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "SASS",
      "SHADCN UI",
      "MUI",
      "ANT DESIGN",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Nest.js", "Spring Boot", "RESTful API"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  { category: "DevOps", items: ["Git", "GitHub", "Docker"] },
];

const journeySteps = [
  { year: 2016, event: "Started coding in high school" },
  { year: 2017, event: "Created Minecraft server LouderPvP" },
  { year: 2021, event: "Began exploring web development" },
  { year: 2022, event: "Started working on professional web projects" },
  { year: 2023, event: "Expanded skills to full-stack development" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/36534399?s=400&u=1ef404136b36d5074f052a034e66e47d7eeab40d&v=4"
                alt="Sukum_Decha"
              />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl">About Me</CardTitle>
              <CardDescription>
                Minecraft Developer & Web Developer
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Hello! I'm a passionate web developer with expertise in modern
              technologies like React, Next.js, and Node.js. I love creating
              intuitive and performant web applications that solve real-world
              problems.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" asChild>
                <Link href="https://github.com/SukumDecha">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com/in/SukumDecha">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:ninemaster12gt@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="skills">My Skills</TabsTrigger>
            <TabsTrigger value="journey">My Journey</TabsTrigger>
          </TabsList>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                {skills.map((skillCategory, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold mb-2">
                      {skillCategory.category}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="journey">
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  {journeySteps.map((step, index) => (
                    <li key={index} className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {step.year}
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {step.event}
                      </h3>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out to me through my social media profiles or send me an
              email.
            </p>
            <p className="font-semibold">
              Email:{" "}
              <a
                href="mailto:ninemaster12gt@gmail.com"
                className="text-primary hover:underline"
              >
                ninemaster12gt@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
