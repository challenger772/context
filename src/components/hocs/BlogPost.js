import React from 'react';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogpost: DataSource.getBlogPost(props.id)
        };
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange); 
    }

    handleChange() {
        this.setState({
            blogPost: DataSource.getBlogPost(props.id)
        });
    }

    render() {
        return <TextBlcok text={this.state.blogPost} />;
    }
}