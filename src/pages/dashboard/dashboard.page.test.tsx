import React from 'react'
import { create } from 'react-test-renderer'
import { render, screen, cleanup } from '@testing-library/react'

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

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
    return new Promise<Response>((resolve) => {
      return resolve({
        ...new Response(),
        json: () => Promise.resolve([...responseMock])
      })
    })
  })
})

afterEach(cleanup)

describe('<DashboardPage /> snapshot test', () => {
  it('should match snapshot', () => {
    const component = create(<DashboardPage />).toJSON()
    expect(component).toMatchSnapshot()
  })
})

describe('<DashboardPage /> unit tests', () => {
  it('should exists', () => {
    expect(DashboardPage).toBeDefined()
  })
  it('should render all posts', async () => {
    // Given
    const spy = jest.spyOn(DashboardPage.prototype, 'componentDidMount');
    render(<DashboardPage />)
    
    //Then
    expect(spy).toHaveBeenCalled()
    expect(screen.getByText('...loading page')).toBeInTheDocument()
    const renderedPosts = await screen.findAllByTestId('card-post-test')
    expect(renderedPosts).toHaveLength(3)
  })
})