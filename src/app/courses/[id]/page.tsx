// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { useParams } from 'next/navigation';
// // import Link from 'next/link';

// // interface Lecture {
// //   title: string;
// //   duration: string;
// // }

// // interface Course {
// //   _id?: string;
// //   title: string;
// //   description?: string;
// //   price: number;
// //   thumbnail: string;
// //   lectures?: Lecture[];
// //   about?: string;
// // }

// // // ডিফল্ট ফলব্যাক কোর্স লিস্ট (যদি ব্যাকএন্ড থেকে ডেটা না আসে)
// // const fallbackCourses: Record<string, Course> = {
// //   '1': {
// //     _id: '1',
// //     title: "Web Development Fundamentals",
// //     description: "Learn the fundamentals of web development, HTML, CSS, and modern JavaScript.",
// //     price: 49,
// //     thumbnail: "https://i.ibb.co.com/4g2J942/web-dev.png",
// //     lectures: [
// //       { title: "Introduction to HTML & CSS", duration: "10:15" },
// //       { title: "CSS Flexbox & Grid", duration: "14:30" },
// //       { title: "JavaScript Basics", duration: "20:00" }
// //     ],
// //     about: "This course is designed for absolute beginners who want to start their journey in web development."
// //   },
// //   '2': {
// //     _id: '2',
// //     title: "React for Beginners",
// //     description: "Learn the basics of React.js and build modern web applications.",
// //     price: 59,
// //     thumbnail: "https://i.ibb.co.com/9v18g2t/react.png",
// //     lectures: [
// //       { title: "Introduction to React", duration: "12:45" },
// //       { title: "Components & Props", duration: "15:20" },
// //       { title: "React Hooks", duration: "18:10" }
// //     ],
// //     about: "Master React.js fundamentals, hooks, state management, and build dynamic user interfaces."
// //   },
// //   '3': {
// //     _id: '3',
// //     title: "Data Science Basics",
// //     description: "Introduction to data science concepts, Python, and data analysis.",
// //     price: 49,
// //     thumbnail: "https://i.ibb.co.com/8K9L7x2/data-science.png",
// //     lectures: [
// //       { title: "Python for Data Science", duration: "16:00" },
// //       { title: "Data Analysis with Pandas", duration: "22:10" },
// //       { title: "Data Visualization", duration: "14:50" }
// //     ],
// //     about: "Get started with data science using Python and popular analysis libraries."
// //   },
// //   '4': {
// //     _id: '4',
// //     title: "UI/UX Design Basics",
// //     description: "Learn UI/UX principles, wireframing, and Figma design tool.",
// //     price: 39,
// //     thumbnail: "https://i.ibb.co.com/2m65s7q/ui-ux.png",
// //     lectures: [
// //       { title: "Introduction to UI/UX", duration: "11:20" },
// //       { title: "Wireframing & Prototyping", duration: "18:40" },
// //       { title: "Figma Essentials", duration: "25:00" }
// //     ],
// //     about: "Learn user interface and user experience design from scratch using Figma."
// //   }
// // };

// // export default function CourseDetailsPage() {
// //   const params = useParams();
// //   const id = params?.id as string;

// //   const [course, setCourse] = useState<Course | null>(null);
// //   const [activeTab, setActiveTab] = useState<'content' | 'about'>('content');

// //   useEffect(() => {
// //     // প্রথমে লোকাল ফলব্যাক থেকে ডেটা সেট করা
// //     if (id && fallbackCourses[id]) {
// //       setCourse(fallbackCourses[id]);
// //     }

// //     // ব্যাকএন্ড থেকে ডাইনামিক ডেটা ফেচ করার চেষ্টা
// //     async function fetchCourseDetails() {
// //       try {
// //         const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://lms-backend-tfco.vercel.app/api/courses';
// //         const res = await fetch(`${API_URL}/${id}`);
// //         const data = await res.json();
// //         if (data.success && data.data) {
// //           setCourse(data.data);
// //         }
// //       } catch (error) {
// //         console.error('Using fallback course data due to fetch error:', error);
// //       }
// //     }

