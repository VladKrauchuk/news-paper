import produce, {Draft} from 'immer'
import {NewsType} from '../types/news'
import {LoadingStatus} from '../types/types'
import {BaseThunkType, InferActionsTypes} from './store'
import {NewsAPI} from '../api/api'

const initialState = {
    news: [] as Array<NewsType>,
    loadingStatus: LoadingStatus['NEVER'],
}

const newsReducer = produce((draft: Draft<InitialStateType>, action: ActionsTypes) => {
    switch (action.type) {
        case 'NP/NEWS/SET_NEWS':
            draft.news = action.news
            break
        case 'NP/NEWS/SET_LOADING_STATUS':
            draft.loadingStatus = action.loadingStatus
            break
        default:
            break
    }
}, initialState)

export const actions = {
    setNews: (news: Array<NewsType>) => ({type: 'NP/NEWS/SET_NEWS', news} as const),
    setLoadingStatus: (loadingStatus: LoadingStatus) => ({type: 'NP/NEWS/SET_LOADING_STATUS', loadingStatus} as const),
}

export const requestNews = (): ThunkType => async (dispatch) => {
    dispatch(actions.setLoadingStatus(LoadingStatus.LOADING))
    let data = await NewsAPI.getNews()
    dispatch(actions.setNews(data))
    dispatch(actions.setLoadingStatus(LoadingStatus.LOADED))
}

export default newsReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
