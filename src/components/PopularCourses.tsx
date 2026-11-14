'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Course {
  _id?: string;
  title: string;
  description?: string;
  price: number;
  thumbnail: string;
}

const fallbackCourses: Course[] = [
  {
    _id: '1',
    title: "Web Development Fundamentals",
    price: 49,
    thumbnail: "https://i.ibb.co.com/4g2J942/web-dev.png",
  },
  {
    _id: '2',
    title: "React for Beginners",
    price: 59,
    thumbnail: "https://i.ibb.co.com/9v18g2t/react.png",
  },
  {
    _id: '3',
    title: "Data Science Basics",
    price: 49,
    thumbnail: "https://i.ibb.co.com/8K9L7x2/data-science.png",
  },
  {
    _id: '4',
    title: "UI/UX Design Basics",
    price: 39,
    thumbnail: "https://i.ibb.co.com/2m65s7q/ui-ux.png",
  }
];

export default function PopularCourses() {
  const [courses, setCourses] = useState<Course[]>(fallbackCourses);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://lms-backend-tfco.vercel.app/api/courses';
        const res = await fetch(API_URL);
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setCourses(data.data);
        }
      } catch (error) {
        console.error('Error fetching courses, using fallback data:', error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Courses</h2>
        <p className="text-gray-600 mb-10">Discover our most popular courses</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {courses.map((course, index) => {
            const courseId = course._id || String(index + 1);
            
            return (
              <div 
                key={courseId} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-40 object-cover rounded-xl mb-4 bg-teal-900"
                  />
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <span className="text-orange-500 font-bold text-xl">
                    ${course.price}
                  </span>
                  <Link 
                    href={`/courses/${courseId}`}
                    className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors inline-block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}