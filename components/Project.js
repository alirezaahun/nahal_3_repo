
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react"


export default function Project({ project, isFavorite = false }) {
    console.log(JSON.parse(localStorage.getItem('favorites')));

    const [fave, setFave] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

    const changeValue = (id) => {
        if (fave.includes(id)) {
            console.log(fave);

            setFave(preValue => preValue.filter(item => item !== id));
            return;
        }
        setFave(fave => [...fave, id]);
    }


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(fave));
    }, [fave])

    return (
        <Link href={`/Project/${project.id}`}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.name}</h2>
                <p className="mb-4 font-normal text-gray-700">{project.description}</p>
                <div className="text-xl mb-2">
                    <span style={{ cursor: 'pointer' }} onClick={() => changeValue(project.id)} className={fave.includes(project.id) ? 'text-yellow-500' : 'text-gray-500 '}>★</span>
                </div>
                <p className="text-sm text-gray-500">تاریخ تحویل: {project.delivery_date}</p>

            </div>
        </Link>

    )
}