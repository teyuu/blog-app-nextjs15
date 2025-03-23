// app/actions.ts
"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function handleSubmission(formData: FormData) {

    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user) {
        return redirect("/api/auth/register")
    }

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const url = formData.get("url") as string

    await prisma.blogPost.create({
        data: {
            title: title,
            content: content,
            imageUrl: url,
            authorId: (await user).id,
            authorImage: (await user).picture as string,
            authorName: (await user).given_name as string
        }
    })

    revalidatePath("/")
    

    return redirect("/dashboard")
}
export type FormState = {
    success?: boolean;
    error?: string;
  };

export async function updatePost(prevState: FormState, formData: FormData) {

    try {
        const id = formData.get("postId") as string;
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const url = formData.get("url") as string;

        await prisma.blogPost.update({
            where: { id },
            data: { title, content, imageUrl: url },
        });

        revalidatePath(`/blog/${id}`);
        revalidatePath("/");

        return { success: true };

    } catch (error) {
        console.log(error)
        return { error: "Error updating post" };
    }
}

export async function deletePost(postId: string) {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user) {
        return redirect("/api/auth/login");
    }

    const post = await prisma.blogPost.findUnique({
        where: { id: postId },
        select: { authorId: true },
    });



    if (!post) {
        throw new Error("Post not found");
    }

    if (post.authorId !== (await user).id) {
        throw new Error("Unauthorized to delete this post");
    }

    await prisma.blogPost.delete({
        where: { id: postId },
    });
    console.log("El post se ha eliminado correctamente");

    revalidatePath("/");
    revalidatePath("/dashboard");
    redirect("/");
}