import styles from '../styles/Home.module.css'
import Calculator from './calculator'
import ReactTooltip from 'react-tooltip';
import React from "react"

export default function Home() {

  return (
    <div className={styles.container}>
      <CalculatorContainer />
    </div>
  )
}

class CalculatorContainer extends React.Component {
  state = {
    hoveredFragment: null
  }
  onHoveredFragmentChanged = (frag) => {
    this.setState({ hoveredFragment: frag })
  }

  render() {
    return (
      <div>
        <ReactTooltip place="top" type="dark" effect="solid" id="fragment-info" getContent={() =>
          this.state.hoveredFragment ?
            <div className="text-center">
              <h3>{this.state.hoveredFragment.name}</h3>
              <p>{this.state.hoveredFragment.description}</p>
              {Array.from(this.state.hoveredFragment.setEffects.values()).map(se => <img key={se.name} src={se.imageUrl} height="40px" className="set-mini" />)}

            </div> : <div />
        } />
        <Calculator onHoveredFragmentChanged={this.onHoveredFragmentChanged} />
      </div>
    )
  }
}