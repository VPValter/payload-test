import RichText from '@/components/RichText'
import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  experience?: Array<{
    company: string
    position: string
    period: string
    current?: boolean
    description: SerializedEditorState<SerializedLexicalNode>
    techStack?: string
    id: string
  }>
}

export const ExperienceBlock: React.FC<Props> = ({ experience }) => {
  const items = experience ?? []

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-16">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gray-700"></div>

        <div className="space-y-12">
          {items.map((experience) => (
            <div key={experience.id} className="relative flex items-start gap-8">
              {/* Timeline dot */}
              <div className="relative z-10 shrink-0">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    experience.current
                      ? 'bg-brand-primary border-brand-primary'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="mb-3">
                  <h3 className="text-brand-primary font-medium text-lg">{experience.company}</h3>
                  <h4 className="text-white font-semibold text-xl">{experience.position}</h4>
                  <p className="text-gray-400 text-md mt-1">{experience.period}</p>
                </div>
                <RichText
                  data={experience.description}
                  enableGutter={false}
                  className="text-gray-300 leading-relaxed"
                />
                {experience.techStack ? (
                  <p className="text-gray-400 text-sm mt-5">Tech stack: {experience.techStack}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
