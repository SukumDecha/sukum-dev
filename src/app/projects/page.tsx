import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typography from "@/components/typography";
import { getAllProject } from "@/actions/project.action";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanity.image";
import { formatDate, truncate } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

export const revalidate = 10;

export default async function Projects() {
  const projects = await getAllProject();

  return (
    <div>
      <Typography variant="h2" text="My Projects" className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              {project.mainImage && (
                <Image
                  src={urlFor(project.mainImage).width(400).height(200).url()}
                  alt={project.mainImage.alt}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover"
                />
              )}
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {truncate(project.excerpt, 200)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech.title}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>
                  {project.startAt && formatDate(project.startAt)}
                  {project.endAt
                    ? ` - ${formatDate(project.endAt)}`
                    : " - Present"}
                </span>
              </div>
              <Button
                asChild
                className="w-full text-background hover:underline"
              >
                <Link href={`/projects/${project.slug.current}`}>
                  View Project
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
