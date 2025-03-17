
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {setCookie} from "cookies-next";


export default function Project({ project }) {

    const [fave, setFave] = useState(localStorage.getItem('favorites') || []);

    const changeValue = (id) => {   
        let getStorage = JSON.parse(localStorage.getItem('favorites') || []);
        
        if (getStorage.includes(id)) {
            getStorage = getStorage.filter((item) => item !== id);
        }else{
            getStorage.push(id);
        }

        localStorage.setItem('favorites', JSON.stringify(getStorage));
        setCookie('favorites' , JSON.stringify(getStorage))
        setFave(getStorage)
    }


    return (
        
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.name}</h2>
            <p className="mb-4 font-normal text-gray-700">{project.description}</p>
            <div className="text-xl mb-2">
                <span style={{ cursor: 'pointer' }} onClick={() => changeValue(project.id)} className={fave.includes(project.id) ? 'text-yellow-500' : 'text-gray-500 '}>★</span>
            </div>
            <p className="text-sm text-gray-500">تاریخ تحویل: {project.delivery_date}</p>
            <p className="text-sm text-gray-500">قیمت: {project.price}</p>
            <div className="mt-4">
                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href={`/Project/${project.id}`}>
                    جزئیات پروژه
                </Link>
            </div>
        </div>


    )
}