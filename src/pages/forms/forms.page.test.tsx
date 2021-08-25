import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import FormsPage from './forms.page'

describe('<FormsPage />', () => {
  it('should exists', () => {
    expect(FormsPage).toBeDefined()
  })
  it('input only number test', () => {
    render(<FormsPage />)
    const numberInput = screen.getByRole('textbox', { name: /input de número/i })

    act(() => {
      fireEvent.change(numberInput, { target: { value: 'ABCD222E' } })
    })

    expect(numberInput).toHaveValue('222');
  })

  it('should show cards when clicked on button', () => {
    render(<FormsPage />)
    const button = screen.getByRole('button', { name: /mostrar componentes/i})
    expect(screen.queryAllByTestId('card-id-example')).toHaveLength(0);
    screen.debug()

    act(() => {
      fireEvent.click(button)
    })
    screen.debug()

    expect(screen.getAllByTestId('card-id-example')).toHaveLength(3)


  })
})