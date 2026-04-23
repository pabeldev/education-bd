"use client";

import React from 'react';
import Link from 'next/link';
// নিচের লাইনটি খুব মন দিয়ে দেখুন, পাথ ঠিক আছে কি না
import Navbar from '../components/Navbar'; 

export default function ServicePage() {
  const serviceDetails = [
    { 
      id: 'usa', 
      country: 'আমেরিকা', 
      title: 'Study in USA', 
      img: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=800', 
      info: 'আমেরিকার উচ্চশিক্ষা ব্যবস্থায় রয়েছে বিশ্বসেরা সব বিশ্ববিদ্যালয়। আইভি লীগ থেকে শুরু করে পাবলিক স্টেট ইউনিভার্সিটি—সবখানে রয়েছে স্কলারশিপের সুযোগ। আমরা আপনাকে সঠিক বিশ্ববিদ্যালয় নির্বাচন এবং ভিসা প্রসেসিংয়ে সহায়তা করি।' 
    },
    { 
      id: 'canada', 
      country: 'কানাডা', 
      title: 'Study in Canada', 
      img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800', 
      info: 'নিরাপদ জীবনযাত্রা এবং পোস্ট-গ্রাজুয়েশন ওয়ার্ক পারমিটের জন্য কানাডা শিক্ষার্থীদের প্রথম পছন্দ। পিআর (PR) পাওয়ার সুযোগ থাকায় অনেক শিক্ষার্থী কানাডাকে বেছে নেয়। আমাদের অভিজ্ঞ টিম আপনার ফাইল প্রসেসিং করবে নির্ভরযোগ্যভাবে।' 
    },
    { 
      id: 'uk', 
      country: 'ইউকে', 
      title: 'Study in UK', 
      img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800', 
      info: 'যুক্তরাজ্যের সংক্ষিপ্ত মেয়াদের মাস্টার্স কোর্স এবং বিশ্বমানের ডিগ্রি বিশ্বজুড়ে সমাদৃত। দ্রুত ভিসা প্রসেসিং এবং স্পাউসসহ যাওয়ার সুযোগ থাকায় ইউকে এখন অনেক জনপ্রিয়।' 
    },
    { 
      id: 'australia', 
      country: 'অস্ট্রেলিয়া', 
      title: 'Study in Australia', 
      img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800', 
      info: 'অস্ট্রেলিয়ায় রয়েছে অসাধারণ আবহাওয়া এবং মানসম্মত শিক্ষা। পার্ট-টাইম কাজের সুযোগ এবং পড়াশোনা শেষে কাজের অভিজ্ঞতার জন্য অস্ট্রেলিয়া সেরা গন্তব্য হতে পারে।' 
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white font-hind">
      {/* আপনার দেওয়া নেভবারটি এখানে বসবে */}
      <Navbar />

      <div className="max-w-6xl mx-auto pt-32 pb-20 px-6">
        <div className="mb-12">
            <Link href="/" className="text-blue-500 font-bold hover:underline flex items-center gap-2">
               <span>←</span> মেইন পেজে ফিরে যান
            </Link>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-blue-400 mb-16 text-center uppercase font-poppins tracking-tighter">
          Our Global Services
        </h1>
        
        <div className="flex flex-col gap-24">
          {serviceDetails.map((item) => (
            <section 
              key={item.id} 
              id={item.id} 
              className="scroll-mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl"
            >
              <div className="rounded-[30px] overflow-hidden h-[350px] shadow-xl border border-white/5">
                <img 
                  src={item.img} 
                  alt={item.country} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-600/30">
                    {item.country}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-blue-400 mb-6 font-poppins uppercase tracking-tight">
                  {item.title}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-hind">
                  {item.info}
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-10 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                        কাউন্সেলিং নিন
                    </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <footer className="mt-24 text-center border-t border-white/5 py-10">
         <p className="text-slate-600 text-[10px] font-poppins uppercase tracking-[0.2em]">
           © 2026 | Developed by <span className="text-blue-500 font-bold">FramEmpire</span>
         </p>
      </footer>
    </main>
  );
}