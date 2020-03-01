import React from 'react'
import { withRouter } from 'next/router'
import BaseLayout from '../components/layouts/BaseLayout'


class Portfolio extends React.Component {

    render() {
        return (
            <BaseLayout>
                <h1>Portfolio page</h1>
                <h2>{this.props.router.query.title}</h2>
            </BaseLayout>
        )
    }
}


export default withRouter(Portfolio)