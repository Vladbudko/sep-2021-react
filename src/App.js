import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import './App.css'

const App =() =>{
    return(
            <div>
                <Users/>
                <Posts/>
                <Comments/>
            </div>

    );
};

export default App;