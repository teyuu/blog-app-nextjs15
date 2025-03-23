import { getData } from "@/lib/blog";

import BlogPostsPagination from "./BlogPostsPagination";
import { BlogPost } from "@/types/blog";
import BlogpostCard from "./BlogpostCard";

interface BlogPostsProps {
  page: number;
}

export async function BlogPosts({ page }: BlogPostsProps) {
  const currentPage = Number(page) || 1;
  const { posts, totalPages } = await getData(currentPage);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((item: BlogPost) => (
          <BlogpostCard data={item} key={item.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <BlogPostsPagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
