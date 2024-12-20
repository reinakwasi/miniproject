export const metadata = {
    title: 'Projects List',
  };
  
  export default function ProjectsPage() {
    const projects = [
      { id: '1', name: 'Project One' },
      { id: '2', name: 'Project Two' },
      { id: '3', name: 'Project Three' },
      {id:'100', name:'Project Hundred'},
    ];
  
    return (
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={`/projects/${project.id}`}>{project.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  