// //     if (id) {
// //       fetchCourseDetails();
// //     }
// //   }, [id]);

// //   if (!course) {
// //     return (
// //       <div className="min-h-[60vh] flex items-center justify-center">
// //         <p className="text-gray-500 text-lg">Loading course details...</p>
// //       </div>
// //     );
// //   }

// //   const lecturesList = course.lectures || [
// //     { title: "Introduction to the Course", duration: "10:00" },
// //     { title: "Core Concepts & Practical", duration: "15:00" }
// //   ];

// //   return (
// //     <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
        
// //         {/* ব্রেডক্রাম্ব (Breadcrumb) */}
// //         <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
// //           <Link href="/" className="hover:text-teal-700">Home</Link>
// //           <span>&gt;</span>
// //           <Link href="/courses" className="hover:text-teal-700">Courses</Link>
// //           <span>&gt;</span>
// //           <span className="text-gray-900 font-medium">{course.title}</span>
// //         </div>

// //         {/* টপ সেকশন: ভিডিও প্লেয়ার এবং কোর্সের বিবরণ */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          
// //           {/* বাম পাশে ভিডিও থাম্বনেইল / প্লেয়ার */}
// //           <div className="lg:col-span-7">
// //             <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group shadow-md">
// //               <img 
// //                 src={course.thumbnail} 
// //                 alt={course.title} 
// //                 className="w-full h-full object-cover opacity-80"
// //               />
// //               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
// //                 <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
// //                   ▶
// //                 </div>
// //               </div>
              
// //               {/* ভিডিও কন্ট্রোল বার */}
// //               <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between text-white text-xs">
// //                 <div className="flex items-center gap-3">
// //                   <span>▶</span>
// //                   <span>🔊</span>
// //                   <span>0:00 / 12:45</span>
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                   <span>⚙️</span>
// //                   <span>⛶</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* ডান পাশে কোর্সের ইনফো, প্রাইস এবং এনরোল বাটন */}
// //           <div className="lg:col-span-5 flex flex-col justify-between">
// //             <div>
// //               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
// //                 {course.title}
// //               </h1>
// //               <p className="text-gray-600 text-sm leading-relaxed mb-6">
// //                 {course.description || "Learn the essential skills and master modern concepts with hands-on projects."}
// //               </p>
// //             </div>

// //             <div>
// //               <div className="flex items-center justify-between mb-6">
// //                 <span className="text-3xl font-extrabold text-orange-500">
// //                   ${course.price}
// //                 </span>
// //               </div>
// //               <button 
// //                 onClick={() => alert("Enrollment feature coming soon!")}
// //                 className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-sm text-center"
// //               >
// //                 Enroll Now
// //               </button>
// //             </div>

// //           </div>
// //         </div>

// //         {/* ট্যাব নেভিগেশন (Course Content & About) */}
// //         <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
// //           <div className="flex border-b border-gray-100 gap-8 mb-6">
// //             <button 
// //               onClick={() => setActiveTab('content')}
// //               className={`pb-3 font-semibold text-sm transition-colors relative ${
// //                 activeTab === 'content' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-500 hover:text-gray-900'
// //               }`}
// //             >
// //               Course Content
// //             </button>
// //             <button 
// //               onClick={() => setActiveTab('about')}
// //               className={`pb-3 font-semibold text-sm transition-colors relative ${
// //                 activeTab === 'about' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-500 hover:text-gray-900'
// //               }`}
// //             >
// //               About
// //             </button>
// //           </div>

