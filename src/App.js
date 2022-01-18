import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UsersDetails from "./components/UsersDetails/UsersDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'

import {postService} from "./services/post.service";


const App = () => {
    const [user, setUser] = useState(null)
    const [posts,setPosts] = useState([])
    
    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }
    
    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]))
      
    }
    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UsersDetails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};

export default App;