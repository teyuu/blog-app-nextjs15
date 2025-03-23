import { Suspense } from "react";
import { BlogPosts } from "@/components/blog/BlogPosts";
import BlogSkeleton from "@/components/blog/BlogSkeleton";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page);

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogPosts page={currentPage} />
      </Suspense>
    </div>
  );
}