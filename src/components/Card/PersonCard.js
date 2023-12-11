import React, { useState } from 'react';
import styled from './person.module.css';

const PersonCard = (props) => {

    const {name, email, address, phone, backgroundColor , parentId}=props.item;

    const {data}=props;

    const managerIndex=data.findIndex((item)=> item.id===parentId);
    let managerName='';
    if(managerIndex!==-1){
      managerName=data[managerIndex].name;
    }

    const subordinate=data.filter((item)=>item.parentId===parentId && parentId !==null && item.id!==props.item.id);

    let fontcolor='black';
    if(backgroundColor==='black'){
        fontcolor='white';
    }

  return (
    <div className={styled.personcard} style={{backgroundColor:backgroundColor, color:fontcolor }}>
        <h3>Name : {name}</h3>
       <p>Email : {email}</p>
       <p>Address:  {address}</p>
       <p>Phone no :{phone}</p>
       {parentId && <p>manager's name : {managerName}</p>}
       {subordinate && subordinate.map((item,index)=>{
        return <p key={index}>subordinate {index+1} {item.name}</p>
       })}
    </div>
  )
}

export default PersonCard;