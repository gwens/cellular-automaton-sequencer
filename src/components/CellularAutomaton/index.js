import React from 'react'
import { integerToBinaryPartials } from '../../utils/helpers'

class CellularAutomaton extends React.Component {
  constructor(props) {
    super(props)
    if (
        typeof(props.ruleSet) !== 'number' ||
        props.ruleSet < 0 ||
        props.ruleSet > 255
      ) throw new Error('The rule set must be an integer between 0 and 255')
    const getRule = (index) => integerToBinaryPartials(props.ruleSet)[index] || '0'
    this.rules = {
      '111': getRule(0),
      '110': getRule(1),
      '101': getRule(2),
      '100': getRule(3),
      '011': getRule(4),
      '010': getRule(5),
      '001': getRule(6),
      '000': getRule(7),
    }
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
    let nextGen = []
    this.state.cells.map((cell, index) => {
      const nearestNeighbours = this.state.cells[((index-1 + this.state.cells.length) % this.state.cells.length)] +
        this.state.cells[index] +
        this.state.cells[((index+1) % this.state.cells.length)]
      const newValue = this.rules[nearestNeighbours]
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
