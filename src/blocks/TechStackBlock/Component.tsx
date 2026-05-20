import {
  SiJavascript,
  SiJquery,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTanstack,
  SiTailwindcss,
  SiShadcnui,
  SiHtml5,
  SiCss,
  SiGit,
  SiBootstrap,
  SiClaude,
  SiCursor,
} from '@icons-pack/react-simple-icons'
import Image from 'next/image'

import telerikIcon from './telerik.svg'

export const TechStackBlock = () => {
  return (
    <div className="max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-16">My tech stack includes</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
        {/* JavaScript */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiJavascript />
          </div>
          <span className="text-sm text-gray-400">JavaScript</span>
        </div>

        {/* jQuery */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiJquery />
          </div>
          <span className="text-sm text-gray-400">jQuery</span>
        </div>

        {/* KendoJS */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <Image src={telerikIcon} alt="Telerik logo icon" width={24} height={22} className="top-[2px] relative" aria-hidden />
          </div>
          <span className="text-sm text-gray-400">KendoJS</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiTypescript />
          </div>
          <span className="text-sm text-gray-400">TypeScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiReact />
          </div>
          <span className="text-sm text-gray-400">React</span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiNextdotjs />
          </div>
          <span className="text-sm text-gray-400">Next.js</span>
        </div>

        {/* Tanstack Query */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiTanstack />
          </div>
          <span className="text-sm text-gray-400">Tanstack Query</span>
        </div>

        {/* Tanstack Router */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiTanstack />
          </div>
          <span className="text-sm text-gray-400">Tanstack Router</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiTailwindcss />
          </div>
          <span className="text-sm text-gray-400">TailwindCSS</span>
        </div>

        {/* ShadCN */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiShadcnui />
          </div>
          <span className="text-sm text-gray-400">ShadCN</span>
        </div>

        {/* HTML */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiHtml5 />
          </div>
          <span className="text-sm text-gray-400">HTML</span>
        </div>

        {/* CSS3 */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiCss />
          </div>
          <span className="text-sm text-gray-400">CSS3</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiGit />
          </div>
          <span className="text-sm text-gray-400">Git</span>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiBootstrap />
          </div>
          <span className="text-sm text-gray-400">Bootstrap</span>
        </div>

        {/* Claude */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiClaude />
          </div>
          <span className="text-sm text-gray-400">Claude</span>
        </div>

        {/* Cursor */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
            <SiCursor />
          </div>
          <span className="text-sm text-gray-400">Cursor</span>
        </div>
      </div>
    </div>
  )
}
