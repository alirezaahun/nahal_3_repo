
import Project from "@/components/Project";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";


const getPosts = async () => {
  const data = await fetch('http://localhost:3001/projects');
  return data.json();
}


export default async function Home() {

  const projects = await getPosts();

  return (

    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">لیست پروژه ها</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="جست و جو"
        />
      </div>

      <div className="mb-4">
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="All">بدون فیلتر</option>
          <option value="notStarted">شروع نشده</option>
          <option value="InProgress">درحال انجام</option>
          <option value="deliverd">تحویل شده</option>
          <option value="confirmed">تایید شده</option>
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
    // <>
    //   {
    //     posts.map(item => (
    //       <div>
    //         <h1>{item.name}</h1>
    //         {/* <Rating style={{maxWidth: '180px'}} value={3.5} /> */}
    //       </div>
    //     ))
    //   }
    // </>
  );
}
