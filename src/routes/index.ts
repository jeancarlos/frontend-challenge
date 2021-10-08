import { lazy } from 'react'

const Start = lazy(() => import('../containers/Start'))
const Results = lazy(() => import('../containers/Results'))

const routes = [
  {
    path: '/',
    component: Start,
    exact: true
  },
  {
    path: '/results',
    component: Results,
    exact: true
  }
]

export default routes