// //           {activeTab === 'content' ? (
// //             <div>
// //               <h2 className="text-lg font-bold text-gray-900 mb-4">
// //                 Lectures ({lecturesList.length})
// //               </h2>
// //               <div className="space-y-3">
// //                 {lecturesList.map((lecture, index) => (
// //                   <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-teal-50/30 transition-colors">
// //                     <div className="flex items-center gap-3">
// //                       <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs">
// //                         ▶
// //                       </div>
// //                       <span className="text-sm font-medium text-gray-800">{lecture.title}</span>
// //                     </div>
// //                     <span className="text-xs text-gray-500 font-medium">{lecture.duration}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="text-gray-600 text-sm leading-relaxed space-y-4">
// //               <h2 className="text-lg font-bold text-gray-900">About This Course</h2>
// //               <p>{course.about || course.description}</p>
// //               <p>By the end of this course, you will have gained practical experience and built real-world projects that you can showcase in your portfolio.</p>
// //             </div>
// //           )}

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import Link from 'next/link';

// interface Lecture {
//   title: string;
//   duration: string;
// }

// interface Course {
//   _id?: string;
//   title: string;
//   description?: string;
//   price: number;
//   thumbnail: string;
//   lectures?: Lecture[];
//   about?: string;
//   instructor?: string;
//   rating?: number;
//   reviewsCount?: number;
// }

// const fallbackCourses: Record<string, Course> = {
//   '1': {
//     _id: '1',
//     title: "Web Development Fundamentals",
//     description: "Master the key pillars of this discipline and build production-ready projects with this comprehensive course. From foundation steps up to the core industry-standard architecture, this syllabus is perfectly packaged for career growth.",
//     price: 49,
//     thumbnail: "https://i.ibb.co.com/4g2J942/web-dev.png",
//     instructor: "Robert Fox",
//     rating: 4.8,
//     reviewsCount: 45,
//     lectures: [
//       { title: "Introduction to HTML & CSS", duration: "10:15" },
//       { title: "CSS Flexbox & Grid", duration: "14:30" },
//       { title: "JavaScript Basics", duration: "20:00" }
//     ],
//     about: "This course is designed for absolute beginners who want to start their journey in web development and build real-world professional projects."
//   },
//   '2': {
//     _id: '2',
//     title: "React for Beginners",
//     description: "Learn the fundamentals of React.js and build modern web applications. Master hooks, state management, and component-driven architecture to kickstart your frontend developer journey.",
//     price: 59,
//     thumbnail: "https://i.ibb.co.com/9v18g2t/react.png",
//     instructor: "Sarah Jenkins",
//     rating: 4.9,
//     reviewsCount: 53,
//     lectures: [
//       { title: "Introduction to React", duration: "12:45" },
//       { title: "Components & Props", duration: "15:20" },
//       { title: "React Hooks", duration: "18:10" }
//     ],
//     about: "Master React.js fundamentals, hooks, state management, and build dynamic user interfaces from scratch."
//   },
//   '3': {
//     _id: '3',
//     title: "Data Science Basics",
//     description: "Introduction to data science concepts, Python, and data analysis. Learn how to extract meaningful insights from raw data using popular Python libraries.",
//     price: 49,
//     thumbnail: "https://i.ibb.co.com/8K9L7x2/data-science.png",
//     instructor: "Alex Morgan",
//     rating: 4.7,
//     reviewsCount: 38,
//     lectures: [
//       { title: "Python for Data Science", duration: "16:00" },
//       { title: "Data Analysis with Pandas", duration: "22:10" },
//       { title: "Data Visualization", duration: "14:50" }
//     ],
//     about: "Get started with data science using Python and popular analysis tools with hands-on practice."
//   },
//   '4': {
//     _id: '4',
//     title: "UI/UX Design Basics",
//     description: "Learn UI/UX principles, wireframing, and Figma design tool. Understand user psychology and create stunning, accessible interfaces for web and mobile apps.",
//     price: 39,
//     thumbnail: "https://i.ibb.co.com/2m65s7q/ui-ux.png",
//     instructor: "Emma Watson",
//     rating: 4.6,
//     reviewsCount: 29,
//     lectures: [
//       { title: "Introduction to UI/UX", duration: "11:20" },
//       { title: "Wireframing & Prototyping", duration: "18:40" },
//       { title: "Figma Essentials", duration: "25:00" }
//     ],
//     about: "Learn user interface and user experience design from scratch using modern design principles and Figma."
//   }
// };

