import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <CodeExamples />        

      </header>
    </div>
  );
}

class CodeExamples extends Component {
  constructor() {
    super()
    this.state = {toggleExamples: true}
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleExamples()}>Toggle Examples</button>
        {this.getExamples()}
      </div>
    )
  }

  getExamples() {
    if (this.state.toggleExamples) {
      return (
        <span>
          <Hello 
            name="Cesar" 
            toggle
            arreglo={[2,4,8]} 
            objectWithInfo={{key1:"This is ", key2:"a text"}}
            formula={(p) => p * 2}
            someState={<EjemploState/>}
          />

          <p>Esto sería un contador: {<Contador contadorInitial={7} />}</p>

          <Logo/>

          <Paragraph/>
        </span>
      )
    } else return <span />
  }

  toggleExamples() {
    console.log("toggle")
    this.setState({toggleExamples: !this.state.toggleExamples})
  }
}

class Hello extends Component {
  
  // constructor() {
  //   super()
  //   this.state = {contador: 1}
  // }

  state = {contador: 1}

  render() {
    const { toggle, name, arreglo, objectWithInfo, someState } = this.props

    const subtexto = toggle ? name : "You"
    var mappedArray = ""
    if (arreglo) {
       mappedArray = arreglo.map(this.props.formula)
    }

    return <div>
            <h1>Hello, {subtexto}</h1>
            { toggle ?
            <p>Your numbers today: {mappedArray.join(", ")}</p> : ""
            }
            <p>{objectWithInfo.key1}{objectWithInfo.key2}</p>
            <p>this is a state val: {this.state.contador}</p>
            <p>...and this is another state val: {someState}</p>
          </div>
  }
}

Hello.defaultProps = {
  name: "varón"
}

class EjemploState extends Component {
  state = {contador2: 11}

  render() {
    return <span>{this.state.contador2}</span>
  }
}

class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInitial}
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }
  
  render() {
    return <span>{this.state.contador}</span>
  }
}

Contador.defaultProps = {
  contadorInitial: 0
}

const Logo = (props) => <img src={logo} className="App-logo" alt="logo" />

function Paragraph() {
  return <p>Weee</p>
}

export default App;
