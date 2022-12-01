import React, {useEffect, useState} from "react";
// 'https://dummyjson.com/users'

const User = () => { 
    const [user,setUser]= useState();
    const [loading,setLoading]= useState(false);

useEffect(()=>{
    userData()
},[])


const userData =()=>{ 
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
        setUser(data.users)
        setLoading(true)
        console.log("fetched data---->",user)})
    .catch(e =>console.log(e))
}
if (!loading){
    return <div>loading ...</div>
}
    return (
       <div>
{user.map(item =><div>
    <img src ={item.image} alt="user" />
    <p>{item.firstName}  {item.lastName}  {item.maidenName}</p>
    <h4>Details</h4>
    <p>UserName: {item.username}</p>
    <p>Email: {item.email}</p>
    <p>Phone: {item.phone}</p>
    <p>Gender: {item.gender}</p>
    <p>Age: {item.age}</p>
</div>)}
       </div>
    ); 
};
export default User;

