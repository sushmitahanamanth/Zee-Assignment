import React,{useState,useEffect} from "react";
//import axios from 'axios'
import PostItem from "./PostItem";

const PostList=(props)=>{
    
  const {posts, deletePost}=props
  const [toggle,setToggle]=useState(false)
  
  
   const handleDelete=(id)=>{
        deletePost(id)
   }
   const handleEdit=()=>{
        setToggle(!toggle)
   }
   const handleEditChange=(e,id)=>{
        //console.log(e.target.value)
        //console.log(id)
        posts.map((post)=>{
            if(post.id==id){
              return  post.title=e.target.value
            }
        })
   }
   
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>  
                </thead>
                <tbody>
                    {posts.map((post)=>{
                        //console.log(post,post.id)
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td><button onClick={()=>{handleEdit()}}>
                                {
                                    toggle ? (<input type='text' value={post.title} onChange={()=>{handleEditChange(post.id)}}/>):"Edit"
                                }
                                </button></td>
                                <td><button onClick={()=>{handleDelete(post.id)}}>Delete</button></td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}
export default PostList