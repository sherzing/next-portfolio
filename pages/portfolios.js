import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Portfolios extends React.Component {

    static async getInitialProps() {
        console.log('in get initial props portfolios')
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response.data)
            const posts = response.data
            return {posts : posts.splice(0, 10)}
        } catch (err) {
            console.error(err)
        } 
    }

    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <li key={index}>
                <Link as={`/portfolio/${post.id}`} href={'/portfolio/[id]'}>
                    <a>{post.title}</a>
                </Link>
                </li>
            )
        })
    }

    render() {
        const { posts } = this.props
        console.log(this.props)
        return (
            <BaseLayout>
            <BasePage>
            <h1>Portfolio class</h1>
            <ul>
                {this.renderPosts(posts)}
            </ul>
            </BasePage>
            </BaseLayout>
        )
    }
}


export default Portfolios