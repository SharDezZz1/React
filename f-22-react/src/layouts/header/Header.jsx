import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
    return (
        <div>
            <header>
                <div>Logo</div>
                <nav>
                    <ul className={styles.header_menu}>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                    </ul>
                </nav>
                <button>Register</button>
            </header>
        </div>
    )
}

export default Header