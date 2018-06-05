import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    if (Object.keys(this.props.posts).length === 0) {
      this.props.fetchPosts();
    }
  }

  renderPosts = () => {
    const posts = this.props.posts
    return Object.keys(posts).sort((a,b) => b - a).map(item =>
      <li className="list-group-item" key={posts[item].id}>
        <Link to={`/posts/${posts[item].id}`}>{posts[item].title}</Link>
      </li>
    )
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);