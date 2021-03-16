import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {id}=useParams();
    const [friend,setFriend]=useState({});
    const {name,email,phone}=friend;
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))

    },[])
    return (
        <div>
            <h3>this is friend id: {id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>

        </div>
    );
};

export default FriendDetails;