// export default function CourseDetailsPage() {
//   const params = useParams();
//   const id = params?.id as string;

//   const [course, setCourse] = useState<Course | null>(null);
//   const [activeTab, setActiveTab] = useState<'content' | 'about'>('content');

//   useEffect(() => {
//     if (id && fallbackCourses[id]) {
//       setCourse(fallbackCourses[id]);
//     }

//     async function fetchCourseDetails() {
//       try {
//         const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://lms-backend-tfco.vercel.app/api/courses';
//         const res = await fetch(`${API_URL}/${id}`);
//         const data = await res.json();
//         if (data.success && data.data) {
//           setCourse(data.data);
//         }
//       } catch (error) {
//         console.error('Using fallback course data due to fetch error:', error);
//       }
//     }

//     if (id) {
//       fetchCourseDetails();
//     }
//   }, [id]);

//   if (!course) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Loading course details...</p>
//       </div>
//     );
//   }

//   const lecturesList = course.lectures || [
//     { title: "Introduction to the Course", duration: "10:00" },
//     { title: "Core Concepts & Practical", duration: "15:00" }
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* ব্রেডক্রাম্ব */}
//         <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
//           <Link href="/" className="hover:text-teal-700">Home</Link>
//           <span>&gt;</span>
//           <Link href="/courses" className="hover:text-teal-700">Courses</Link>
//           <span>&gt;</span>
//           <span className="text-gray-900 font-medium">{course.title}</span>
//         </div>

//         {/* টপ সেকশন: ভিডিও প্লেয়ার এবং কোর্সের তথ্য */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
          
//           {/* বাম পাশে ভিডিও প্লেয়ার */}
//           <div className="lg:col-span-7">
//             <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group shadow-md">
//               <img 
//                 src={course.thumbnail} 
//                 alt={course.title} 
//                 className="w-full h-full object-cover opacity-80"
//               />
//               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                 <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
//                   ▶
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ডান পাশে টাইটেল, ডেসক্রিপশন, রেটিংস, প্রাইস এবং এনরোল বাটন */}
//           <div className="lg:col-span-5 flex flex-col justify-between">
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
//                 {course.title}
//               </h1>
              
//               {/* একটু বড় এবং ডিটেইলড ডেসক্রিপশন */}
//               <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                 {course.description}
//               </p>

//               {/* ইন্সট্রাক্টর ইনফো */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">
//                   {course.instructor?.[0] || 'R'}
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-900">{course.instructor || "Robert Fox"}</h4>
//                   <p className="text-xs text-gray-500">Instructor</p>
//                 </div>
//               </div>

//               {/* রেটিংস সেকশন */}
//               <div className="flex items-center gap-2 mb-6">
//                 <div className="flex text-amber-400 text-sm">
//                   ★★★★★
//                 </div>
//                 <span className="text-sm font-bold text-gray-900">{course.rating || 4.7}</span>
//                 <span className="text-xs text-gray-500">({course.reviewsCount || 53} reviews)</span>
//               </div>
//             </div>

//             {/* প্রাইস এবং এনরোল বাটন (মাঝ বরাবর সজ্জিত) */}
//             <div className="pt-4 border-t border-gray-100">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-3xl font-extrabold text-teal-700">
//                   ${course.price} <span className="text-xs font-normal text-gray-500">/ course</span>
//                 </span>
//               </div>
              
//               <button 
//                 onClick={() => alert("Enrollment feature coming soon!")}
//                 className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3.5 px-6 rounded-xl transition-colors shadow-sm text-center"
//               >
//                 Enroll Now
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* ট্যাব নেভিগেশন (Course Content & About) */}
//         <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
//           <div className="flex border-b border-gray-100 gap-8 mb-6">
//             <button 
//               onClick={() => setActiveTab('content')}
//               className={`pb-3 font-semibold text-sm transition-colors relative ${
//                 activeTab === 'content' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-500 hover:text-gray-900'
//               }`}
//             >
//               Course Content
//             </button>
//             <button 
//               onClick={() => setActiveTab('about')}
//               className={`pb-3 font-semibold text-sm transition-colors relative ${
//                 activeTab === 'about' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-500 hover:text-gray-900'
//               }`}
//             >
//               About
//             </button>
//           </div>

