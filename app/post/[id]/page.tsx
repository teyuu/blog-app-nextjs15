import { deletePost } from "@/app/actions";
import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type Params = Promise<{ id: string }>;

export default async function PostDetails({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getData(id);

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAuthor = user && user.id === data.authorId;

  async function handleDelete() {
    "use server";
    await deletePost(id);
  }

  return (
    <div className="max-3xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <Link className={buttonVariants({ variant: "secondary" })} href={"/"}>
          Back to posts
        </Link>
          {isAuthor && (
        <div className="flex gap-5">
          <form action={handleDelete}>
            <button
              type="submit"
              className={
                buttonVariants({ variant: "destructive" }) +
                " hover:cursor-pointer"
              }
            >
              Delete Post
            </button>
          </form>
        <Link className={buttonVariants()} href={`edit/${id}` }>Edit</Link>
        </div>
        )}
        
      </div>
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={data.authorImage}
                alt={data.authorImage}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium">{data.authorName}</p>
          </div>
          <p className="text-sm text-gray-500">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(data.createdAt)}
          </p>
        </div>
      </div>
      <div className="relative h-[400px] w-full mb8 rounded-lg">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <Card>
        <CardContent>
          <p className="text-gray-700">{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
