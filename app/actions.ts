"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {

    const { getUser } = getKindeServerSession();
    const user = getUser();

    if(!user){
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

    return redirect("/dashboard")
}