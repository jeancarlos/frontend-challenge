import React, { Suspense } from 'react'
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { ReactComponent as IconPaper } from './assets/icon-paper.svg'
import reducer from './store/reducer'

const store: Store<TPlayerState, TPlayerAction> & {
  dispatch: TDispatchType
} = createStore(reducer, applyMiddleware(thunk))



const App: React.FC = () => {
  const placeHolder = (
    <IconPaper />
  )
  return (<div className="App">
    <Provider store={store}>
      <Router><Switch>
        {routes.map(({ path, exact, component: Component }) => (
          <Route key={path} exact={exact} path={path}>
            <Suspense fallback={placeHolder}>
              <Component />
            </Suspense>
          </Route>
        ))}
      </Switch></Router>
    </Provider>
  </div>)
}

export default App
