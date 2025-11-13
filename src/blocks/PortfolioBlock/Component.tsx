import { Media as MediaComponent } from '@/components/Media'
import { Media } from '@/payload-types'

type Props = {
  sectionTitle: string
  projects: Array<{
    projectName: string
    shortDescription: string
    fullDescription: string
    technologiesUsed: Array<{ technology: string }>
    projectImage: Media
    liveUrl?: string
    codeUrl?: string
    id: string
  }>
}

export const PortfolioBlock: React.FC<Props> = (props) => {
  console.log(props.projects[0].projectImage)

  return (
    <div className="max-w-5xl mx-auto py-12">
      <MediaComponent resource={props.projects[0].projectImage} />
    </div>
  )
}
