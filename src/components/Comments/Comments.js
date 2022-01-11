import Comment from "../Comment/Comment"
import {useEffect, useState} from "react";

const Comments =() =>{
    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(value =>value.json())
            .then(value => setComments(value))
        }, []

    )
    return(
        <div>
            {comments.map(value=><Comment key={value.postId} postId={value.postId} id={value.id} name={value.name} email={value.email} />)}
        </div>

    );
};
export default Comments;


