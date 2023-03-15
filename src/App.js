import { red } from '@mui/material/colors';
import React, { useMemo, useRef, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
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
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            console.log('lol')
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }

        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
    }, [filter.query, sortedPosts]
    )


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='App'>
            <MyButton onClick={() => setModal(true)}>
                create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='post`s about JS' />
        </div >
    )
}
export default App;
