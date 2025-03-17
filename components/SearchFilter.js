"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";

export default function () {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get('state') || '';
  const currentTitle = searchParams.get('title') || '';

  const [faveProject , setFaveProject] = useState(searchParams.get('favorite') || '');

  const handlerChange = (type, value) => {



    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(type, value)
    } else {
      params.delete(type)
    }

    router.replace(`?${params.toString()}`)
  }

  useEffect(() => {
    handlerChange("favorite" , faveProject)
  } , [faveProject])

  return (
    <>
      <div className="mb-4 relative flex">
        <input
          type="text"
          value={currentTitle}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="جست و جو"
          onChange={(e) => handlerChange("title", e.target.value)}
        />
        <span onClick={() => {setFaveProject((prev) => !prev)}} style={{ cursor: 'pointer', position: 'absolute' , left: '6px' , fontSize: '27px' , top: '-4px' , zIndex: '2' }} className={ faveProject ? 'text-yellow-500 ' : 'text-gray-500 '}>★</span>
      </div>
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        value={currentStatus}
        onChange={(e) => handlerChange("state", e.target.value)}
      >
        <option value="">بدون فیلتر</option>
        <option value="notStarted">شروع نشده</option>
        <option value="InProgress">درحال انجام</option>
        <option value="deliverd">تحویل شده</option>
        <option value="confirmed">تایید شده</option>
      </select>
    </>
  )
}