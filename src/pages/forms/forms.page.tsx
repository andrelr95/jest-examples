import React from 'react'

import Button from '../../components/button/button.component';

const styles: React.CSSProperties = { 
  display: 'flex', 
  flexDirection: 'column', 
  margin: '7px 0', 
  padding: '14px', 
  border: '1px solid black', 
  borderRadius: '8px' 
}

interface FormsPageState {
  numberInput: string
  moneyInput: number 
  showComponent: boolean
}
class FormsPage extends React.Component<{}, FormsPageState> {

  constructor(props: any) {
    super(props);
    this.state = {
      numberInput: '',
      moneyInput: 0,
      showComponent: false
    }
  }

  onChangeInput(key: string, value: string) {
    this.setState(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  render() {
    return (
        <>
          <h1>FORMS PAGE</h1>
          <div 
            style={styles}
          >
            <label htmlFor="input-number">
              Input de número
            </label>
            <input 
              type="text" 
              id="input-number" 
              value={this.state.numberInput} 
              onChange={
                (e: React.FormEvent<HTMLInputElement>) => {
                  const { currentTarget: { value } } = e
                  let onlyNumbersValue = value.replace(/\D/gm, '')
                  this.onChangeInput('numberInput', onlyNumbersValue )
                }
              }
            />
          </div>

          <Button
            onClick={
              () => 
                this.setState(prevState => (
                  { ...prevState, showComponent: !prevState.showComponent }
                )
              )
            }>
            Mostrar componentes
          </Button>

          {this.state.showComponent && (
            <>
              <div
                data-testid="card-id-example"
                style={styles}
              >
                Card 1
              </div>
              <div
                data-testid="card-id-example"
                style={styles}
              >
                Card 2
              </div>
              <div
                data-testid="card-id-example"
                style={styles}
              >
                Card 3
              </div>
            </>
          )}
        </>
      )
  }
}

export default FormsPage