import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
const { id } = useParams();
const { data: blog, error, stillLoading } = useFetch('http://localhost:8000/blogs/' + id)
const history = useHistory();

const deleteBlog= () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    }).then(() =>{
        history.push('/');
    })
}
    return ( 
        <div className="blog-details">
        { stillLoading && <div>Loading...</div> }
        { error && <div> { error } </div> } 
        { blog && (
            <article>
<h2>{ blog.title }</h2>
<p>Written by { blog.author }</p>
<div>{ blog.body }</div>
<button onClick={deleteBlog}>Delete blog</button>
            </article>
        ) }   
        </div>
     );
}
 
export default BlogDetails;