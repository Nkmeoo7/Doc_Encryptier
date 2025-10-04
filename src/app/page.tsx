
export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.15),transparent_50%)]"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                doc_encryptier
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              Unified document intelligence platform
            </p>
          </div>

          <div className="space-y-6 pt-8">
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Collect documents from multiple sources, extract key information with advanced OCR,
              and centralize everything in one intelligent workspace.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                <span className="text-blue-300 text-sm font-medium">Multi-Source Collection</span>
              </div>
              <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm">
                <span className="text-cyan-300 text-sm font-medium">Smart OCR</span>
              </div>
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                <span className="text-blue-300 text-sm font-medium">Key Data Extraction</span>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </div>
  );
}
