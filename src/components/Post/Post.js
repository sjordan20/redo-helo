import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { getPosts, getUser } from '../../ducks/reducer'

class Post extends Component {



    deletePost = () => {
        axios.delete(`/api/posts/${this.props.post.post_id}`).then(res => {


        })

    }

    render(props) {
        return (
            <div>
                {this.props.posts.content}
                {this.props.posts.title}
                <img src={this.props.posts.img} />

                <button onClick={() => { this.deletePost() }}>
                    delete
                </button>
            </div>
        );
    }
}

const mappedStateToProps = state => {
    return state
}

export default connect(mappedStateToProps, { getPosts, getUser })(Post);