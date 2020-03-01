import React from 'react'
import axios from 'axios'
import BaseLayout from '../components/layouts/BaseLayout'


class Portfolios extends React.Component {

    static async getInitialProps() {
        console.log('in get initial props portfolios')
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response.data)
            const posts = response.data
            return {posts : posts.splice(0, 10)}
        } catch (err) {
            console.err(err)
        } 
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    {/* <td>{post.body}</td>
                </tr> */}
                
            )
        })
    }

    render() {
        const { posts } = this.props
        console.log(this.props)
        return (
            <BaseLayout>
            <h1>Portfolio class</h1>
            <table>
                <tbody>
                {this.renderPosts(posts)}
                </tbody>
            </table>
            </BaseLayout>
        )
    }
}


export default Portfolios