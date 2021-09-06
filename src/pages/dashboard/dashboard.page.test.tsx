import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'

import DashboardPage from './dashboard.page'

const responseMock = [
  {
    id: 1,
    title: "Post 1 TEST MOCK",
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

// Mock fetch API
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

// Teardown
afterEach(cleanup)

describe('<DashboardPage /> snapshot test', () => {
  it ('test', async () => {
    // Setup (Given): Renderizar um component/page/view
    const { container } = render(<DashboardPage />)

    // Interact (When): Neste caso, colocamos um await numa query async somente
    // para o RTL esperar a operação assíncrona do "componentDidMount" que renderiza
    // o conteúdo completo.
    const textTitle = await screen.findByText('Posts')
    expect(textTitle).toBeInTheDocument()

    // Assert (Then): Comparação entre snapshots
    expect(container).toMatchSnapshot()
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