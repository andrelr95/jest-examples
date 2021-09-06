import React from 'react'

interface DashboardPageState {
  posts: Array<{ id: number, title: string }> | null,
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
        return res.json()
      })
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          posts: [...data]
        }))
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        this.setState(prevState => ({ ...prevState, isLoading: false }))
      })
  }

  render() {
    if (this.state.posts) {
      return (
        <>
          <h1>Posts</h1>
          <p>Temos {this.state.posts.length} posts.</p>
          {
            this.state.posts.map((post, index) => 
              <span 
                key={`post-${index}`}
                data-testid="card-post-test" 
                style={{ 
                  marginBottom: '14px', 
                  padding: '14px', 
                  border: '1px solid black', 
                  borderRadius: '8px', 
                  minHeight: '250px' 
                }}>
                Title: { post.title } 
              </span>
            )
          }
        </>
      )
    }

    return <span>...loading page</span>
  }
}

export default DashboardPage