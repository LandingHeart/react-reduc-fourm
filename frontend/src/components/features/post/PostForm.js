import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/postAction";
import PropTypes from "prop-types";
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        };
        this.props.createPost(post);
    }
    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <h1> Add Post </h1>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="title"> Title: </label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleOnChange}
                            value={this.state.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="body"> Body: </label>
                        <br />
                        <textarea
                            type="text"
                            name="body"
                            onChange={this.handleOnChange}
                            value={this.state.body}
                        />
                    </div>

                    <button type="submit"> Submit </button>
                </form>
            </div>
        );
    }
}
PropTypes.PropTypes = {
    createPost: PropTypes.func.isRequired,
};
export default connect(null, { createPost })(PostForm);
