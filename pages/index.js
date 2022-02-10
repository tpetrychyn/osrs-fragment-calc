import styles from '../styles/Home.module.css'
import Calculator from './calculator'
import React from "react"
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

export default function Home() {

  return (
    <div className={styles.container}>
      <CalculatorContainer />
    </div>
  )
}

class CalculatorContainer extends React.Component {
  state = {
    hoveredFragment: null,
    hoveredSet: null
  }

  onHoveredFragmentChanged = (frag) => {
    this.setState({ hoveredFragment: frag })
  }

  onHoveredSetChanged = (set) => {
    this.setState({ hoveredSet: set })
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
        <ReactTooltip place="top" type="dark" effect="solid" id="set-info" delayShow={500} getContent={() =>
          this.state.hoveredSet ?
            <div className="text-center">
              <h3>{this.state.hoveredSet.name}</h3>
              <p dangerouslySetInnerHTML={{__html: this.state.hoveredSet.description}}></p>
              {Array.from(this.state.hoveredSet.fragments.values()).map(fr => <img key={fr.name} src={fr.imageUrl} height="30px" className="set-mini" />)}

            </div> : <div />
        } />
        <Calculator onHoveredFragmentChanged={this.onHoveredFragmentChanged} onHoveredSetChanged={this.onHoveredSetChanged} />
      </div>
    )
  }
}