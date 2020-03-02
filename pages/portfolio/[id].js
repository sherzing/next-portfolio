import React from 'react'
import axios from 'axios'
import { withRouter } from 'next/router'
import BaseLayout from '../../components/layouts/BaseLayout'


class Portfolio extends React.Component {

    static async getInitialProps(context) {
        const postId = context.query.id 
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            console.log(response.data)
            const post = response.data
            return {post}
        } catch (err) {
            console.error(err)
        }    
    }

    render() {
        const {post} = this.props

        return (
            <BaseLayout>
                <h1>{post.title}</h1>
                <h2>{post.body}</h2>
                <p>{post.id}</p>
            </BaseLayout>
        )
    }
}


export default withRouter(Portfolio)