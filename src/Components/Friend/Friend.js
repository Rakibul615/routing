import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';
const Friend = (props) => {
    const {name,email,id}=props.friend;
    const history=useHistory();
    const handleClick=()=>{
        const url=`/friend/${id}`;
        history.push(url);

    }
    return (
        <div className="friend-list">
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <p>Id: <Link to={`/friend/${id}`}>Show Details {id} </Link></p>//op
            <button onClick={()=>handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;