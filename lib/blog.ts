
import { prisma } from "@/app/utils/db";

export const POSTS_PER_PAGE = 6;

export async function getData(page: number) {
    const skip = (page - 1) * POSTS_PER_PAGE;

    const [posts, totalPosts] = await prisma.$transaction([
        prisma.blogPost.findMany({
            skip,
            take: POSTS_PER_PAGE,
            select: {
                title: true,
                content: true,
                imageUrl: true,
                authorImage: true,
                authorName: true,
                id: true,
                createdAt: true,
                authorId: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        }),
        prisma.blogPost.count(),
    ]);

    return {
        posts,
        totalPages: Math.ceil(totalPosts / POSTS_PER_PAGE),
    };
}
