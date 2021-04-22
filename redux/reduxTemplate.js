// import { StrictMode } from "react"
// import ReactDOM from "react-dom"
// import { createStore } from "redux"
// import { Provider } from "react-redux"
// import App from "./App"
// function fs(state = { x: 7, y: 1 }, action) {
//   console.log("kjaskfjkdjkd", action)
//   switch (action.type) {
//     case "INC":
//       return { x: state.x + action.payload }
//     case "DEC":
//       return { x: state.x - action.payload }
//     default:
//       return state
//   }
// }
// const rootElement = document.getElementById("root")
// const state = createStore(fs)
// ReactDOM.render(
//   <Provider store={state}>
//     <App />
//   </Provider>,
//   rootElement
// )
//////////////////////////////////////////////////////////////////////
// import { Component } from "react"
// import "./styles.css"
// import { connect } from "react-redux"
// class App extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div className='App'>
//         <h1>{this.props.x}</h1>
//         <button onClick={() => this.props.inc(3)}>inc</button>
//         <button onClick={() => this.props.dec()}>dec</button>
//       </div>
//     )
//   }
// }
// const inc = (a) => ({ type: "INC", payload: a })
// const dec = () => ({ type: "DEC", payload: 1 })
// const mapStateToProps = (state) => {
//   return {
//     x: state.x,
//     y: state.y,
//   }
// }
// const mapDispatchToProps = {
//   inc: inc,
//   dec: dec,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
