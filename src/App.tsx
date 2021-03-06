import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NormalizeStyle } from './styles/bases'
import Home from './components/pages/home'
import ErrorNotFound from './components/pages/error'
import { AppPath } from './constant/appPath'
import { Provider } from 'react-redux'
import { store } from './store'
import { setToastProvider } from './store/toastProvider'
import { ToastMessage } from 'rimble-ui'

const dispatchToastProvider = (node) => {
    store.dispatch(setToastProvider(node))
}

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <NormalizeStyle />
            <Router>
                <Switch>
                    <Route exact={true} path={AppPath.home} component={Home} />
                    <Route component={ErrorNotFound} />
                </Switch>
            </Router>
            <ToastMessage.Provider
                ref={(node) => dispatchToastProvider(node)}
            />
        </Provider>
    )
}

export default App
