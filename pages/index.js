import React from 'react'
import axios from 'axios'
import BaseLayout from '../components/layouts/BaseLayout'

class Index extends React.Component {
    
    static async getInitialProps() {
        console.log('in get initial props')
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            console.log(response.data)
            const userData = response.data
            return {initialData: [1, 2, 3, 4], userData}
        } catch (err) {
            console.err(err)
        }
        
    }

    constructor(props) {
        super(props)
        this.state = {
            title: 'I am index page'
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUPdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateTitle() {
        this.setState({title : 'I am Updated index page'})
    }

    render() { 
        const {userData, initialData } = this.props

        return (
            <BaseLayout>
                <h1 className='fromPage'>Index class</h1>
                <h2> {this.state.title} </h2>
                <h2> {userData.title}</h2>
                <button onClick={ () => this.updateTitle()}>Change title</button>
            </BaseLayout>
        )
    }
}


export default Index