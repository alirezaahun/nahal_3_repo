import Progress from "@/components/Progress";



const getProject = async (id) => {
    const data = await fetch(`http://localhost:3001/projects/${id}`);
    return data.json();
}

export default async function GetProject({ params }) {
    const project = await getProject(params.id);
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-semibold text-center mb-6">{project.name}</h1>
            <div className="bg-white p-6 shadow-md rounded-lg">
                <div>
                    <p className="text-gray-500">وضعیت:</p>
                    <div className="mt-3">
                           <Progress status={project.status} />
                           <label htmlFor=""></label>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="font-medium text-gray-700">تاریخ تحویل:</p>
                    <p className="text-gray-600">{project.delivery_date}</p>
                </div>

                <div className="mt-4">
                    <p className="font-medium text-gray-700">قیمت:</p>
                    <p className="text-gray-600">{project.price}</p>
                </div>

                <div className="mt-4">
                    <p className="font-medium text-gray-700">توضیحات:</p>
                    <p className="text-gray-600">{project.description}</p>
                </div>
            </div>
        </div>
    );
};