import React from 'react'
import Link from 'next/link'

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p className='custom'> I'm a styled element</p>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/blogs">
                <a>Blogs</a>
            </Link>
            <Link href="/portfolios">
                <a>Portfolios</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/cv">
                <a>CV</a>
            </Link>
            <style jsx>
            {`
            a {
                font-size: 15px
            };
            .custom {
                color: red;
            }
            `}
            </style>
            </React.Fragment>
        )
    }
}

export default Header