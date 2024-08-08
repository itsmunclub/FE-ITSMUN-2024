import React from 'react'
import Sidebar from '../components/Sidebar';

const EventPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 }}
    );
    const users = await res.json();
    return (
        <>
            <Sidebar/>
            <div className='layout'>
                <h1>This is Event Page</h1> 
                <p>{new Date().toLocaleTimeString()}</p>
                <ul>
                    {users.map(user => 
                        <li key={user.id} className=' font-light text-xl'>{user.name}</li>
                    )}
                </ul>    
            </div>
        </>
    )
}

export default EventPage