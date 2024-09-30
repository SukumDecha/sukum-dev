import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/lib/sanity/sanity.image";
import { getAllPost, getPostBySlug } from "@/actions/blog.action";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export const revalidate = 10;
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
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [
        urlFor(post.mainImage!).width(1200).height(630).url(),
        ...previousImages,
      ],
    },
  };
}

// Generate static paths for the page
export const generateStaticParams = async () => {
  const posts = await getAllPost();

  return posts.map((post) => ({
    id: String(post.slug),
  }));
};

const ptComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          src={urlFor(value)
            .width(800)
            .height(400)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || " "}
          width={800}
          height={400}
          className="rounded-lg my-6"
        />
      );
    },
  },
};

export default async function BlogPost({ params: { slug } }: IParams) {
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      {/* TITLE  */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {/* AUTHOR */}
      <div className="flex items-center gap-4 mb-6">
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).width(40).height(40).url()}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div>
          <p className="font-medium">{post.author?.name}</p>
          <p className="text-sm text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.categories?.map((category: any) => (
          <Badge key={category.title} variant="secondary">
            {category.title}
          </Badge>
        ))}
      </div>

      {/* MAIN IMAGE */}
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(800).height(400).url()}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
      )}

      {/* BODY */}
      <div className="prose dark:prose-invert max-w-none">
        <PortableText value={post.body as any} components={ptComponents} />
      </div>

      {/* AUTHOR */}
      {post.author && (
        <div className="mt-12 border-t pt-6">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <div className="flex items-center gap-4 mb-4">
            {post.author?.image && (
              <Image
                src={urlFor(post.author.image).width(80).height(80).url()}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            )}
            <div>
              <p className="font-medium text-lg">{post.author?.name}</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <PortableText value={post.author?.bio as any} />
          </div>
        </div>
      )}
    </article>
  );
}
