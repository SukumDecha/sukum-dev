import { getAllPost } from "@/actions/blog.action";
import { getAllCategories } from "@/actions/category.action";
import CategoryFilter from "./_components/category-filter";
import SearchForm from "./_components/search-form";
import Typography from "@/components/typography";
import BlogCard from "./_components/blog.card";

export const revalidate = 10;

interface IProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Blog({ searchParams }: IProps) {
  const [posts, categories] = await Promise.all([
    getAllPost(),
    getAllCategories(),
  ]);

  if (!posts) {
    return <h1>No posts</h1>;
  }

  const searchTerm = (searchParams.query as string) ?? undefined;
  const selectedCategory = (searchParams.category as string) ?? undefined;

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    const matchesCategory = selectedCategory
      ? post.categories.some((cat) => cat.title === selectedCategory)
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4">
      <Typography variant="h2" className="mt-8 mb-4" text="Blogs" />

      <div className="mb-6">
        <SearchForm />
        <CategoryFilter
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug.current} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No posts found. Try adjusting your search or category filter.
        </p>
      )}
    </div>
  );
}
