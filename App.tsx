
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-3xl w-full bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-8 space-y-6">
        <div className="border-b border-gray-700 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-emerald-400">Phase 1: Domain Layer Complete</h1>
            <p className="text-gray-400 mt-1">Core Contracts, Utilities, and Dual-Write Storage Implemented</p>
          </div>
          <div className="bg-gray-900 px-3 py-1 rounded border border-gray-600 font-mono text-xs text-blue-400">
            TS-Node Environment
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-indigo-400 font-semibold border-b border-gray-700 pb-2">Development Progress</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex items-center text-green-400">
                <span className="w-4 h-4 mr-2 text-green-500">✓</span> Project Skeleton
              </li>
              <li className="flex items-center text-green-400">
                <span className="w-4 h-4 mr-2 text-green-500">✓</span> src/core/models/types.ts
              </li>
              <li className="flex items-center text-green-400">
                <span className="w-4 h-4 mr-2 text-green-500">✓</span> src/core/repositories/IMemoryRepository.ts
              </li>
              <li className="flex items-center text-green-400">
                <span className="w-4 h-4 mr-2 text-green-500">✓</span> src/utils/MarkdownGenerator.ts
              </li>
              <li className="flex items-center text-green-400">
                <span className="w-4 h-4 mr-2 text-green-500">✓</span> src/data/local/FileAdapter.ts
              </li>
               <li className="flex items-center text-green-400">
                <span className="w-4 h-4 mr-2 text-green-500">✓</span> LocalFileManager (Reads)
              </li>
              <li className="flex items-center text-green-400">
                <span className="w-4 h-4 mr-2 text-green-500">✓</span> LocalFileManager (Writes + Dual Mode)
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-indigo-400 font-semibold border-b border-gray-700 pb-2">System Architecture</h3>
            <div className="space-y-3 text-sm">
               <div className="bg-gray-900 p-4 rounded border border-purple-900/50 relative overflow-hidden opacity-75">
                <div className="absolute top-0 right-0 bg-purple-900/20 px-2 py-1 text-[10px] text-purple-400 font-mono">
                  TRANSFORMER
                </div>
                 <h4 className="font-bold text-purple-500 mb-2">MarkdownGenerator</h4>
                 <div className="text-xs font-mono text-gray-400">
                   JSON <span className="text-gray-600">→</span> Markdown
                 </div>
               </div>
               
              <div className="bg-gray-900 p-3 rounded border border-blue-900/50 relative">
                <div className="absolute top-0 right-0 bg-blue-900/20 px-2 py-1 text-[10px] text-blue-400 font-mono">
                  ADAPTER
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-blue-400">FileAdapter</span>
                  <span className="text-xs text-green-400">Active</span>
                </div>
                <div className="font-mono text-xs space-y-1 text-gray-400">
                   <p>ROOT: <span className="text-yellow-600">./mock_db/</span></p>
                   <p>fn: readTextFile()</p>
                   <p>fn: writeTextFile()</p>
                </div>
              </div>

              <div className="bg-gray-900 p-3 rounded border border-emerald-900/50 relative">
                <div className="absolute top-0 right-0 bg-emerald-900/20 px-2 py-1 text-[10px] text-emerald-400 font-mono">
                  REPOSITORY
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-emerald-400">LocalFileManager</span>
                  <span className="text-xs text-green-400">Fully Implemented</span>
                </div>
                 <div className="font-mono text-xs space-y-1 text-gray-400">
                   <p>Reads: <span className="text-green-400">OK</span></p>
                   <p>Writes: <span className="text-green-400">OK (JSON + MD)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-900/20 border border-green-600/50 rounded mt-4 font-mono text-xs text-green-400">
          <p>// Phase 1 Complete. Ready for Phase 2: The Classifier (Gemini).</p>
        </div>
      </div>
    </div>
  );
}
