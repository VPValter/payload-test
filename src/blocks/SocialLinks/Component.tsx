import React from 'react'
import { Github, Linkedin, FileText, Code, Mail } from 'lucide-react'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  github: Github,
  linkedin: Linkedin,
  filetext: FileText,
  code: Code,
  mail: Mail,
}

type Props = {
  links?: Array<{
    link: string
    name: string
    icon: string
    cssClasses?: string
    id: string
  }>
}

export const SocialLinksBlock: React.FC<Props> = ({ links }) => {
  const items = links ?? []

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-4 flex-wrap">
        {items.length === 0 ? (
          <p>No social links configured</p>
        ) : (
          <>
            {items.map((item) => {
              const Icon = ICON_MAP[item.icon.toLowerCase()]

              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${item.cssClasses}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </a>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}
