import React,{useState,useEffect} from "react";
//import axios from 'axios'
import PostItem from "./PostItem";

const PostList=(props)=>{
    
  const {posts, deletePost, editPost}=props
  
  
   
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
                            <PostItem key={post.id} {...post} deletePost={deletePost} editPost={editPost}/>
                        )
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}
export default PostList