import React from 'react'

export default function Card (props) {
    const data = props.data
    const toggleFollowers = props.toggleFollowers
    return(
        <div className='MCard'>
            <div className='Card'>
                <h1>{data.userName}</h1>
                <img src={data.avatar_url} alt='profile photo'/>
                <h2>Name: {data.name}</h2>
                <h2>Bio: {data.bio}</h2>
                <h2>URL: <a target='_blank' href={data.html_url}>{data.userName}</a> </h2>
                <h2>Followers: <span className='followersNum' onClick={toggleFollowers}>{data.followers.length}</span></h2>
                <div className={`followers${data.followersOn ? 'On' : 'Off'}`}>
                    {data.followers.map(item=>(<ul key={item.id}>{item.login}</ul>))}
                </div>
            </div>
       </div>
    )
}