import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

class Index extends React.Component {
    
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
        return (
            <BaseLayout>
                <h1 className='fromPage'>Index class</h1>
                <h2> {this.state.title} </h2>
                <button onClick={ () => this.updateTitle()}>Change title</button>
            </BaseLayout>
        )
    }
}


export default Index