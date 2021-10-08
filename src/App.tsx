import React, { Suspense } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './routes'
import { ReactComponent as IconPaper } from './assets/icon-paper.svg'

const App: React.FC = () => {
  const placeHolder = (
    <IconPaper />
  )
  return (<div className="App">
    <Router><Switch>
      {routes.map(({ path, exact, component: Component }) => (
        <Route key={path} exact={exact} path={path}>
          <Suspense fallback={placeHolder}>
            <Component />
          </Suspense>
        </Route>
      ))}
    </Switch></Router>
  </div>);
}

export default App
