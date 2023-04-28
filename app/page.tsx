import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project';
import Image from 'next/image';
import banner from "../public/banner.jpg";
export const metadata = {
  title: '熊熊舉起',
  description: '熊熊舉起',
}

export default async function Home() {
  const projects: Project[] = await getProjects();
  return (
    <div>
      <div style={{display:"flex",justifyContent: "center"}}>
      <div style={{ position: 'relative', width: '1200px', height: '600px' }}>
        <Image
          src={banner}
          alt="Picture of the banner"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        </div>
      </div>
      

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

