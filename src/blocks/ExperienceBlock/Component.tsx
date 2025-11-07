interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string
  current?: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Frontend Developer',
    period: 'Jan 2023 - Present',
    description:
      'Leading frontend development for enterprise web applications. Architecting scalable React solutions, mentoring junior developers, and implementing modern development practices across multiple product teams.',
    current: true,
  },
  {
    company: 'Digital Innovations Ltd',
    position: 'Frontend Developer',
    period: 'Mar 2021 - Dec 2022',
    description:
      'Developed responsive web applications using React and TypeScript. Collaborated with UX/UI designers to implement pixel-perfect interfaces and improved application performance by 40% through code optimization.',
  },
  {
    company: 'StartupXYZ',
    position: 'Junior Web Developer',
    period: 'Jun 2020 - Feb 2021',
    description:
      'Built and maintained company website and internal tools. Gained experience with modern web technologies and agile development methodologies while contributing to a fast-paced startup environment.',
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: '2019 - 2020',
    description:
      'Provided web development services to small businesses and startups. Created custom websites, e-commerce solutions, and helped clients establish their online presence using various technologies.',
  },
]

export const ExperienceBlock = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-white mb-16">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gray-700"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start gap-8">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
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
                <div className="mb-2">
                  <h3 className="text-brand-primary font-medium text-lg">{experience.company}</h3>
                  <h4 className="text-white font-semibold text-xl">{experience.position}</h4>
                  <p className="text-gray-400 text-sm mt-1">{experience.period}</p>
                </div>
                <p className="text-gray-300 leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
