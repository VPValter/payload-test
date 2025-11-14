'use client'

import { Media as MediaComponent } from '@/components/Media'
import { ProjectModal } from '@/components/ProjectModal'
import { Media } from '@/payload-types'
import { useState } from 'react'

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

// Maybe TODO: Refactor the Project type so it's not repeated twice?

type Props = {
  sectionTitle: string
  projects: Project[]
}

export const PortfolioBlock: React.FC<Props> = (props) => {
  const { sectionTitle, projects } = props

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <div className="max-w-5xl mx-auto py-6">
        <h2 className="text-2xl font-bold text-white mb-8">{sectionTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              className="group cursor-pointer bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]"
              key={project.id}
              onClick={() => handleProjectClick(project)}
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <MediaComponent
                  resource={project.projectImage}
                  alt={project.projectImage.alt || ''}
                  fill={true}
                  imgClassName="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-blue-primary transition-colors">
                  {project.projectName}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologiesUsed.slice(0, 3).map((tech) => (
                    <span
                      key={tech.id}
                      className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                    >
                      {tech.technology}
                    </span>
                  ))}
                  {project.technologiesUsed.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      +{project.technologiesUsed.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          sectionTitle={sectionTitle}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}
