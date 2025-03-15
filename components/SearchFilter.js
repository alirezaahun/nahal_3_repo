"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function () {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get('state') || '';
  const currentTitle = searchParams.get('title') || '';

  const handlerChange = (type , value) => {
    
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(type , value)
    }else{
      params.delete(type)
    }

    router.replace(`?${params.toString()}`)
  }

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          value={currentTitle}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="جست و جو"
          onChange = {(e) => handlerChange("title" , e.target.value)}
        />
      </div>
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        value={currentStatus}
        onChange={(e) => handlerChange("state" , e.target.value)}
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