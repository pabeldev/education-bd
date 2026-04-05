"use client";

import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';

export default function Home() {
  const destinations = [
    // আপনি যে ইউএসএ-র ছবি চেয়েছিলেন তার ডিরেক্ট লিঙ্ক এখানে (fbtHV94f-bA)
    { country: 'আমেরিকা', city: 'USA', img: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=800&auto=format&fit=crop' },
    { country: 'কানাডা', city: 'Canada', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop' },
    { country: 'ইউকে', city: 'UK', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop' },
    { country: 'অস্ট্রেলিয়া', city: 'Australia', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <main className="relative min-h-screen bg-[#020617] text-white font-hind">
      <AnimatedBackground />

      {/* --- ১. হিরো সেকশন --- */}
      <section className="relative flex flex-col items-center text-center gap-8 max-w-6xl mx-auto pt-48 pb-24 px-6">
        <h1 className="text-5xl md:text-[85px] font-black tracking-tight leading-[1.2] mb-4">
          গড়ুন আপনার <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent font-poppins uppercase tracking-tighter">
            Global Future
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
          বিদেশে উচ্চশিক্ষা এবং ভিসা প্রসেসিংয়ে আমরা দিচ্ছি নির্ভরযোগ্য সমাধান। আপনার স্বপ্ন পূরণে দক্ষ কনসালটেন্টদের সাথে কথা বলুন।
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
              আমরা শিক্ষার্থীদের বিদেশের সেরা বিশ্ববিদ্যালয়ে ভর্তির সুযোগ এবং স্কলারশিপ নিশ্চিত করতে কাজ করি। সঠিক দিকনির্দেশনাই আমাদের লক্ষ্য।
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

      {/* --- ৩. হোয়াই চুজ আস সেকশন --- */}
      <section className="bg-white/5 py-24 text-center px-6">
        <h2 className="text-4xl font-black text-blue-400 mb-12 uppercase font-poppins">Why Choose Us?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {['অভিজ্ঞ কনসালটেন্ট', 'সঠিক ক্যারিয়ার প্ল্যানিং', 'দ্রুত ফাইল প্রসেসিং', 'বিনা মূল্যে মক টেস্ট'].map((item, i) => (
            <div key={i} className="p-10 bg-[#020617] rounded-[35px] border border-white/10 shadow-xl group hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center font-poppins font-black">{i + 1}</div>
              <p className="font-bold text-lg text-slate-200 font-hind">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ৪. গন্তব্য সেকশন --- */}
      <section id="destinations" className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl font-black text-blue-400 mb-16 uppercase font-poppins">Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.country} className="group relative h-[450px] rounded-[35px] overflow-hidden border border-white/10 shadow-2xl">
              <img src={dest.img} alt={dest.country} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-left">
                <p className="text-blue-400 font-bold text-xs uppercase mb-1 font-poppins tracking-tighter">{dest.city}</p>
                <h3 className="text-3xl font-black text-white">{dest.country}</h3>
              </div>
            </div>
          ))}
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

      {/* --- ৬. ফুটার (Site Map এবং FramEmpire ফিক্সড) --- */}
      <footer className="bg-[#010409] border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-3xl font-black text-blue-400 font-poppins mb-6">Education BD</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-hind">বিদেশে উচ্চশিক্ষা এবং ক্যারিয়ার গড়ার স্বপ্ন পূরণে আমরা আপনার বিশ্বস্ত সহযোগী।</p>
          </div>
          {/* Site Map Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins uppercase tracking-widest text-sm text-slate-200">Site Map</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-poppins">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#destinations" className="hover:text-blue-500 transition-colors">Destinations</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins uppercase tracking-widest text-sm text-slate-200">Contact</h4>
            <p className="text-slate-400 text-sm font-poppins mb-2">Email: info@educationbd.com</p>
            <p className="text-slate-400 text-sm font-poppins">Phone: +880 1234 567 890</p>
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