//           {activeTab === 'content' ? (
//             <div>
//               <h2 className="text-lg font-bold text-gray-900 mb-4">
//                 Lectures ({lecturesList.length})
//               </h2>
//               <div className="space-y-3">
//                 {lecturesList.map((lecture, index) => (
//                   <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-teal-50/30 transition-colors">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs">
//                         ▶
//                       </div>
//                       <span className="text-sm font-medium text-gray-800">{lecture.title}</span>
//                     </div>
//                     <span className="text-xs text-gray-500 font-medium">{lecture.duration}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="text-gray-600 text-sm leading-relaxed space-y-4">
//               <h2 className="text-lg font-bold text-gray-900">About This Course</h2>
//               <p>{course.about || course.description}</p>
//               <p>By the end of this course, you will have gained practical experience and built real-world projects that you can showcase in your portfolio to advance your career.</p>
//             </div>
//           )}

//         </div>

//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Lecture {
  title: string;
  duration: string;
}

interface Course {
  _id?: string;
  title: string;
  description?: string;
  price: number;
  thumbnail: string;
  lectures?: Lecture[];
  about?: string;
  instructor?: string;
  rating?: number;
  reviewsCount?: number;
}

const fallbackCourses: Record<string, Course> = {
  '1': {
    _id: '1',
    title: "Web Development Fundamentals",
    description: "Master the key pillars of this discipline and build production-ready projects with this comprehensive course. From foundation steps up to the core industry-standard architecture, this syllabus is perfectly packaged for career growth.",
    price: 49,
    thumbnail: "https://i.ibb.co.com/4g2J942/web-dev.png",
    instructor: "Robert Fox",
    rating: 4.8,
    reviewsCount: 45,
    lectures: [
      { title: "Introduction to HTML & CSS", duration: "10:15" },
      { title: "CSS Flexbox & Grid", duration: "14:30" },
      { title: "JavaScript Basics", duration: "20:00" }
    ],
    about: "This course is designed for absolute beginners who want to start their journey in web development and build real-world professional projects."
  },
  '2': {
    _id: '2',
    title: "React for Beginners",
    description: "Learn the fundamentals of React.js and build modern web applications. Master hooks, state management, and component-driven architecture to kickstart your frontend developer journey.",
    price: 59,
    thumbnail: "https://i.ibb.co.com/9v18g2t/react.png",
    instructor: "Sarah Jenkins",
    rating: 4.9,
    reviewsCount: 53,
    lectures: [
      { title: "Introduction to React", duration: "12:45" },
      { title: "Components & Props", duration: "15:20" },
      { title: "React Hooks", duration: "18:10" }
    ],
    about: "Master React.js fundamentals, hooks, state management, and build dynamic user interfaces from scratch."
  },
  '3': {
    _id: '3',
    title: "Data Science Basics",
    description: "Introduction to data science concepts, Python, and data analysis. Learn how to extract meaningful insights from raw data using popular Python libraries.",
    price: 49,
    thumbnail: "https://i.ibb.co.com/8K9L7x2/data-science.png",
    instructor: "Alex Morgan",
    rating: 4.7,
    reviewsCount: 38,
    lectures: [
      { title: "Python for Data Science", duration: "16:00" },
      { title: "Data Analysis with Pandas", duration: "22:10" },
      { title: "Data Visualization", duration: "14:50" }
    ],
    about: "Get started with data science using Python and popular analysis tools with hands-on practice."
  },
  '4': {
    _id: '4',
    title: "UI/UX Design Basics",
    description: "Learn UI/UX principles, wireframing, and Figma design tool. Understand user psychology and create stunning, accessible interfaces for web and mobile apps.",
    price: 39,
    thumbnail: "https://i.ibb.co.com/2m65s7q/ui-ux.png",
    instructor: "Emma Watson",
    rating: 4.6,
    reviewsCount: 29,
    lectures: [
      { title: "Introduction to UI/UX", duration: "11:20" },
      { title: "Wireframing & Prototyping", duration: "18:40" },
      { title: "Figma Essentials", duration: "25:00" }
    ],
    about: "Learn user interface and user experience design from scratch using modern design principles and Figma."
  }
};

