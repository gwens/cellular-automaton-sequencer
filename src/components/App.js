import React from 'react'
import { Subject } from 'rxjs'
import CellularAutomaton from './CellularAutomaton'

class App extends React.Component {
  constructor() {
    super()
    this.trigger$ = new Subject()
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId)
  }

  tick() {
    this.trigger$.next()
  }

  render() {
    return (
      <CellularAutomaton
        cellNum={16}
        cellSize={50}
        ruleSet={225}
        trigger$={this.trigger$}
        />
    )
  }
}

export default App;
