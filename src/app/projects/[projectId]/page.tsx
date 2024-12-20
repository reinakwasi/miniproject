import Link from "next/link";

export async function generateStaticParams() {
  return [
    { projectId: '1' },
    { projectId: '2' },
    { projectId: '3' },
    { projectId: '100' }, 
  ];
}

export default function ProjectDetails({ params }: { params: { projectId: string } }) {
  const { projectId } = params;

  
  const projectData: Record<string, { name: string; description: string }> = {
    1: { name: 'Project One', description: 'This is project one.' },
    2: { name: 'Project Two', description: 'This is project two.' },
    3: { name: 'Project Three', description: 'This is project three.' },
    100: { name: 'Project 100', description: 'This is project 100.' }, 
  };

  const project = projectData[projectId];

  if (!project) {
    throw new Error('Error');
  }

  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <h1>{project.name}</h1>
        <p>{project.description}</p>

        
        {Object.keys(projectData).map((id) => (
          <h2 key={id}>
            <Link href={`/projects/${id}`}>Projects  {id}</Link>
          </h2>
        ))}
      </div>
    </>
  );
}
