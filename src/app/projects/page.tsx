import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typography from "@/components/typography";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project1.example.com",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://project2.example.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div>
      <Typography variant="h1" text="My Projects" className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grod-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button asChild className="text-background hover:underline">
                <Link href={project.link}>View Project</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
