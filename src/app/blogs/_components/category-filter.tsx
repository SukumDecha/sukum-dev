import Link from "next/link";
import { Badge } from "../../../components/ui/badge";

interface IProps {
  selectedCategory: string | null;
  categories: string[];
}
const CategoryFilter = ({ categories, selectedCategory }: IProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Link href="/blogs">
        <Badge
          variant={selectedCategory === undefined ? "default" : "outline"}
          className="cursor-pointer"
        >
          All
        </Badge>
      </Link>
      {categories.map((category) => (
        <Link href={`/blogs?category=${category}`} key={category}>
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer"
          >
            {category}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
