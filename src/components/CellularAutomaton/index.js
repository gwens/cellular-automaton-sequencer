import React from 'react'

class CellularAutomaton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: ['0','0','0','0','1','0','0','0','0'],
    }
  }

  createNextGeneration() {
    const ruleSet = {
      '111': '0',
      '110': '1',
      '101': '0',
      '100': '1',
      '011': '1',
      '010': '0',
      '001': '1',
      '000': '0',
    }
    let nextGen = []
    this.state.cells.map((cell, index) => {
      const nearestNeighbours = this.state.cells[((index-1 + this.state.cells.length) % this.state.cells.length)] +
        this.state.cells[index] +
        this.state.cells[((index+1) % this.state.cells.length)]
      const newValue = ruleSet[nearestNeighbours]
      nextGen[index] = newValue
    })
    this.setState({ cells: nextGen })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.cells.map((cell, index) => (
              <div key={index} className={ this.state.cells[parseInt(index)] === '1' ? 'filled' : 'empty'}></div>
        ))}
        <button onClick={() => this.createNextGeneration()}>Next Generation</button>
      </React.Fragment>
    )
  }
}

export default CellularAutomaton
