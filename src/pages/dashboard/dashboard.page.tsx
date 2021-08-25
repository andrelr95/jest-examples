import React from 'react'

interface DashboardPageState {
  posts: any,
  isLoading: boolean
}
class DashboardPage extends React.Component<{}, DashboardPageState> {

  constructor(props: any) {
    super(props);
    this.state = {
      posts: null,
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState(prevState => ({ ...prevState, isLoading: true }))
    fetch('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(res => {
        console.log('1 then', { res })
        return res.json()
      })
      .then(data => {
        console.log('2 then', { data })
        this.setState({
            isLoading: false,
            posts: { ...data }
        })
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        this.setState(prevState => ({ ...prevState, isLoading: false }))
      })
  }


  render() {
    if (this.state.isLoading) {
      return <span>...loading page</span>
    }
    return <span>DASHBOARD</span>
  }
}

export default DashboardPage