import {useState, useEffect} from "react";
import Axios from "axios";
function DataFetchingDemo(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            setPosts(response.data);
        })
        .catch(err=>{console.log(err);})
      },[])
    return(
        <div>
            <h1>Data Fetching Demo (using Axios)</h1>
            <table border="3" cellPadding="10" align="center">
                {
                    posts.map((post,index)=>
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                    )
                }
            </table>
        </div>
    )
}
export default DataFetchingDemo;