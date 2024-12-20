import { ReactNode } from 'react';

export default function Blog({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>MY BLOG</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
