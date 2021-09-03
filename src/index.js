import React from 'react'
import ReactDOM from 'react-dom'
import "semantic-ui-css/semantic.min.css"
import { Segment } from 'semantic-ui-react'
import "./App.css"
import SeasonDisplay from './SeasonDisplay'
import SeasonsLoader from './SeasonLoader'

class App extends React.Component {
  state = {
    userLat: null,
    errorMsg: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({userLat: position.coords.latitude}),
      err => this.setState({errorMsg: err.message})
    )
  }

  componentDidUpdate() {
    console.log("Component was rerendered")
  }

  renderContent() {
    if ( this.state.errorMsg && !this.state.userLat ) {
      return (
        <Segment className='seasonDisplay'>
          <div className="alert alert--error">{this.state.errorMsg}</div>
        </Segment>
      )
    }

    if ( !this.state.errorMsg && this.state.userLat ) {
      return (
        <SeasonDisplay lat={this.state.userLat} />
      )
    }

    return (
      <SeasonsLoader displaySize="big" msg="Please allow location request" />
    )
  }

  render() {
    return (
      <div className="app">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))