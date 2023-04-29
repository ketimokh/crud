import {useEffect, useState} from "react";
import axios from "axios";

const usePage = () => {
    const [aPIData, setAPIData] = useState([]);
    const [post, setPost ] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setAPIData(response.data.slice(0,10));
            })
    }, [])

const createPost = (title,body) => {
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title,
        body
    })
        .then((response) => {
            setAPIData(prev => [response.data, ...prev])
        })
}


    const updatePost = async () => {
        if (post === null) return
        // axios.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
        //     title: post.title,
        //     body: post.body
        // })
        //     .then((response) => {
        //         setAPIData(prev => prev.map((el) => {
        //             if (el.id === response.data.id) return response.data
        //             return el
        //         })
        //         setPost(null)
        //         )
        //     })
        const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
            title: post.title,
            body: post.body
        })
        setAPIData(prev => prev.map((el) => {
            if (el.id === response.data.id) return response.data
            return el
        }))
        setPost(null)
    }

    const deletePost = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                console.log(response)
                setAPIData(prev => prev.filter((el => el.id !== id)
                ))
            })

    }


    return {
        aPIData,
        setAPIData,
        post,
        title,
        body,
        createPost,
        updatePost,
        deletePost,
        setPost,
        setTitle,
        setBody
    }

}


export default usePage
