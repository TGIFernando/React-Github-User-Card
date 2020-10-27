import React from 'react'

export default function Card (props) {
    const data = props.data

    return(
       <div className='Card'>
           <h1>{data.userName}</h1>
           <img src={data.avatar_url} alt='profile photo'/>
            <h2>Name: {data.name}</h2>
            <h2>Bio: {data.bio}</h2>
            <h2>URL: <a target='_blank' href={data.html_url}>{data.userName}</a> </h2>
       </div>
    )
}