export default function CourseDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<'content' | 'about'>('content');

  useEffect(() => {
    if (id && fallbackCourses[id]) {
      setCourse(fallbackCourses[id]);
    }

    async function fetchCourseDetails() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://lms-backend-tfco.vercel.app/api/courses';
        const res = await fetch(`${API_URL}/${id}`);
        
        const contentType = res.headers.get("content-type");
        if (res.ok && contentType && contentType.includes("application/json")) {
          const data = await res.json();
          if (data.success && data.data) {
            setCourse(data.data);
          }
        }
      } catch (error) {
        console.error('Using fallback course data due to fetch error:', error);
      }
    }

    if (id) {
      fetchCourseDetails();
    }
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading course details...</p>
      </div>
    );
  }

  const lecturesList = course.lectures || [
    { title: "Introduction to the Course", duration: "10:00" },
    { title: "Core Concepts & Practical", duration: "15:00" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ব্রেডক্রাম্ব */}
        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span>&gt;</span>
          <Link href="/courses" className="hover:text-teal-700">Courses</Link>
          <span>&gt;</span>
          <span className="text-gray-900 font-medium">{course.title}</span>
        </div>

        {/* টপ সেকশন: ভিডিও প্লেয়ার এবং কোর্সের তথ্য */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
          
          {/* বাম পাশে ভিডিও প্লেয়ার */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group shadow-md">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                  ▶
                </div>
              </div>
            </div>
          </div>

          {/* ডান পাশে টাইটেল, ডেসক্রিপশন, রেটিংস, প্রাইস এবং এনরোল বাটন */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {course.title}
              </h1>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {course.description}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">
                  {course.instructor?.[0] || 'R'}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{course.instructor || "Robert Fox"}</h4>
                  <p className="text-xs text-gray-500">Instructor</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-amber-400 text-sm">
                  ★★★★★
                </div>
                <span className="text-sm font-bold text-gray-900">{course.rating || 4.7}</span>
                <span className="text-xs text-gray-500">({course.reviewsCount || 53} reviews)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-teal-700">
                  ${course.price} <span className="text-xs font-normal text-gray-500">/ course</span>
                </span>
              </div>
              
              <button 
                onClick={() => alert("Enrollment feature coming soon!")}
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3.5 px-6 rounded-xl transition-colors shadow-sm text-center"
              >
                Enroll Now
              </button>
            </div>

          </div>
        </div>

        {/* ট্যাব নেভিগেশন (Course Content & About) */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="flex border-b border-gray-100 gap-8 mb-6">
            <button 
              onClick={() => setActiveTab('content')}
              className={`pb-3 font-semibold text-sm transition-colors relative ${
                activeTab === 'content' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Course Content
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`pb-3 font-semibold text-sm transition-colors relative ${
                activeTab === 'about' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              About
            </button>
          </div>

          {activeTab === 'content' ? (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Lectures ({lecturesList.length})
              </h2>
              <div className="space-y-3">
                {lecturesList.map((lecture, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-teal-50/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs">
                        ▶
                      </div>
                      <span className="text-sm font-medium text-gray-800">{lecture.title}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{lecture.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <h2 className="text-lg font-bold text-gray-900">About This Course</h2>
              <p>{course.about || course.description}</p>
              <p>By the end of this course, you will have gained practical experience and built real-world projects that you can showcase in your portfolio to advance your career.</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}