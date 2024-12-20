import { ReactNode } from 'react';

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>Projects Page</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
