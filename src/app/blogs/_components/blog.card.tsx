import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanity.image";
import { truncate } from "@/lib/utils";
import { FIND_ALL_BLOGResult } from "../../../../sanity.types";
import Typography from "@/components/typography";

interface IProps {
  post: FIND_ALL_BLOGResult[number];
}
const BlogCard = ({ post }: IProps) => {
  return (
    <Card key={post.slug.current}>
      <CardHeader>
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(400).height(200).url()}
            alt={post.title}
            width={400}
            height={200}
            className="rounded-lg mb-4 object-cover"
          />
        )}
        <CardTitle>
          <Link
            href={`/blogs/${post.slug.current}`}
            className="hover:underline"
          >
            <Typography variant="h4" text={post.title} />
          </Link>
        </CardTitle>
        <CardDescription>
          Published at {new Date(post.publishedAt).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Typography
          variant="p"
          className="mb-4 text-foreground"
          text={truncate(post.excerpt || "Random text", 100)}
        />

        <p className="text-sm text-muted-foreground mb-2">
          By {post.author?.name || "Unknown Author"}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <Badge key={category.title} variant="secondary">
              {category.title}
            </Badge>
          )) || <Badge variant="secondary">Uncategorized</Badge>}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
