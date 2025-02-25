'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname().split('/')[2];

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navigation Buttons */}
      <div className="bg-secondary-50 py-4 px-4 lg:mx-36">
        <div className="grid grid-flow-col place-items-center gap-2 whitespace-nowrap overflow-x-auto min-w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            {["All", "Pre-Weddings", "Weddings", "Portraits", "Events"].map((category) => (           
               <button
                key={category}
                onClick={() => (window.location.href = `/portfolio/${category}`)}
                className={`whitespace-nowrap px-6 py-2 rounded-full transition-colors font-body text-lg ${
                  pathName === category ? "bg-secondary-900 text-secondary-100" : "bg-secondary-200 hover:bg-secondary-300"
                }`}
              >
                <span>{category}</span>
              </button>
            ))}
        </div>
      </div>
      {/* Page Content */}
      <div>{children}</div>

      {/* Instagram Embed */}
      {/* <div
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DFhE7pXJWQW/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`,
      }}
    /> */}
      {/* Footer Section */}
      <div className="bg-secondary-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="block text-4xl font-bold text-white mb-4">
            Ready to Create Something Beautiful?
          </span>
          <span className="block text-secondary-100 text-lg mb-8">
            Let&apos;s work together to capture your special moments in the most extraordinary way.
          </span>
          <Button variant={"primary"} size={"lg"} asChild>
            <Link href='/#contact' className="text-white font-medium">Book a Session</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
