import axios from 'axios'
import React from 'react'

import PostForm from "./PostForm"
import Post from "./Post"

export default class PostIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {posts: []}
        this.get_all_posts = this.get_all_posts.bind(this)
        this.render_post = this.render_post.bind(this)
    }

    get_all_posts(){
        return axios.get("/posts")
    }

    render_post = async() => {
        try {
          const res = await axios.get('/posts', {headers: {'Accept': 'application/json'}})
          const posts = res.data;
          this.setState({
            posts: posts
          });
        } catch (err) {
          console.log(err);
        }
      }

    componentDidMount() {
        this.render_post()
    }

    render(){
        return (
            <div className="d-flex flex-column w-75">
                <PostForm authenticity_token={this.props.authenticity_token}/>
                <div>
                    {this.state.posts.map(post=>{
                        return <Post key={post.id} {...post}/>
                    })}
                </div>
            </div>
        )
    }
}