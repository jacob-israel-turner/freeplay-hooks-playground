import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

function Counter () {
  const [count, updateCount] = useState(0)
  const [time, updateTime] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  }, [count])

  useEffect(() => {
    const t = setInterval(() => {
      updateTime(t => t + 1)
    }, 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <p>You have been here {time} seconds!</p>
      <p>You clicked the counter {count} times!</p>
      <button onClick={() => updateCount(count + 1)}>Click!</ button>
    </div>
  )
}

// class Counter extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//     this.updateDocTitle = this.updateDocTitle.bind(this)
//   }
//
//   updateDocTitle () {
//     document.title = `Clicked ${this.state.count} times`
//   }
//
//   componentDidMount() {
//     this.updateDocTitle()
//   }
//
//   componentDidUpdate() {
//     this.updateDocTitle()
//   }
//
//   handleClick () {
//     this.setState({ count: this.state.count + 1 })
//   }
//
//   render () {
//     return (
//       <div>
//         <p>You clicked the counter {this.state.count} times!</p>
//         <button onClick={this.handleClick}>Click!</ button>
//       </div>
//     )
//   }
// }

export default App;
