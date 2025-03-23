"use client";
import { updatePost } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlogPost } from "@/types/blog";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useActionState, useEffect } from "react";
import { buttonVariants } from "../ui/button";

export default function EditBlogForm({ postData }: { postData: BlogPost }) {
  const router = useRouter();
  const [state, formAction] = useActionState(updatePost, { error: "" });

  useEffect(() => {
    if (state?.success) {
      router.push("/dashboard");
    }
  }, [state, router]);

  return (
    <div className="pt-5">
      <Link href={`/post/${postData.id}`} className={buttonVariants({variant:"secondary"})}>
        Back to post
      </Link>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Edit Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={formAction}>
            <input type="hidden" name="postId" defaultValue={postData.id} />
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Title"
                defaultValue={postData.title}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Content"
                defaultValue={postData.content}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input
                name="url"
                required
                type="url"
                placeholder="Image url"
                defaultValue={postData.imageUrl}
              />
            </div>
            <SubmitButton />
            {state.error && <p className="text-red-500">{state.error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
