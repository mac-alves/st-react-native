import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput, Text, Picker } from 'react-native';

export default class Pessoal extends Component {
  
    static navigationOptions = {
        title:'Pessoal'
    }

    constructor(props){
        super(props)
        this.state = {
            dia:0,
            mes:0,
            meses:[
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ],
            ano:60
        };

        this.geraDias = this.geraDias.bind(this);
        this.geraAno = this.geraAno.bind(this);
    }

    geraDias(){
        let d = [];
        for(let i = 1; i <= 31; i++){
           d.push(String(i));
        }
        return d;
    }

    geraAno(){
        let a = [];
        for(let i = 1940; i <= 2050; i++){
           a.push(String(i));
        }
        return a;
    }

    render() {

        let diasItem = this.geraDias().map((v, k)=>{
            return <Picker.Item key={k} value={k} label={v} />;
        });

        let mesesItem = this.state.meses.map((v, k)=>{
            return <Picker.Item key={k} value={k} label={v} />;
        });

        let anoItem = this.geraAno().map((v, k)=>{
            return <Picker.Item key={k} value={k} label={v} />;
        });

        return(
            <View style={styles.container} >
                <View style={styles.box}>
                    <Text style={styles.title}>Nome</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.box}>
                    <Text style={styles.title}>Data de Nascimento</Text>
                    <View style={styles.data}>
                        <Picker style={styles.camp} selectedValue={this.state.dia} onValueChange={(itemValue, itemIndex)=>this.setState({dia:itemValue})} >
                            { diasItem }
                        </Picker>
                        
                        <Picker style={styles.camp} selectedValue={this.state.mes} onValueChange={(itemValue, itemIndex)=>this.setState({mes:itemValue})}  >
                            { mesesItem }
                        </Picker>
                        
                        <Picker style={styles.camp} selectedValue={this.state.ano} onValueChange={(itemValue, itemIndex)=>this.setState({ano:itemValue})} >
                            { anoItem }
                        </Picker>
                    </View>
                </View>
                <Button title="Login" onPress={()=>this.props.navigation.navigate('Financeiro')} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:20
    },
    box:{
        margin:10
    },
    title:{
        fontSize:18,
        color:"#999",
        width:380
    },
    input:{
        width:380,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"#999",
        paddingLeft:10
    },
    data:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    camp:{
        width:120
    }
});

/*
dados pessois
  nome textInput
  data nascimento piker
  sexo piker
  altura slider 1m a 3m 
  Peso slider 10kg a 300kd
  doador de orgão Switch
*/