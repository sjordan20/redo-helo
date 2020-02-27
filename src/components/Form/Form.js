import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { getPosts } from '../../ducks/reducer'


class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            img: '',
            content: '',
        }
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addPost = () => {

        axios.post(`/api/posts/${this.props.user_id}`, { ...this.state })
            .then(res => {
                this.setState({
                    title: this.state,
                    img: this.state,
                    content: this.state
                })

            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input
                    placeholder='Title'
                    name='title'
                    onChange={this.handleInput}
                />
                <input
                    placeholder='Insert Image URL'
                    name='img'
                    onChange={this.handleInput}
                />
                <textarea
                    placeholder='Type Post Here'
                    cols='20'
                    rows='20'
                    name='content'
                    onChange={this.handleInput}
                />
                <Link to='/dashboard'>
                    <button onClick={() => { this.addPost() }}>
                        Post
                </button>

                </Link>
            </div >
        );
    }
}

const mapStateToProps = state => {

    return state


}

export default connect(mapStateToProps)(Form);