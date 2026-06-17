export default function Footer() {
  return (
    <footer className="bg-[#0e1416] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-[0.02]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono font-black tracking-tighter text-xl text-white">
              C2C<span className="text-cyan-400">.SYST</span>
            </span>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
              Neural_Recruitment_Infrastructure
            </p>
          </div>
          
          <div className="flex gap-8 font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy_Protocol</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Security_Audit</a>
          </div>

          <p className="text-center text-[10px] font-mono text-white/20 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} C2C.OS_BUILD_v2.0.4. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
