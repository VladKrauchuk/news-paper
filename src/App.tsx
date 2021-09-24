import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import {useDispatch} from 'react-redux'
import {requestNews} from './redux/news.reducer'

const App = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(requestNews())
    }, [])

    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Home/>
            </div>
        </div>
    )
}

export default App
