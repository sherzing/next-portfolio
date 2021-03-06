import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'

const BasePage = (props) => {
    const { className } = props
    // Use this if you don't use defaultProps
    //const className = props.className || ''
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

BasePage.defaultProps = {
    className: ''
}

BasePage.PropTypes = {
    className: PropTypes.any.isRequired
}

export default BasePage