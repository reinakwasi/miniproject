import { Metadata } from "next"
import { title } from "process"
export const metadata:Metadata={
    title:"Blog"
}



export default function Blog(){
    return (
        <>
        <h1>My blog</h1>
        <p>This is my first blog</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas nam eveniet repellat accusantium inventore sequi doloremque, quisquam hic modi illum nisi expedita fugiat ratione molestiae molestias sint? Numquam, reiciendis.</p>
        </>
    )
    
}


