import React, { useState, useEffect } from "react";
// Ensure bzlogo.png is in your /src folder
import BenzeneNetworkLogo from "./bzlogo.png";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // --- REUSABLE COMPONENTS ---
  const NavLink = ({ children, targetPage }) => (
    <button
      onClick={() => setPage(targetPage)}
      className={`font-medium transition-colors ${
        page === targetPage
          ? "text-cyan-400"
          : "text-slate-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );

  const Navbar = () => (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-900">
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => setPage("home")}
      >
        <img
          src={BenzeneNetworkLogo}
          alt="Logo"
          className="w-10 h-10 group-hover:scale-110 transition-transform"
        />
        <span className="text-white text-2xl font-black tracking-tighter">
          BENZENE
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm">
        <NavLink targetPage="home">Home</NavLink>
        <NavLink targetPage="marketplace">Rent GPUs</NavLink>
        <NavLink targetPage="host">Earn Rewards</NavLink>
      </div>
      <button className="bg-cyan-500 text-slate-950 px-5 py-2 rounded-lg text-sm font-bold hover:bg-cyan-400 transition-all">
        Connect Wallet
      </button>
    </nav>
  );

  // --- PAGE: HOME (The "Two Paths" Entrance) ---
  const HomePage = () => (
    <div className="animate-in fade-in duration-700 pt-20 px-6 text-center">
      <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-none">
        Decentralized <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Compute Power.
        </span>
      </h1>
      <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
        Rent high-end GPUs for AI/Rendering or earn passive income by sharing
        your idle hardware.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setPage("marketplace")}
          className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 transition-all"
        >
          I want to Rent
        </button>
        <button
          onClick={() => setPage("host")}
          className="bg-slate-900 border border-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-cyan-500 transition-all"
        >
          I want to Host
        </button>
      </div>
    </div>
  );

  // --- PAGE: HOSTING (Provider Flow) ---
  const HostPage = () => (
    <div className="max-w-5xl mx-auto p-6 animate-in slide-in-from-right-5 duration-500">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4">
          Earn with your Idle GPU
        </h2>
        <p className="text-slate-400">
          Turn your gaming rig or server into a Benzene Node in 3 minutes.
        </p>
      </div>

      {/* INSTRUCTIONS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            step: "01",
            title: "Install Client",
            desc: "Download our lightweight Docker-based daemon for Linux/Windows.",
          },
          {
            step: "02",
            title: "Set Price",
            desc: "Choose your hourly rate and specify available VRAM.",
          },
          {
            step: "03",
            title: "Receive Crypto",
            desc: "Get paid instantly in BZ tokens as users rent your power.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800"
          >
            <div className="text-cyan-500 font-mono text-xl mb-4">
              {item.step}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="bg-gradient-to-br from-cyan-900/20 to-slate-900 border border-cyan-500/30 p-10 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to join the network?
        </h3>
        <code className="block bg-black/50 p-4 rounded-lg text-cyan-300 font-mono text-sm mb-6 max-w-md mx-auto">
          curl -sSL https://get.benzene.network | bash
        </code>
        <button className="bg-cyan-500 text-black px-10 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          Download Host Client
        </button>
      </div>
    </div>
  );

  // --- PAGE: MARKETPLACE (Renter Flow) ---
  const MarketplacePage = () => (
    <div className="max-w-7xl mx-auto p-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-black text-white">Marketplace</h2>
          <p className="text-slate-500">
            Select a node to begin your Docker deployment.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            model: "NVIDIA RTX 4070",
            price: "INR 23/hr",
            vram: "16GB",
            uptime: "93.5%",
          },
          {
            model: "NVIDIA RTX 3050",
            price: "INR 15/hr",
            vram: "8GB",
            uptime: "84%",
          },
          {
            model: "NVIDIA RTX 3060Ti",
            price: "INR 17/hr",
            vram: "16GB",
            uptime: "78.5%",
          },
        ].map((gpu, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/50 transition-all group"
          >
            <div className="flex justify-between mb-4">
              <span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">
                Online
              </span>
              <span className="text-white font-mono font-bold">
                {gpu.price}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-1">{gpu.model}</h4>
            <p className="text-slate-400 text-sm mb-6">
              {gpu.vram} VRAM • {gpu.uptime} Uptime
            </p>
            <button className="w-full bg-cyan-600 py-3 rounded-lg font-bold text-white group-hover:bg-cyan-500 transition-all active:scale-95">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // --- MAIN APP RENDER ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="pb-24">
        {page === "home" && <HomePage />}
        {page === "marketplace" && <MarketplacePage />}
        {page === "host" && <HostPage />}
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-slate-900 text-center text-slate-600 text-xs tracking-widest uppercase">
        Benzene v1.0 // Decentralized Compute Protocol
      </footer>
    </div>
  );
}
