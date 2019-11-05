import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Picker, Switch, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';

import { Button } from 'react-native-elements';

export default class Pessoal extends Component {
  
    static navigationOptions = {
        title:'Pessoal'
    }

    constructor(props){
        super(props)
        this.state = {
            nome:"",
            dia:0,
            mes:0,
            ano:60,
            sexo:0,
            altura:1.6,
            peso:40.0,
            doador:false,

            meses:[
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ]            
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
                <View style={[styles.box, styles.name]}>
                    <Text style={styles.title}>Nome</Text>
                    <TextInput style={styles.input} onChangeText={(t)=>this.setState({nome:t})} />
                </View>

                <View style={[styles.box, styles.date]}>
                    <Text style={styles.title}>Data de Nascimento</Text>
                    <View style={styles.data}>
                        <Picker style={styles.campData} selectedValue={this.state.dia} onValueChange={(itemValue, itemIndex)=>this.setState({dia:itemValue})} >
                            { diasItem }
                        </Picker>
                        
                        <Picker style={styles.campData} selectedValue={this.state.mes} onValueChange={(itemValue, itemIndex)=>this.setState({mes:itemValue})}  >
                            { mesesItem }
                        </Picker>
                        
                        <Picker style={styles.campData} selectedValue={this.state.ano} onValueChange={(itemValue, itemIndex)=>this.setState({ano:itemValue})} >
                            { anoItem }
                        </Picker>
                    </View>
                </View>

                <View style={[styles.box, styles.sexo]}>
                    <Text style={styles.title}>Sexo</Text>
                    <Picker style={styles.campSexo} selectedValue={this.state.sexo} onValueChange={(itemValue, itemIndex)=>this.setState({sexo:itemValue})} >
                        <Picker.Item key={0} value="0" label="Maculino" />
                        <Picker.Item key={1} value="1" label="Feminino" />
                    </Picker>
                </View>

                <View style={[styles.box, styles.altura]}>
                    <Text style={styles.title}>Altura: {this.state.altura.toFixed(2)}</Text>
                    <Slider style={styles.campAltura} value={this.state.altura} minimumValue={1} maximumValue={2.3} onValueChange={(v)=>this.setState({altura:v})} />
                </View>

                <View style={[styles.box, styles.peso]}>
                    <Text style={styles.title}>Peso: {this.state.peso.toFixed(2)}</Text>
                    <Slider style={styles.campPeso} value={this.state.peso} minimumValue={10} maximumValue={160} onValueChange={(v)=>this.setState({peso:v})} />
                </View>

                <View style={[styles.box, styles.doador]}>
                    <Text style={styles.title}>Doador de Orgãos</Text>
                    <Switch value={this.state.doador} onValueChange={(v)=>this.setState({doador:v})} />
                </View>

                <View style={styles.button} >
                    <Button ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ['#18a15e', '#0c8248'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        title="Enviar"
                        onPress={()=>this.props.navigation.navigate('Financeiro')}
                        buttonStyle={styles.button}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:20
    },
    box:{
        flex:1,
        margin:6,
        width:380
    },
    name:{
        flex:null
    },
    title:{
        fontSize:18,
        color:"#999",
        textAlignVertical:'center'
    },
    input:{
        flex:null,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"#999",
        paddingLeft:10
    },
    date:{
        flex:null
    },
    data:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    campData:{
        width:120
    },
    sexo:{
        flex:null,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    campSexo:{
        width:170
    },
    altura:{
        flex:null
    },
    peso:{
        flex:null
    },
    campAltura:{
        height:50
    },
    campPeso:{
        height:50
    },
    doador:{
        flex:null,
        flexDirection:'row',
        justifyContent:'space-between'
    }, 
    button:{
        marginTop:20,
        width:380
    }
});