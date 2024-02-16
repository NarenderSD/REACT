import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/narendersd')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Name: {data.name},
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <div className='text-left m-4 bg-gray-600 text-white p-4 text-3xl'>Public Repos: {data.public_repos}, <br />Github Username: {data.login}
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/narendersd')
    return response.json()
}