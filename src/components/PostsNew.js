import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions';

class PostsNews extends Component {
  renderField = ({ input, label, meta: { touched, error } }) =>
    <div className={ `form-group ${ (touched && error) && 'has-danger' }` }>
      <label>{label}</label>
      <input
        className="form-control"
        type="text"
        {...input}
      />
      <div className="text-help">
        { touched && error }
      </div>
    </div>

  handleSubmit = values => {
    this.props.addPost(values, () => this.props.history.push('/'));
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
      >
        {
          [
            {label: "Title", name: "title"},
            {label: "Categories", name: "categories"},
            {label: "Post Content", name: "content"}
          ]
          .map(item =>
            <Field
              key={item.name}
              {...item}
              component={this.renderField}
            />
          )
        }
        <input type="submit" className="btn btn-primary"/>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Please provide a title";
  if (!values.categories) errors.categories = "Please provide at least one category";
  if (!values.content) errors.content = "Please provide some content";

  return errors;
}

const mapDispatchToProps = { addPost };

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, mapDispatchToProps)(PostsNews));