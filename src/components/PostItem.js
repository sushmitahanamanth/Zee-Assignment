import React,{useState} from "react";
import EditPost from "./EditPost";
const PostItem=(props)=>{
    const {id,title:heading,deletePost,updatePost}=props
    const [title,setTitle]=useState(heading ? heading :"")
    const [toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
   }
   const handleDelete=(id)=>{
    deletePost(id)
}
    return(
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td><button onClick={()=>{handleToggle()}}>Edit</button></td>
                <td><button onClick={()=>{handleDelete(id)}}>Delete</button></td>
                {
                    toggle && <EditPost id={id} title={title} updatePost={updatePost}/>
                }
            </tr>
    )
}
export default PostItem