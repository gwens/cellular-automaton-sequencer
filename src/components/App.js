import React from 'react'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello, RxJS</h1>
        <img src={require("../images/hello.jpg")} />
      </React.Fragment>
    )
  }
}

export default App;
