import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import cars from './data/cars.json';
import FormControlado from './Forms';

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
    this.state = {toggleExamplesSeccion14: false,
                  toggleExamplesSeccionList: false,
                  toggleExamplesSectionEvents: false,
                  mouseX: 0, mouseY: 0}
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleExamples14}>Toggle Seccion 1 a 4</button>
        {this.getExamplesSeccion14()}
        <div>
          <button onClick={() => this.toggleExamplesList()}>Toggle list section</button>
          {this.getExamplesListSeccion()}
        </div>
        <button onClick={() => this.toggleEventExamples()}>Toggle event section</button>
        {this.getExamplesSeccionEvent()}
        <div>
          {this.getExamplesSeccion6()}
        </div>
      </div>
    )
  }

  getExamplesSeccion14() {
      return (
        <span>
            {this.state.toggleExamplesSeccion14 ? 
                <span>
                <Hello 
                  name="Cesar" 
                  toggle
                  arreglo={[2,4,8]} 
                  objectWithInfo={{key1:"This is ", key2:"a text"}}
                  formula={(p) => p * 2}
                  someState={<EjemploState/>}
                />

                <p>Esto sería un contador: {<Contador contadorInitial={7} active={this.state.toggleExamplesSeccion14}/>}</p>

                <Logo/>

                </span>
          : <span /> }
        </span>
      )
  }

  getExamplesListSeccion() {
    if (this.state.toggleExamplesSeccionList) {
      return (
          <span>
            <Paragraph/>
            <EjemploLista />
          </span>
        )
      }
  }

  getExamplesSeccionEvent() {
    if (this.state.toggleExamplesSectionEvents) {
      return (
        <div
          onMouseMove={this.handleMouseMove}
          style={{border: '1px solid #000', marginTop: 20, padding: 10 }}>
            <p>Mouse Position: {this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      )
    }
  }

  getExamplesSeccion6() {
    return (
        <span>
            <FormControlado/>
        </span>
      )
  }

// This is the best and tidy way to link the caller component with the event handler
  toggleExamples14 = () => {
    console.log("toggle 14")
    this.setState({toggleExamplesSeccion14: !this.state.toggleExamplesSeccion14})
  }
  
  toggleExamplesList() {
    console.log("toggle List")
    this.setState({toggleExamplesSeccionList: !this.state.toggleExamplesSeccionList})
  }

  toggleEventExamples() {
    console.log("toggle events")
    this.setState({toggleExamplesSectionEvents: !this.state.toggleExamplesSectionEvents})
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }
}

// Seccion 1 a 4
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
    const myInterval =
      setInterval(() => {
        this.setState({ contador: this.state.contador + 1 })
      }, 1000)
    this.state = { contador: this.props.contadorInitial , myInterval: myInterval}
  }
  
  render() {
    return <span>{this.state.contador}</span>
  }

  componentWillUnmount() {
    clearInterval(this.state.myInterval)
  }
}

Contador.defaultProps = {
  contadorInitial: 0
}

const Logo = (props) => <img src={logo} className="App-logo" alt="logo" />

function Paragraph() {
  return <p>Acá abajo hay una lista</p>
}

// Sección 5
class EjemploLista extends Component {
  render () {
    return <ul>
      {cars.map( car =>
        <CarItem key={car.id} car={car}/>
      )}
    </ul>
  }
}

class CarItem extends Component {
  render() {
    const {model, brand} = this.props.car
    return <li>
            <p><strong>Modelo: </strong>{model}</p>
            <p><strong>Marca: </strong>{brand}</p>
          </li>
  }
}

export default App;
