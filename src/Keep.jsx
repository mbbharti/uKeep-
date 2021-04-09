import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Note from './Note';

const Keep = ()=>{
    const[addItem,setAddItem] = useState([]);
    const createAddNote= (note)=>{
        setAddItem((prevData)=>{
        return[
            ...prevData,
            note,
        ];
    });
     
};
    const deletingItem =(id)=>{
        setAddItem((oldData)=>
            oldData.filter((val,indx)=>{
                return indx !== id;
            })
        );
    };
        // alert("clicked");
    

    return(
        <>
            <Header />
            <CreateNote addData={createAddNote} />
            {addItem.map((val,index)=>{
                  return  <Note
                    id={index}
                    key={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={deletingItem}
                    />
                })
            }
            <Footer />
        </>
    )
 }

 export default Keep;