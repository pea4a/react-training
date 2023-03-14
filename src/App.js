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
        { id: 1, title: 'AjavaScript1', body: 'GDescription' },
        { id: 2, title: 'BjavaScript2', body: 'EDescription' },
        { id: 3, title: 'FjavaScript3', body: 'ADescription' },
        { id: 4, title: 'TjavaScript4', body: 'BDescription' },
        { id: 5, title: 'GjavaScript5', body: 'QDescription' },
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {
        console.log('lol')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }

        return posts

    }

    const sortedPosts = getSortedPosts()

    const sortPosts = (sort) => {
        setSelectedSort(sort)

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
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='search...'
                />
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
                <PostList remove={removePost} posts={sortedPosts} title='post`s about JS' />
                :
                <h1 style={{ textAlign: 'center' }}>
                    posts not found!
                </h1>
            }

        </div >
    )
}
export default App;
