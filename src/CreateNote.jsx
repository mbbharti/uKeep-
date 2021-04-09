import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props)=>{
    const[expand,setExpand] = useState(false);
    const[note,setNote]=useState({
        title:"",
        content:""
    })
     const changeNote=(e)=>{
        const {name,value}=e.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        });
        // console.log(name);
     }
     const expandform = ()=>{
         setExpand(true);
     }
     const backToNormal = ()=>{
         setExpand(false);
     }

     const addNote = ()=>{
         
         if(note.title === "" || note.content === "")
        {
            alert("Please enter title and/or content to save a Note.");
        }
        else{
            props.addData(note);
            setNote({
                title:"",
                content:""
            });
        }

     }


    return (
        <div className="mainNote" onDoubleClick={backToNormal}>
            <form>
                {expand ?
                <input onChange={changeNote} name="title" value={note.title} type="text" placeholder="Title" autoComplete="off" />
                : null }
                <textarea onChange={changeNote} onClick={expandform} name="content" value={note.content} placeholder="Take a Note..." cols="" rows=""></textarea>
                {expand ?
                <Button onClick={addNote}>
                    <AddIcon> + </AddIcon>
                </Button> : null}
            </form>
        </div>
    )
}

export default CreateNote;