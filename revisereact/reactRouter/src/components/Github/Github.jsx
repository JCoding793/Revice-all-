import React, { useEffect, useState } from "react";
import {useLoaderData} from "react-router-dom"
export default function Github(){
    // const [data , setData]  = useState([]);
const data = useLoaderData();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return  (
        <div className="text-center m -4 bg-gray-300 text-black text-6xl">
            Git hub Follows :  {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}

export const githubLoader = async()=>{
 const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}