import React from 'react'
import {useSelector} from 'react-redux'
import News from '../../components/News'
import {AppStateType} from '../../redux/store'
import {LoadingStatus} from '../../types/types'
import styles from './Home.module.css'

const Home = () => {
    const news = useSelector((state: AppStateType) => state.news.news)
    const loadingStatus = useSelector((state: AppStateType) => state.news.loadingStatus)

    return (
        <div className={styles.Home}>
            <div className={styles.leftBlock}>
                {loadingStatus === LoadingStatus.LOADING ? <p> LOADING...</p> :
                    news && news.map(news => (
                        <News title={news.title} text={news.text} date={news.date} user={news.user}
                              likesCount={news.likesCount} liked={news.liked}/>
                    ))}
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.peopleRecommendations}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi fugit minima numquam
                    possimus saepe suscipit vel vitae? Accusantium animi aspernatur aut beatae exercitationem expedita
                    iusto magnam numquam, quibusdam unde?
                </div>
                <div className={styles.newsRecommendations}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi fugit minima numquam
                    possimus saepe suscipit vel vitae? Accusantium animi aspernatur aut beatae exercitationem expedita
                    iusto magnam numquam, quibusdam unde?
                </div>
            </div>
        </div>
    )
}

export default Home
