import React from 'react'
import styles from './Header.module.css'
import Avatar from '../Avatar'

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <div className={styles.logo}>NewPAPER</div>
                    <input type="text" placeholder="Поиск статьи..." className={styles.search}/>
                    <div className={styles.addNews}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                             fill="#8B8B8B">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path
                                d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"/>
                        </svg>
                        <span>создать статью</span>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.fullName}>HAROLD_REEVSE</div>
                        <Avatar url='https://source.unsplash.com/random/100x100' fullName={'NO NAME'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
