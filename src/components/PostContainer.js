import React,{useState,useEffect} from "react";
import PostList from "./PostList";
import ReactPaginate from 'react-paginate'
import axios from 'axios'

const PostContainer=()=>{
    const [posts,setPosts]=useState([])
    const [search,setSearch]=useState("")
    const [pageNumber,setPageNumber]=useState(0)
    const postsPerPage=1
    const pageVisited=pageNumber+postsPerPage
    const searchHandle=(e)=>{
        setSearch(e.target.value)
    }
    
    const filteredPost=()=>{
        //console.log(posts,"posts")
        const result= posts.filter((post)=>{
            //console.log(post.title.toUpperCase())
           // console.log(search)
            return (post.title.toUpperCase().includes(search)||
            post.title.toLowerCase().includes(search)||
            post.id===Number(search))
        })
        return result
    }
    //console.log(filteredPost())
    
    const pageCount = filteredPost().length > 0 ? Math.ceil(filteredPost().length / postsPerPage) : Math.ceil(posts.length / postsPerPage)
    
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const deletePost=(id)=>{
            const result=posts.filter((ele)=>{
                return ele.id!==id
            })
            setPosts(result)
    }
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const result=response.data
                console.log(result)
                setPosts(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
    

    return(
        <div>
            <h1>Post List</h1>
            <input type='text' value={search} onChange={searchHandle}/>
            {/* {
                filteredPost().length ?
                (<PostList posts={filteredPost()} deletePost={deletePost}/>):
                (<PostList posts={posts} deletePost={deletePost}/>)
                
            } */}
            {
                search ?
                <div>
                    {
                        filteredPost().length>0 ?filteredPost().slice(pageVisited,pageVisited+postsPerPage).map(post=>{
                            return <PostList key={post.id} posts={filteredPost()} deletePost={deletePost}/>
                        }):<h3>No posts</h3>
                    }
                </div>:
                <div>
                    {
                        posts.slice(pageVisited,pageVisited+postsPerPage).map(post=>{
                            return <PostList key={post.id} posts={posts}deletePost={deletePost}/>
                        })
                    }
                </div>
            }
            <ReactPaginate
            previousLabel={"Previous"}
            pageCount={pageCount}
            nextLabel={"Next"}
            onPageChange={changePage}
            />
        </div>
    )
}
export default PostContainer