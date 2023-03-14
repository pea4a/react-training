import { red } from '@mui/material/colors';
import React, { useRef, useState } from 'react';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';
const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'javaScript1', body: 'Description' },
        { id: 2, title: 'javaScript2', body: 'Description' },
        { id: 3, title: 'javaScript3', body: 'Description' },
        { id: 4, title: 'javaScript4', body: 'Description' },
        { id: 5, title: 'javaScript5', body: 'Description' },
    ])
    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        console.log(sort);
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <br style={{ margin: '15px 0' }} />
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='sort by'
                    options={[
                        { value: 'title', name: 'by name' },
                        { value: 'body', name: 'by desc' },
                    ]}
                />
            </div>
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts} title='post`s about JS' />
                :
                <h1 style={{ textAlign: 'center' }}>
                    posts not found!
                </h1>
            }

        </div >
    )
}
export default App;
