import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  handleClick = () => {
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push('/');
    })
  }

  render() {
    if (!this.props.post) return <div>Loading...</div>

    const { post: { title, categories, content} } = this.props;

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.handleClick}
        >
          Delete Post
        </button>
        <h3>{ title }</h3>
        <h6>Categories: { categories }</h6>
        <p>{ content }</p>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({ post: posts[ownProps.match.params.id] })
 
export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);