import React from 'react'
import { act, fireEvent, render, screen, cleanup } from '@testing-library/react'
import { create } from 'react-test-renderer'

import Button from './button.component'

afterEach(cleanup)

describe('<Button /> tests', () => {
  it('should exists', () => {
    expect(Button).toBeDefined()
  })
  it('should trigger onClick prop', () => {
    // Given
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>Button name</Button>)

    // When
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /button name/i }))
    })

    // Then
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should render button color variations', () => {
    // Given
    render(
      <Button
        onClick={() => {}}
        backgroundColor="blue"
        color="white"
      >
        Button name
      </Button>
    )

    // When
    const button = screen.getByRole('button', { name: /button name/i })

    // Then
    expect(button).toHaveStyle('background-color: blue')
    expect(button).toHaveStyle('color: white')
  })

  it('should render correctly the snapshot', () => {
    const component = create(
      <Button 
        color="white" 
        backgroundColor="red"
        onClick={() => {}}
      >
        Button name
      </Button>
    )

    component.toJSON()

    expect(component).toMatchSnapshot()
  })
})