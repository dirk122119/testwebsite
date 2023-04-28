import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project';
import Image from 'next/image';


export const metadata = {
  title: '首頁',
  description: '熊熊舉起',
}

export default async function Home() {
  const projects: Project[] = await getProjects();
  return (
    <div>
      {
        projects.map((project: Project) => (
          <div>
            {project.image && (<Image src={project.image} alt={project.name} width={250} height={300} />)}

            <div key={project._id}>{project.name}</div>
          </div>
        ))
      }
    </div>
  )
}

