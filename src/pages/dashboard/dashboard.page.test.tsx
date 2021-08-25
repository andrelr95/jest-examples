import { findByText, getByText, render, screen } from '@testing-library/react'
import React from 'react'

import DashboardPage from './dashboard.page'

const responseMock = [
  {
    id: 1,
    title: "Post 1 TEST MOCK"
  },
  {
    id: 2,
    "title": "Post 2 TEST MOCK"
  },
  {
    id: 3,
    title: "Post 3 TEST MOCK"
  }
]

// global.fetch = jest.fn(() => {
//   const promise = new Promise<Response>((resolve) => {
//     resolve({
//       ...new Response(),
//       json: () => Promise.resolve(({ ...responseMock }))
//     })
//   })

//   return promise
// })

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
    return new Promise<Response>((resolve) => {
      return resolve({
        ...new Response(),
        json: () => Promise.resolve({ ...responseMock })
      })
    })
  })
})

describe('Dashboard unit tests', () => {
  it('should exists', () => {
    expect(DashboardPage).toBeDefined()
  })
  it('should render all posts', async () => {
    // global.fetch = jest.fn(() => {
    //   const promise = new Promise<Response>((resolve) => {
    //     resolve({
    //       ...new Response(),
    //       json: () => Promise.resolve(({ ...responseMock }))
    //     })
    //   })
    
    //   return promise
    // })

    // const fetchMock = jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
    //   return new Promise<Response>((resolve) => {
    //     return resolve({
    //       ...new Response(),
    //       json: () => Promise.resolve({ ...responseMock })
    //     })
    //   })
    // })

    render(<DashboardPage />)

    // expect(fetchMock).toHaveBeenCalled()
    expect(screen.getByText('...loading page')).toBeInTheDocument()
    expect(await screen.findByText('DASHBOARD')).toBeInTheDocument()
    
    // console.log({ state: DashboardPage.prototype.state, spy: fetchMock.getMockImplementation() })
    // DashboardPage.prototype.componentDidMount()

    // expect(spy).toHaveBeenCalled()
  })
})