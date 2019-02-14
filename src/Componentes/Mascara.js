import React, { Component } from 'react';
/* Libreria para las Mascaras*/
import InputMask from 'react-input-mask';

class Mascara extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: "",
            mascara: '9-999-999',
            contador: 0,
            DNI8: false
        }
    }

    onChange = (event) => {
        let evaluar = event.target.value;

        let longitud = evaluar.split('').filter(x => x !== "_" && x !== "-").length
        // console.log("longitud: ", evaluar.split('').filter(x => x != "_" && x != "-").length);
        this.setState({
            valor: event.target.value
        });
        
         /*Detectamos que tenia una longitud 8, y luego se borro, y cambiamos la Mascara a 7 digitos*/
        if(this.state.DNI8 && longitud <= 7){
            this.setState({
                mascara: '9-999-999',
                DNI8: false
            });
        }
    }

    handleKeyDown = (e) => {
        const { valor } = this.state;
        let longitud = valor.split('').filter(x => x !== "_" && x !== "-").length

        if (longitud === 7) {
            this.setState({
                mascara: '99-999-999',
                DNI8:true
            });
        }
    }

    render() {
        
        return (
            
            <div>
                <h1>Hola</h1>
                <InputMask {...this.props}
                    mask={this.state.mascara}
                    maskChar="_"
                    placeholder="Ingrese DNI"
                    onChange={this.onChange}
                    onKeyDown={this.handleKeyDown}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.valor}
                />
                <InputMask
                    mask={this.state.mascara}
                    defaultValue="13-02-2019"
                />
                <InputMask
                    mask="99/99/9999"
                    placeholder="Ingrese Fecha"
                />
                {console.log("Fuera DNI: ", this.state.valor)}
            </div>

        )
    }
}

export default Mascara;