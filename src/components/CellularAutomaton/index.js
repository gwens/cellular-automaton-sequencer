import React from 'react'

class CellularAutomaton extends React.Component {
  constructor(props) {
    super(props)
    const initArray = new Array(props.cellNum).fill('0')
    initArray[Math.round(props.cellNum/2)] = '1'
    this.state = {
      cells: initArray,
    }
    this.createNextGeneration = this.createNextGeneration.bind(this)
  }

  componentDidMount() {
    this.props.trigger$.subscribe(this.createNextGeneration)
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
              <div
                key={index}
                className={ this.state.cells[parseInt(index)] === '1' ? 'filled' : 'empty'}
                style={{ height: this.props.cellSize, width: this.props.cellSize }}
                >
              </div>
        ))}
      </React.Fragment>
    )
  }
}

export default CellularAutomaton
