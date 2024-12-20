import Link from "next/link";
import '../../styles/globals.css'
export default function Home() {
    return( 
    <>
    <header>
    <h1>MINI PROJECT</h1>
    </header>
    <h2 style={{
      textAlign:'center'
    }}>Welcome to My Page</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis sed totam minima magni error vitae, laudantium culpa reprehenderit debitis animi similique deleniti quisquam, blanditiis sunt quod nemo eos quas?</p>
        <Link href="/blog">Blog</Link>
    <Link href="/projects">Project</Link>
    </>

    )
  }
  