import React from 'react'
import styles from './News.module.css'
import Avatar from '../Avatar'
import {formatDate} from '../../utils/date-format'

type NewsType = {
    user: {
        avatarUrl: string | null
        fullName: string
        username: string
    }
    date: string
    title: string
    text: string
    likesCount: number
    liked: boolean
}

const News: React.FC<NewsType> = ({title, text, user, date, likesCount, liked}) => {
    return (
        <div className={styles.news}>
            <div className={styles.newsInfo}>
                <Avatar url={user.avatarUrl} fullName={user.fullName}/>
                <div className={styles.userInfo}>
                    <div className={styles.fullName}>{user.fullName}
                        <span className={styles.username}> • @{user.username}</span>
                    </div>
                    <div className={styles.date}>{formatDate(date)}</div>
                </div>
            </div>
            <div className={styles.newsTitle}>{title}</div>
            <div className={styles.newsText}>{text}</div>
            <div className={styles.newsFooter}>
                <div className={styles.likes}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                         fill={liked ? '#FE0000' : '#D1D1D1'}>
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <div className={styles.likesCount}>{likesCount}</div>
                </div>
            </div>
        </div>
    )
}

export default News
