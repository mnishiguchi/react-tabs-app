import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Tabs, Pane }  from './Tabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <Tabs index={0}>
            <Pane label="Tab 1">
              <div>
                The stretching story awakes the ten sabotage. On top of the bonus results the solid earth. Should whatever substitute parade hum? How can the ally listen?
              </div>
            </Pane>
            <Pane label="Tab 2">
              <div>
                Can the saga underline his jargon? The outline rots past an eyesight! When can a developed thief starve on top of a temper? A climbing crew hardens. When can a forbidden attorney orbit her crying beloved? A theological changeover spites a wrong fence.
              </div>
            </Pane>
            <Pane label="Tab 3">
              <div>
                The soup tacks the privileged roundabout. A paragraph inspects the quota. The chamber tailors whatever accumulated grandmother. The teenage strips away an airport over the permanent typewriter. The garden features a twisting trouser inside the riot.
              </div>
            </Pane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default App
