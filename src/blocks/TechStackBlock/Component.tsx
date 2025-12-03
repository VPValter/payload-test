export const TechStackBlock = () => {
  return (
    <div className="max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-16">My tech stack includes</h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {/* JavaScript */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-yellow-400 font-bold text-xs">JS</span>
          </div>
          <span className="text-sm text-gray-400">JavaScript</span>
        </div>

        {/* jQuery */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-blue-400 font-bold text-xs">jQ</span>
          </div>
          <span className="text-sm text-gray-400">jQuery</span>
        </div>

        {/* KendoJS */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-green-400 font-bold text-xs">K</span>
          </div>
          <span className="text-sm text-gray-400">KendoJS</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-blue-500 font-bold text-xs">TS</span>
          </div>
          <span className="text-sm text-gray-400">TypeScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-cyan-400 font-bold text-xs">⚛</span>
          </div>
          <span className="text-sm text-gray-400">React</span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-white font-bold text-xs">N</span>
          </div>
          <span className="text-sm text-gray-400">Next.js</span>
        </div>

        {/* Tanstack Query */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-red-400 font-bold text-xs">TQ</span>
          </div>
          <span className="text-sm text-gray-400">Tanstack Query</span>
        </div>

        {/* Tanstack Router */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-red-400 font-bold text-xs">TR</span>
          </div>
          <span className="text-sm text-gray-400">Tanstack Router</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-teal-400 font-bold text-xs">TW</span>
          </div>
          <span className="text-sm text-gray-400">TailwindCSS</span>
        </div>

        {/* ShadCN */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-gray-300 font-bold text-xs">SH</span>
          </div>
          <span className="text-sm text-gray-400">ShadCN</span>
        </div>

        {/* HTML */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-orange-500 font-bold text-xs">HTML</span>
          </div>
          <span className="text-sm text-gray-400">HTML</span>
        </div>

        {/* CSS3 */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-blue-400 font-bold text-xs">CSS3</span>
          </div>
          <span className="text-sm text-gray-400">CSS3</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-orange-600 font-bold text-xs">Git</span>
          </div>
          <span className="text-sm text-gray-400">Git</span>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <span className="text-purple-500 font-bold text-xs">BS</span>
          </div>
          <span className="text-sm text-gray-400">Bootstrap</span>
        </div>
      </div>
    </div>
  )
}
