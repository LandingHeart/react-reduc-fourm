import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions/postAction";
import PropTypes from "prop-types";
import CardSection from "../../sections/CardSection";
import "./post.css";
class Post extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPost();
        console.log("mounted");
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const { posts } = this.props;
        return (
            <div>
                {posts.map((post) => {
                    return (
                        <CardSection
                            username={post.username}
                            title={post.title}
                            description={post.description}
                            comment={post.comment}
                        />
                    );
                })}
            </div>
        );
    }
}
Post.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPost })(Post);
