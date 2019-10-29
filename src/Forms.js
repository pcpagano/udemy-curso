import React,{Component} from "react";

// Aproximación Nativa
export class FormDescontrolado extends Component {
    state = {toggleEnviar: true}
    
    handleClick = (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const twitter = this.inputTwitter.value
        console.log({name, twitter})
    }

    handleChange = () => {
        this.setState({toggleEnviar: !this.state.toggleEnviar})
    }

    render() {
        return (
            <div>
                <h4>Formulario</h4>
                <form>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce tu nombre'
                            />
                    </p>
                    <p>
                        <label>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu cuenta de Twitter'
                            // no recomendado, no es declarativo
                            ref={inputElement => this.inputTwitter = inputElement} 
                            />
                    </p>
                    <button onClick={this.handleClick} disabled={this.state.toggleEnviar}>Enviar</button>
                    <p>
                        <input type='checkbox'
                            id='terms'
                            name='termsConditions'
                            onChange={this.handleChange}
                            />
                        <label>Términos y Condiciones</label>
                    </p>
                </form>
            </div>
        )
    }
}

export default class FormControlado extends Component {
    constructor(){
        super()
        this.state = {
            inputName: '',
            inputTwitter: '',
            inputTerms: false,
            toggleEnviar: true
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.inputName + ', ' + this.state.inputTwitter)
    }

    handleChange = (e) => {
        this.setState({inputTerms: e.target.checked})
        this.setState({toggleEnviar: !e.target.checked})
    }

    render() {
        return (
            <CustomBorder>
                <h4>Formulario</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce tu nombre'
                            onChange={e => this.setState({inputName: e.target.value})}
                            value={this.state.inputName}
                            />
                    </p>
                    <p>
                        <label>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu cuenta de Twitter'
                            onChange={e => this.setState({inputTwitter: e.target.value})}
                            value={this.state.inputTwitter}
                            />
                    </p>
                    <button disabled={this.state.toggleEnviar}>Enviar</button>
                    <p>
                        <input type='checkbox'
                            id='terms'
                            name='termsConditions'
                            onChange={this.handleChange}
                            checked={this.state.inputTerms}
                            />
                        <label onClick={() => { this.setState({inputTerms: !this.state.inputTerms})
                                            }}>
                            Términos y Condiciones
                        </label>
                    </p>
                </form>
            </CustomBorder>
        )
    }
}

export class CustomBorder extends Component {
    render() {
        return (
            <div style={{border: '1px solid #000', marginTop: 20, padding: 10 }}>
                {this.props.children}
            </div>
        )
    }
}