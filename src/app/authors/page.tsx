import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { Author } from "../../../sanity.types";

async function getAuthors() {
  const authors = await client.fetch(`*[_type == "author"] {
    name,
    slug,
    image,
    bio
  }`);
  return authors;
}

export default async function Authors() {
  const authors = await getAuthors();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Authors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {authors.map((author: Author) => (
          <Card key={author.slug.current}>
            <CardHeader>
              <div className="flex items-center gap-4">
                {author.image && (
                  <Image
                    src={urlFor(author.image).width(80).height(80).url()}
                    alt={author.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                )}
                <CardTitle>{author.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert">
                <PortableText value={author.bio as any} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
