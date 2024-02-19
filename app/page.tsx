
import SectionBible from "./section"
import {promises as fs} from 'fs'

export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/app/kjv.json', 'utf8');
  const data = JSON.parse(file);

   return (
    <main className="flex min-h-screen flex-col place-items-center content-center">
      <SectionBible verses ={data.verses}></SectionBible>  
    </main>
   )
}
