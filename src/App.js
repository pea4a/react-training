import React, { useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';
const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'javaScript1', body: 'Description' },
        { id: 2, title: 'javaScript2', body: 'Description' },
        { id: 3, title: 'javaScript3', body: 'Description' },
        { id: 4, title: 'javaScript4', body: 'Description' },
        { id: 5, title: 'javaScript5', body: 'Description' },
    ])
    const [posts2, setPosts2] = useState([
        { id: 1, title: 'python1', body: 'Description' },
        { id: 2, title: 'python2', body: 'Description' },
        { id: 3, title: 'python3', body: 'Description' },
        { id: 4, title: 'python4', body: 'Description' },
        { id: 5, title: 'pythont5', body: 'Description' },
    ])
    return (
        <div className='App'>
            <PostList posts={posts} title='post`s list 1' />
            <PostList posts={posts2} title='post`s list 2' />
        </div >
    )
}
export default App;
