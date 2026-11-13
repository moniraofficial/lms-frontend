import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    
      <main className="min-h-screen bg-gray-50">
       <Hero />
       <PopularCourses />
      </main>

  );
}
