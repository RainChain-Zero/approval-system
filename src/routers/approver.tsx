import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Home from '../pages/home'
import Account from '../pages/account'
import Inbox from '../pages/inbox'
import Review from '../pages/review'
import NoMatch from '../pages/noMatch'
import ReviewApprover from '../pages/reviewApprover'
import ReviewList from '../pages/reviewList'

const approver: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Account /> },
      { path: 'account', element: <Account /> },
      { path: 'inbox', element: <Inbox /> },
      {
        path: 'review',
        element: <Review role={'approver'} />,
        children: [
          {
            path: 'detail',
            element: <ReviewApprover />,
          },
          {
            path: 'list',
            element: <ReviewList role={'approver'} />,
          },
        ],
      },
      { path: '*', element: <NoMatch /> },
    ],
  },
]
export default approver
