import axios from 'axios'
import {NewsType} from '../types/news'

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
})

export const NewsAPI = {
    getNews: () => {
        return instance.get<NewsType[]>('news').then(res => res.data)
    },
}
