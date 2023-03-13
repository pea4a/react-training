import React, { useRef, useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'javaScript1', body: 'Description' },
        { id: 2, title: 'javaScript2', body: 'Description' },
        { id: 3, title: 'javaScript3', body: 'Description' },
        { id: 4, title: 'javaScript4', body: 'Description' },
        { id: 5, title: 'javaScript5', body: 'Description' },
    ])
    const [post, setPost] = useState({
        title: '',
        body: '',
    })

    const addNewPost = (e) => {
        e.preventDefault()

        setPosts([...posts, { ...post, id: Date.now }])
        setPost({
            title: '',
            body: '',
        })
    }

    return (
        <div className='App'>
            <form>
                <MyInput
                    value={post.title}
                    onChange={event => setPost({ ...post, title: event.target.value })}

                    type='text'
                    placeholder='post`s name'
                />
                <MyInput
                    value={post.body}
                    onChange={event => setPost({ ...post, body: event.target.value })}
                    type='text'
                    placeholder='post`s description' />
                <MyButton onClick={addNewPost}>add post</MyButton>
            </form>
            <PostList posts={posts} title='post`s about JS' />
        </div >
    )
}
export default App;
