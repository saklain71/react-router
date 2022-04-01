import { Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './Components/Friend/Friends';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import FriendDetail from './Components/FriendDetail/FriendDetail'
import Post from './Components/Post/Post';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/friends" element={<Friends></Friends>}></Route>
        <Route path = "/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>
        <Route path= "/posts" element={<Post></Post>}> 
        <Route path=":postId"  element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path = "*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
