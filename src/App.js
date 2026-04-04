import React, { useState, useEffect } from "react";
// Import the actual logo you just uploaded to src/
import BenzeneNetworkLogo from "./bzlogo.png";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    // Basic animation trigger on page change
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
        {/* LOGO INTEGRATION - Size and glow optimized for dark mode */}
        <img
          src={BenzeneNetworkLogo}
          alt="Benzene Network"
          className="w-12 h-12 rotate-2 group-hover:scale-110 group-hover:rotate-0 transition-all duration-300 shadow-[0_0_20px_rgba(30,58,138,0.5)]"
        />
        <span className="text-white text-3xl font-black tracking-tighter">
          BENZENE
        </span>
      </div>

      <div className="hidden md:flex gap-10 text-sm">
        <NavLink targetPage="home">Home</NavLink>
        <NavLink targetPage="marketplace">Marketplace</NavLink>
        <NavLink targetPage="dashboard">Host Dashboard</NavLink>
      </div>

      <button className="bg-cyan-500 text-slate-950 px-6 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-900/20 active:scale-95">
        Connect Wallet
      </button>
    </nav>
  );

  // --- PAGE: HOME ---
  const HomePage = () => (
    <div className="animate-in fade-in duration-700">
      <header className="pt-24 pb-20 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* LARGE LOGO (Psychological Anchor) */}
          <img
            src={BenzeneNetworkLogo}
            alt="Decentralized Compute"
            className="w-48 h-48 mb-12 drop-shadow-[0_0_35px_rgba(30,58,138,0.4)]"
          />

          <h1 className="text-7xl md:text-8xl font-black mb-10 tracking-tight text-white leading-[0.9]">
            GPU Compute.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              On-Demand.
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Benzene links decentralized, high-performance GPUs (H100, A100, RTX
            4090) directly to your Docker workloads. Seamless, secure, and
            affordable.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={() => setPage("marketplace")}
              className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-cyan-900/10 active:scale-95"
            >
              Rent a GPU Now
            </button>
            <div className="bg-slate-900 px-6 py-4 rounded-xl border border-slate-800 font-mono text-sm text-cyan-300">
              $ bz deploy --image pytorch/pytorch
            </div>
          </div>
        </div>
      </header>
    </div>
  );

  // --- PAGE: MARKETPLACE ---
  const MarketplacePage = () => (
    <div className="max-w-7xl mx-auto p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white tracking-tight">
          Active Nodes
        </h2>
        <p className="text-slate-400 mt-2">
          Real-time availability of global compute
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            model: "RTX 4090",
            price: "$0.42/hr",
            vram: "24GBGDDR6X",
            region: "US-West",
            status: "Online",
          },
          {
            model: "NVIDIA H100",
            price: "$2.10/hr",
            vram: "80GBHBM3",
            region: "EU-Central",
            status: "Online",
          },
          {
            model: "A100 (80GB)",
            price: "$1.85/hr",
            vram: "80GBHBM2",
            region: "Asia-SE",
            status: "Online",
          },
          {
            model: "RTX 3080 Ti",
            price: "$0.25/hr",
            vram: "12GBGDDR6",
            region: "US-East",
            status: "Busy",
          },
          {
            model: "NVIDIA A40",
            price: "$0.95/hr",
            vram: "48GBGDDR6",
            region: "EU-West",
            status: "Online",
          },
          {
            model: "RTX 3090",
            price: "$0.31/hr",
            vram: "24GBGDDR6X",
            region: "US-Central",
            status: "Busy",
          },
        ].map((gpu, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group flex flex-col"
          >
            <div className="flex justify-between items-center mb-5">
              <div
                className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                  gpu.status === "Online"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-slate-800 text-slate-500"
                }`}
              >
                ● {gpu.status}
              </div>
              <div className="font-mono text-lg font-bold text-cyan-400">
                {gpu.price}
              </div>
            </div>

            <div className="flex-grow">
              <h4 className="text-2xl font-black text-white mb-2">
                {gpu.model}
              </h4>
              <p className="text-slate-400 text-sm mb-6 font-mono">
                {gpu.vram} / {gpu.region}
              </p>
            </div>

            <button
              className={`w-full py-4 rounded-xl font-bold transition-all ${
                gpu.status === "Online"
                  ? "bg-cyan-600 group-hover:bg-cyan-500 text-white active:scale-95"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
              disabled={gpu.status !== "Online"}
            >
              {gpu.status === "Online"
                ? "Deploy Docker Image"
                : "Node Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // --- MAIN RENDER ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />

      <main className="pb-20">
        {page === "home" && <HomePage />}
        {page === "marketplace" && <MarketplacePage />}
        {page === "dashboard" && (
          <div className="p-20 text-center text-slate-600 uppercase tracking-widest font-mono text-sm animate-in fade-in">
            Host Dashboard Coming Soon...
          </div>
        )}
      </main>

      <footer className="border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-700 text-sm">
          &copy; 2026 Benzene Compute Network. All decentralized.
        </div>
      </footer>
    </div>
  );
}
