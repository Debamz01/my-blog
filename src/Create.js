import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('De-bamz');
const [loading, setLoading] = useState(false);
const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setLoading(true);

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "content-Type": "application-json" },
         body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
     setLoading(false);
     history.push('/');
    }); 
}
    return (  
    <div className="create">
        <h2>Add new blog </h2> 
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea 
            required
            value={body}
            onChange={(e)=> setBody(e.target.value)}
            >
                
            </textarea>
            <label>Blog author:</label>
            <select
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            >
                <option value="De-bamz">De-bamz</option>
                <option value="Ayobami">Ayobami</option>
            </select>
            { !loading && <button>Add Blog</button>}
            { loading && <button disabled>Adding new Blog...</button>} 
        </form>
    </div>    
    );
}
 
export default Create;