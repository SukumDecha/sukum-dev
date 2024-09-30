import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getAllProject, getProjectBySlug } from "@/actions/project.action";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity/sanity.image";
import { formatDate } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";

export const dynamicParams = true;

interface IParams {
  params: {
    slug: string;
  };
  searchParams: {
    searchParams: { [key: string]: string | string[] | undefined };
  };
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: IParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      images: [
        urlFor(project.mainImage!).width(1200).height(630).url(),
        ...previousImages,
      ],
    },
  };
}

// Generate static paths for the page
export const generateStaticParams = async () => {
  const projects = await getAllProject();

  return projects.map((post) => ({
    id: String(post.slug),
  }));
};

export default async function ProjectPage({ params }: IParams) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      {/* MAIN IMAGE */}
      {project.mainImage && (
        <div className="mb-8">
          <Image
            src={urlFor(project.mainImage).width(1200).height(630).url()}
            alt={project.mainImage.alt || project.title}
            width={1200}
            height={630}
            className="rounded-lg object-cover w-full"
          />
        </div>
      )}

      {/* META (date, projectUrl) */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-muted-foreground" />
          <span className="text-muted-foreground">
            {project.startAt && formatDate(project.startAt)}
            {project.endAt ? ` - ${formatDate(project.endAt)}` : " - Present"}
          </span>
        </div>
        {project.title && (
          <Button variant="outline" asChild>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              View Project
            </a>
          </Button>
        )}
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.categories.map((category) => (
          <Badge key={category.title} variant="secondary">
            {category.title}
          </Badge>
        ))}
      </div>

      {/* EXCERPT */}
      {project.excerpt && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-lg text-muted-foreground">{project.excerpt}</p>
        </div>
      )}

      {/* BODY */}
      <div className="prose dark:prose-invert max-w-none">
        <PortableText
          value={project.body}
          components={{
            types: {
              image: ({ value }) => (
                <Image
                  src={urlFor(value).width(800).height(450).url()}
                  alt={value.alt || " "}
                  width={800}
                  height={450}
                  className="rounded-lg my-8"
                />
              ),
            },
          }}
        />
      </div>
    </article>
  );
}
