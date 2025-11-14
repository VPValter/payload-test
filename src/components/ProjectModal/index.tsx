'use client'

import { X } from 'lucide-react'
import { Media } from '@/payload-types'
import { Media as MediaComponent } from '@/components/Media'

type Project = {
  projectName: string
  shortDescription: string
  fullDescription: string
  technologiesUsed: Array<{ technology: string; id: string }>
  projectImage: Media
  liveUrl?: string
  codeUrl?: string
  id: string
}

type ProjectModalProps = {
  project: Project
  sectionTitle: string
  isOpen: boolean
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  sectionTitle,
  isOpen,
  onClose,
}) => {
  // maybe TODO:
  // body scroll overflow disable when modal is open?
  // close on escape key ?

  // DEFINITELY TODO: RESPONSIVE FOR THE MODAL CONTENT!***

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-xl border border-gray-800 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Left side - Image */}
          <div className="relative bg-gray-800 min-h-[300px] md:min-h-[500px]">
            <MediaComponent
              resource={project.projectImage}
              alt={project.projectImage.alt || ''}
              fill={true}
              imgClassName="object-cover w-full h-full"
            />
          </div>

          {/* Right side - Content */}
          <div className="p-8 overflow-y-auto ">
            <div className="mb-4">
              <span className="text-sm text-brand-primary font-medium uppercase tracking-wider">
                {sectionTitle}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">{project.projectName}</h2>

            <p className="text-gray-300 leading-relaxed mb-6">{project.fullDescription}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologiesUsed.map((tech) => (
                  <span
                    key={tech.id}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech.technology}
                  </span>
                ))}
              </div>
            </div>

            {(project.liveUrl || project.codeUrl) && (
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-medium rounded-lg transition-colors"
                  >
                    View Live
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
