
import Project from "@/components/Project";
import SearchFilter from "@/components/SearchFilter";
import { Rating } from "@smastrom/react-rating";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import Image from "next/image";


const getPosts = async (status , title) => {

  const data = (await fetch(`http://localhost:3001/projects?status=${status}&price_like=${title}`, { cache: 'no-store' })).json();
  return await data;
}

export default async function Home({ searchParams , data }) {
  
  const status = await searchParams?.state || '';
  const title = await searchParams?.title || '';
  

  let faveFilter = await searchParams?.favorite || false;
  

  let projects = await getPosts(status , title);

  if(faveFilter){
    let getFavorite = (await cookies()).get('favorites')?.value || [];
    projects = projects.filter((item) => {
        return getFavorite.includes(item.id)
    })
    
  }

  return (

    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">لیست پروژه ها</h1>

      <div className="mb-4">
        <SearchFilter />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
