
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react"


export default function Project() {

    const projects = [
        {
            "id": "1",
            "name": "هوش مصنوعی",
            "time": "john@example.com",
            "delivery_date": "1403/02/01",
            "price": "20000",
            "status": "InProgress",
            "rate": "5",
            "description": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        }, {
            "id": "2",
            "name": "هوش مصنوعی",
            "time": "john@example.com",
            "delivery_date": "1403/02/01",
            "price": "20000",
            "status": "InProgress",
            "rate": "5",
            "description": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        },
        {
            "id": "3",
            "name": "هوش مصنوعی",
            "time": "john@example.com",
            "delivery_date": "1403/02/01",
            "price": "20000",
            "status": "InProgress",
            "rate": "5",
            "description": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        },
        {
            "id": "4",
            "name": "هوش مصنوعی",
            "time": "john@example.com",
            "delivery_date": "1403/02/01",
            "price": "20000",
            "status": "InProgress",
            "rate": "5",
            "description": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        }
    ]

    const [fave, setFave] = useState([])
    console.log(fave);

    const changeValue = (id) => {
        console.log(id);
        setFave(items => items.includes(id) ? items.filter(item => item !== id) : [...items, id] )
        console.log(fave);

        // setFave((items) => {
        //     if (items.includes(id)) {
        //         return items.filter(item => item !== id)
        //     }else{
        //         return [...items , id]
        //     }
        // })

        // console.log(fave);

        // setFave(array => array.includes(setFave))
    }


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(fave));
    }, [fave])

    return (

        <>
            {
                projects.map(project => (
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">s
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
                ))
            }
        </>

    )
}