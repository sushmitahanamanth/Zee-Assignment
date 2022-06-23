import React,{useState} from "react";
const EditPost = (props)=>{
    const {title:heading,id,updatePost}=props
    const [title,setTitle]=useState(heading? heading : "")

    const editHandle=(e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            id:id,
            title:title
        }
        updatePost(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={editHandle}/>
            <input type="submit" value="save"/>
            </form>
        </div>
    )
}
export default EditPost
    