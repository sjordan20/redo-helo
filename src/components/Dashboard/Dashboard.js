import React, { Component } from 'react';
import Post from '../Post/Post'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super()

        this.state = {
            posts: [],
            userInput: '',
            myPosts: true
        }
    }

    componentDidMount() {
        console.log("here")
        this.getPosts()
        return ''
    }

    getPosts = () => {

        axios.get(`/api/posts`)
            .then(res => {
                console.log("hi")

                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err))
        console.log(this.state.posts)
    }



    render() {
        let mappedPosts = this.state.posts.map((element, index) => {
            return (
                <Post
                    posts={element}
                    key={index}
                // mappedPosts={mappedPosts}
                />


            )
        })
        return (
            <div>
                <button>Search</button>
                <button>Reset</button>
                {mappedPosts}
            </div >
        );
    }
}

export default Dashboard;