import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.blogPost.deleteMany(); // Clears existing data

  const posts = [
    {
      title: "Mastering Next.js 15: A Complete Guide",
      content:
        "Next.js 15 brings performance improvements and a new App Router. Learn how to leverage these features to build high-performance web applications.",
      imageUrl: "https://picsum.photos/seed/nextjs15/600/400",
      authorId: "author-1",
      authorName: "John Doe",
      authorImage: "https://i.pravatar.cc/150?img=1",
    },
    {
      title: "The Future of AI in Web Development",
      content:
        "AI is changing how we build websites. From automated design tools to AI-powered coding assistants, explore what the future holds for developers.",
      imageUrl: "https://picsum.photos/seed/ai-webdev/600/400",
      authorId: "author-2",
      authorName: "Jane Smith",
      authorImage: "https://i.pravatar.cc/150?img=2",
    },
    {
      title: "Why TypeScript is Essential for Modern Development",
      content:
        "TypeScript provides type safety, better debugging, and a structured approach to JavaScript. Here's why every developer should consider using it.",
      imageUrl: "https://picsum.photos/seed/typescript/600/400",
      authorId: "author-3",
      authorName: "Alex Johnson",
      authorImage: "https://i.pravatar.cc/150?img=3",
    },
    {
      title: "10 Productivity Hacks for Remote Developers",
      content:
        "Working remotely comes with challenges. Learn the best practices to stay focused, manage time effectively, and boost productivity.",
      imageUrl: "https://picsum.photos/seed/productivity/600/400",
      authorId: "author-4",
      authorName: "Emily White",
      authorImage: "https://i.pravatar.cc/150?img=4",
    },
    {
      title: "Building Scalable APIs with Node.js",
      content:
        "Scalability is key for any API. Discover best practices for building high-performance APIs using Node.js and Express.",
      imageUrl: "https://picsum.photos/seed/nodejs-api/600/400",
      authorId: "author-5",
      authorName: "Michael Brown",
      authorImage: "https://i.pravatar.cc/150?img=5",
    },
    {
      title: "A Beginner's Guide to React Server Components",
      content:
        "React Server Components are revolutionizing frontend development. Learn how they work and how to implement them in your next project.",
      imageUrl: "https://picsum.photos/seed/react-server/600/400",
      authorId: "author-6",
      authorName: "Sarah Adams",
      authorImage: "https://i.pravatar.cc/150?img=6",
    },
    {
      title: "How to Optimize Images in Next.js",
      content:
        "Images are critical for web performance. Learn how Next.js Image Optimization can help improve loading speed and SEO.",
      imageUrl: "https://picsum.photos/seed/image-opt/600/400",
      authorId: "author-7",
      authorName: "Chris Wilson",
      authorImage: "https://i.pravatar.cc/150?img=7",
    },
    {
      title: "Understanding Authentication in Next.js 15",
      content:
        "Authentication is crucial for modern web apps. Explore different methods like JWT, OAuth, and session-based authentication in Next.js.",
      imageUrl: "https://picsum.photos/seed/auth-nextjs/600/400",
      authorId: "author-8",
      authorName: "Olivia Martinez",
      authorImage: "https://i.pravatar.cc/150?img=8",
    },
    {
      title: "The Best UI Libraries for React in 2024",
      content:
        "Material-UI, Chakra UI, Tailwind… which one should you use? Here's a comparison of the best UI libraries for React developers.",
      imageUrl: "https://picsum.photos/seed/ui-libraries/600/400",
      authorId: "author-9",
      authorName: "David Clark",
      authorImage: "https://i.pravatar.cc/150?img=9",
    },
    {
      title: "From Junior to Senior: How to Level Up as a Developer",
      content:
        "Moving from junior to senior developer takes more than just coding skills. Learn how to improve problem-solving, architecture, and leadership.",
      imageUrl: "https://picsum.photos/seed/dev-career/600/400",
      authorId: "author-10",
      authorName: "Sophia Green",
      authorImage: "https://i.pravatar.cc/150?img=10",
    },
  ];

  await prisma.blogPost.createMany({ data: posts });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
