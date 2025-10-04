
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            doc_encryptier
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#overview" className="text-slate-300 hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#workflow" className="text-slate-300 hover:text-cyan-400 transition-colors">Workflow</a>
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors">Features</a>
            <a href="#technology" className="text-slate-300 hover:text-cyan-400 transition-colors">Technology</a>
            <a href="#team" className="text-slate-300 hover:text-cyan-400 transition-colors">Team</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.15),transparent_50%)]"></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
              <span className="text-cyan-300 text-sm font-medium">Smart India Hackathon 2025</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  doc_encryptier
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                Unified Document Intelligence Platform
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Revolutionizing document management with AI-powered automation.
                Collect, process, and extract intelligence from documents across multiple sources.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                  <span className="text-blue-300 text-sm font-medium">Multi-Source Collection</span>
                </div>
                <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm">
                  <span className="text-cyan-300 text-sm font-medium">OCR Extraction</span>
                </div>
                <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                  <span className="text-blue-300 text-sm font-medium">n8n Automation</span>
                </div>
              </div>
            </div>

            <div className="pt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#workflow" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">View Workflow</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#features" className="px-8 py-4 border-2 border-cyan-500/30 rounded-lg font-semibold text-lg text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300">
                Explore Features
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </section>

      <section id="overview" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Problem Statement</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Organizations struggle with document management across multiple platforms, leading to inefficiency and data loss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">The Challenge</h3>
              <ul className="space-y-2 text-slate-400">
                <li>• Documents scattered across multiple sources</li>
                <li>• Manual data extraction is time-consuming</li>
                <li>• No centralized intelligence system</li>
                <li>• Lack of automation in workflows</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/70 transition-all">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Solution</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Unified document collection platform</li>
                <li>• AI-powered OCR and data extraction</li>
                <li>• Centralized intelligent workspace</li>
                <li>• Full n8n automation workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Automation Workflow</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Powered by n8n, our fully automated workflow seamlessly processes documents from collection to insight extraction.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 md:text-right">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-blue-500/30 inline-block">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">1. Document Collection</h3>
                    <p className="text-slate-400">Automated ingestion from email, cloud storage, APIs, and file uploads</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-blue-500/50">
                  📥
                </div>
                <div className="flex-1"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-cyan-500/50">
                  🔄
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30 inline-block">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">2. Document Processing</h3>
                    <p className="text-slate-400">Classification, format conversion, and validation through n8n workflows</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 md:text-right">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-blue-500/30 inline-block">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">3. OCR & Extraction</h3>
                    <p className="text-slate-400">Advanced OCR technology extracts text and key information from documents</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-blue-500/50">
                  🔍
                </div>
                <div className="flex-1"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-cyan-500/50">
                  🧠
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30 inline-block">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">4. Data Intelligence</h3>
                    <p className="text-slate-400">AI-powered analysis and categorization of extracted information</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 md:text-right">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-blue-500/30 inline-block">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">5. Centralized Storage</h3>
                    <p className="text-slate-400">Secure storage in unified database with intelligent indexing</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-blue-500/50">
                  💾
                </div>
                <div className="flex-1"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-cyan-500/50">
                  📊
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30 inline-block">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">6. Insights & Access</h3>
                    <p className="text-slate-400">Dashboard access with search, analytics, and export capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Powered by n8n Automation</h3>
              <p className="text-slate-400 mb-4">Complete workflow orchestration with 100% automation</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-cyan-300 text-sm">Trigger-based Actions</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-cyan-300 text-sm">Error Handling</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-cyan-300 text-sm">Scalable Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <span className="text-3xl">📂</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Source Integration</h3>
              <p className="text-slate-400 leading-relaxed">Connect and collect documents from emails, cloud storage, APIs, and manual uploads seamlessly.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced OCR</h3>
              <p className="text-slate-400 leading-relaxed">State-of-the-art optical character recognition extracts text from any document format with high accuracy.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full Automation</h3>
              <p className="text-slate-400 leading-relaxed">n8n-powered workflows automate the entire process from document collection to data extraction.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Extraction</h3>
              <p className="text-slate-400 leading-relaxed">AI identifies and extracts key information like dates, amounts, names, and custom fields automatically.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Storage</h3>
              <p className="text-slate-400 leading-relaxed">Enterprise-grade security with encryption ensures your sensitive documents are always protected.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h3>
              <p className="text-slate-400 leading-relaxed">Powerful search, filtering, and analytics to gain insights from your document intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technology Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400">Built with cutting-edge technologies for maximum performance and scalability</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Next.js</h3>
              <p className="text-slate-400 text-sm">Frontend Framework</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-white mb-2">n8n</h3>
              <p className="text-slate-400 text-sm">Workflow Automation</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">🗄️</div>
              <h3 className="text-lg font-bold text-white mb-2">Supabase</h3>
              <p className="text-slate-400 text-sm">Database & Auth</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-white mb-2">OCR API</h3>
              <p className="text-slate-400 text-sm">Text Extraction</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-white mb-2">Tailwind CSS</h3>
              <p className="text-slate-400 text-sm">Styling</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">📘</div>
              <h3 className="text-lg font-bold text-white mb-2">TypeScript</h3>
              <p className="text-slate-400 text-sm">Type Safety</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="text-lg font-bold text-white mb-2">Cloud Storage</h3>
              <p className="text-slate-400 text-sm">File Management</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">AI/ML</h3>
              <p className="text-slate-400 text-sm">Data Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400">Smart India Hackathon 2025 Participants</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-2xl border border-slate-700 text-center">
            <p className="text-slate-300 text-lg mb-8">
              Our dedicated team is working to revolutionize document management through AI and automation.
            </p>
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-xl px-8 py-4">
              <p className="text-cyan-300 font-medium">Team details and member information will be added here</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            doc_encryptier
          </div>
          <p className="text-slate-400 mb-6">
            Transforming document management with AI-powered automation
          </p>
          <div className="text-slate-500 text-sm">
            Smart India Hackathon 2025 © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
