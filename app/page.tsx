"use client";

import React from 'react';
import Link from 'next/link';
import AnimatedBackground from './components/AnimatedBackground';

export default function Home() {
  const destinations = [
    { id: 'usa', country: 'আমেরিকা', city: 'USA', img: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=800&auto=format&fit=crop' },
    { id: 'canada', country: 'কানাডা', city: 'Canada', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop' },
    { id: 'uk', country: 'ইউকে', city: 'UK', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop' },
    { id: 'australia', country: 'অস্ট্রেলিয়া', city: 'Australia', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <main className="relative min-h-screen bg-[#020617] text-white font-hind overflow-x-hidden">
      <AnimatedBackground />

      {/* --- ১. হিরো সেকশন --- */}
      <section className="relative flex flex-col items-center text-center gap-8 max-w-6xl mx-auto pt-48 pb-24 px-6">
        <h1 className="text-5xl md:text-[85px] font-black tracking-tight leading-[1.2] mb-4">
          গড়ুন আপনার <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent font-poppins uppercase tracking-tighter">
            Global Future
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
          বিদেশে উচ্চশিক্ষা এবং ভিসা প্রসেসিংয়ে আমরা দিচ্ছি নির্ভরযোগ্য সমাধান। আপনার স্বপ্ন পূরণে দক্ষ কনসালটেন্টদের সাথে কথা বলুন।
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-xl">
            ফ্রি পরামর্শ নিন
          </a>
        </div>
        <div className="mt-12 w-full max-w-5xl aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
          <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop" alt="Campus Life" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* --- ২. এবাউট সেকশন --- */}
      <section id="about" className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="About" className="w-full h-[450px] object-cover" />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 text-blue-400 font-hind">এডুকেশন বিডি সম্পর্কে</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-hind">
              আমরা শিক্ষার্থীদের বিদেশের সেরা বিশ্ববিদ্যালয়ে ভর্তির সুযোগ এবং স্কলারশিপ নিশ্চিত করতে কাজ করি। সঠিক দিকনির্দেশনাই আমাদের লক্ষ্য।
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center">
                <span className="block text-4xl font-black text-blue-500 mb-1 font-poppins">500+</span>
                <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">ভিসা সাকসেস</span>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center">
                <span className="block text-4xl font-black text-blue-500 mb-1 font-poppins">100%</span>
                <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">সাপোর্ট</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ৩. এমপ্যাথি সার্ভিস সেকশন --- */}
      <section id="services" className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-400 uppercase font-poppins mb-4">How We Help You</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-hind text-lg">
            বিদেশে যাওয়ার স্বপ্নে আমরা শুধু ফাইল প্রসেস করি না, আপনার দ্বিধাগুলোকে আত্মবিশ্বাসে রূপান্তর করি।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              fear: "কোন দেশ আমার জন্য সঠিক?",
              solution: "পার্সোনালাইজড কাউন্সেলিং",
              desc: "আপনার প্রোফাইল, বাজেট এবং লক্ষ্য বিশ্লেষণ করে আমরা সবচেয়ে সম্ভাবনাময় দেশ ও বিশ্ববিদ্যালয় খুঁজে দেই।"
            },
            {
              fear: "ভিসা রিজেকশনের ভয় কাজ করছে?",
              solution: "নির্ভুল ডকুমেন্টেশন",
              desc: "প্রতিটি ফাইল আমরা এমনভাবে তৈরি করি যেন এম্বাসি আপনার উদ্দেশ্য সম্পর্কে শতভাগ নিশ্চিত থাকে।"
            },
            {
              fear: "একা অচেনা দেশে থাকবো কীভাবে?",
              solution: "প্রি-ডিপারচার ও সেটেলমেন্ট সাপোর্ট",
              desc: "বিমানে ওঠার আগে থেকে শুরু করে গন্তব্যে পৌঁছে আবাসন ঠিক করা পর্যন্ত আমরা আপনার সাথে আছি।"
            },
            {
              fear: "স্কলারশিপ কি আদৌ পাওয়া সম্ভব?",
              solution: "ফান্ডিং ও স্কলারশিপ গাইড",
              desc: "আপনার মেধা অনুযায়ী সর্বোচ্চ আর্থিক সহায়তা নিশ্চিত করতে আমরা সেরা স্কলারশিপগুলো খুঁজে বের করি।"
            },
            {
              fear: "আইইএলটিএস নিয়ে দুশ্চিন্তা?",
              solution: "ল্যাঙ্গুয়েজ ও ইন্টারভিউ প্রিপারেশন",
              desc: "সঠিক গাইডলাইন এবং মক টেস্টের মাধ্যমে আপনার জড়তা কাটিয়ে তোলার দায়িত্ব আমাদের।"
            },
            {
              fear: "ভবিষ্যৎ ক্যারিয়ার কি উজ্জ্বল হবে?",
              solution: "লং-টার্ম ক্যারিয়ার প্ল্যানিং",
              desc: "শুধুমাত্র ভর্তি নয়, পড়াশোনা শেষ করে সেখানে স্থায়ী হওয়া বা ভালো চাকরির সুযোগ নিয়েও আমরা গাইড করি।"
            }
          ].map((service, index) => (
            <div key={index} className="group p-10 bg-white/5 rounded-[40px] border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2 font-poppins">You Think:</span>
                <p className="text-lg italic text-slate-400 font-hind">"{service.fear}"</p>
              </div>
              <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-blue-500/30 transition-all"></div>
              <div>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2 font-poppins">Our Solution:</span>
                <h3 className="text-2xl font-bold text-white mb-4 font-hind">{service.solution}</h3>
                <p className="text-slate-400 leading-relaxed font-hind text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ৪. গন্তব্য সেকশন --- */}
      <section id="destinations" className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl font-black text-blue-400 mb-16 uppercase font-poppins">Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <Link key={dest.id} href={`/services#${dest.id}`} className="group relative h-[450px] rounded-[35px] overflow-hidden border border-white/10 shadow-2xl block transition-all active:scale-95">
              <img src={dest.img} alt={dest.country} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-left">
                <p className="text-blue-400 font-bold text-xs uppercase mb-1 font-poppins tracking-tighter">{dest.city}</p>
                <h3 className="text-3xl font-black text-white">{dest.country}</h3>
                <span className="text-sm text-blue-400 font-bold mt-2 inline-block opacity-0 group-hover:opacity-100 transition-all">Details →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
           <Link href="/services" className="px-12 py-5 border-2 border-blue-500 text-blue-400 font-black text-xl rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-95 inline-block font-poppins">
             SEE ALL SERVICES
           </Link>
        </div>
      </section>

      {/* --- ৫. কন্টাক্ট ফরম --- */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[50px] shadow-2xl relative">
          <h2 className="text-4xl font-black mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-hind">আবেদন করুন</h2>
          <form className="space-y-6 font-poppins">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
              <input type="email" placeholder="Email Address" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <select defaultValue="placeholder" className="w-full p-5 rounded-2xl bg-[#020617] border border-white/10 text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer appearance-none font-hind">
              <option value="placeholder" disabled>আপনার পছন্দের গন্তব্য</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
            <textarea rows={4} placeholder="Your Message..." className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
            <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-2xl transition-all shadow-xl shadow-blue-600/30 active:scale-95 font-hind">
              সাবমিট করুন
            </button>
          </form>
        </div>
      </section>

      {/* --- ৬. ফুটার --- */}
      <footer className="bg-[#010409] border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-3xl font-black text-blue-400 font-poppins mb-6">Education BD</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-hind">বিদেশে উচ্চশিক্ষা এবং ক্যারিয়ার গড়ার স্বপ্ন পূরণে আমরা আপনার বিশ্বস্ত সহযোগী।</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins uppercase tracking-widest text-sm text-slate-200">Site Map</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-poppins">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#destinations" className="hover:text-blue-500 transition-colors">Destinations</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins uppercase tracking-widest text-sm text-slate-200">Contact</h4>
            <p className="text-slate-400 text-sm font-poppins mb-2">Email: info@educationbd.com</p>
            <p className="text-slate-400 text-sm font-poppins">Phone: +880 1711-316704</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-10 border-t border-white/5">
          <p className="text-slate-600 text-[10px] font-poppins tracking-[0.2em]">
            © 2026 | Developed by <a href="https://framempire.com" target="_blank" className="text-blue-500 font-bold hover:underline transition-all">FramEmpire</a>
          </p>
        </div>
      </footer>
    </main>
  );
}