import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      ultimo: null
    };

    this.state.botao = 'INICIAR';
    this.timer = null;
    this.Iniciar = this.Iniciar.bind(this);
    this.Limpar = this.Limpar.bind(this);

  }

  Iniciar(){
    
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'INICIAR'})
    }else {
      this.setState({botao: 'PARAR'})
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
    }, 100);
  }
  }

  Limpar(){
    if(this.timer === null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ultimo: this.state.numero});
      this.setState({numero: 0});
      this.setState({botao: 'INICIAR'});
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <Image
        source = {require('./img/Cronometro2.png')}
        style = {styles.cro}       
        />

        <Text style = {styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style = {styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.Iniciar}>
          <Text style={styles.btnText}>{this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.Limpar}>
          <Text style={styles.btnText}>LIMPAR</Text>
        </TouchableOpacity>

        </View>

        <View style={styles.areaUlt}>
          <Text style={styles.ultText}>{this.state.ultimo > 0 ? 'Ultimo Tempo: ' + this.state.ultimo.toFixed(2) : ''}</Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  cro:{
    alignSelf: 'center',
    top: 200,
  },
  timer:{
    color: 'white',
    textAlign: 'center',
    top: 230,
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnArea:{
    alignSelf: 'center',
    top: 270,
    flexDirection: 'row'
  },
  btn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 17,
    height: 40,
    borderRadius: 9,
  },
  ultText:{
    color: 'white',
    top: 300,
    left: 30,
    fontSize: 18,
  },
});