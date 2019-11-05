import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TextInput, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Financeiro extends Component {
  
    static navigationOptions = {
        title:'Financeiro'
    }

    constructor(props){
        super(props)
        this.state = {
            salario:200,
            banco:[
                {key:0, banco:0, name:"", ncart:"", vali:"", cod:""}
            ],
            bancos:[
                'Banco do Brasil', 'Santander', 'Bradesco', 'Caixa', 'Amazonas'
            ],
            qtCartoes:1,
            camps:[]
        };

        this.plusCart = this.plusCart.bind(this);
        this.minusCart = this.minusCart.bind(this);
        this.setbanco = this.setbanco.bind(this);
        this.setInfoCart = this.setInfoCart.bind(this);
    }

    plusCart(){
        let s = this.state;
        if (s.qtCartoes >= 3) {
            s.qtCartoes = s.qtCartoes;
        } else {
            s.banco.push({key:s.qtCartoes, banco:0});
            s.qtCartoes = s.qtCartoes+1;
        }

        this.setState(s, () => {
            console.log(s.banco);
        });        
    }

    minusCart(){
        let s = this.state;
        if (s.qtCartoes <= 1) {
            s.qtCartoes = s.qtCartoes;
        } else {
            s.qtCartoes = s.qtCartoes-1;
            s.banco.splice(s.camps.length-1, 1);
        }

        this.setState(s); 
    }

    setbanco(ind, value){
        let s = this.state;
        s.banco[ind] = {key:s.qtCartoes, banco:value};

        this.setState(s, () => {
            console.log(s.banco);
        });
        
    }

    setInfoCart(ind, type, value){
        let s = this.state;
        switch (type) {
            case 'name':
                s.banco[ind].name = value;
                break;

            case 'ncart':
                s.banco[ind].ncart = value;
                break;
            
            case 'vali':
                s.banco[ind].vali = value;
                break;

            case 'cod':
                s.banco[ind].cod = value;
                break;
        
            default:
                break;
        }

        this.setState(s, () => {
            console.log(s.banco);
        });
    }

    render() {

        return(
            <View style={styles.container} >
                <View style={[styles.box, styles.salario]}>
                    <Text style={styles.title}>Salario: {this.state.salario.toFixed(2)}</Text>
                    <Slider style={styles.campSalario} value={this.state.salario} minimumValue={200} maximumValue={2000} onValueChange={(v)=>this.setState({salario:v})} />
                </View>

                <View style={[styles.box, styles.cartoes]}>
                    <Text style={styles.title}>Quantidade de Cartões</Text>
                    <View style={[styles.box, styles.seCartoes]} >
                        <Button buttonStyle={styles.plusMinus} icon={<Icon name='minus' size={15} color="white" />} onPress={()=>this.minusCart()} />
                        <Text style={styles.qtcart} >{this.state.qtCartoes}</Text>
                        <Button buttonStyle={styles.plusMinus} icon={<Icon name='plus' size={15} color="white" />} onPress={()=>this.plusCart()} />
                    </View>
                </View>
                <ScrollView>
                {this.state.banco.map((camp, key) => {
                    let bancItem = this.state.bancos.map((v, k)=>{
                        return <Picker.Item key={k} value={k} label={v} />;
                    });
                    
                    return (
                        
                            <View key={key} style={[styles.box, styles.cartBanco]}>
                                <View style={[styles.box, styles.banco]} >
                                    <Text style={styles.title}>Banco</Text>
                                    <Picker style={styles.campBanco} selectedValue={camp.banco} onValueChange={(itemValue, itemIndex)=>{this.setbanco(key, itemValue)}} >
                                        { bancItem }
                                    </Picker>
                                </View>
                                <View style={styles.infoCart}>
                                    <View style={styles.nameProp} >
                                        <Text style={styles.title}>Nome Proprietario</Text>
                                        <TextInput style={styles.input} onChangeText={(t)=>this.setInfoCart(key, 'name', t)} />
                                    </View>
                                    <View style={styles.nameProp} >
                                        <Text style={styles.title}>Numero Cartão</Text>
                                        <TextInput style={styles.input} onChangeText={(t)=>this.setInfoCart(key, 'ncart', t)} />
                                    </View>
                                    <View style={styles.valiCod} >
                                        <View style={styles.vaco} >
                                            <Text style={styles.title}>Validade</Text>
                                            <TextInput style={[styles.input, styles.inputVaco]} onChangeText={(t)=>this.setInfoCart(key, 'vali', t)} />
                                        </View>
                                        <View style={styles.vaco} >
                                            <Text style={styles.title}>Codi.Segurança</Text>
                                            <TextInput style={[styles.input, styles.inputVaco]} onChangeText={(t)=>this.setInfoCart(key, 'cod', t)} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                    )               
                })}
                </ScrollView>
                
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
        width:380,

    },
    title:{
        fontSize:18,
        color:"#999",
        textAlignVertical:'center'
    },
    cartBanco:{
        flex:null
    },
    banco:{
        flex:null,
        justifyContent:'space-between',
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'#ccc'
    },
    campBanco:{
        width:220
    },
    salario:{
        flex:null
    },
    cartoes:{
        flex:null,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    seCartoes:{
        flex:null,
        width:100,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },  
    qtcart:{
        margin:10,
        fontSize:20
    },
    plusMinus:{
        backgroundColor:'#18a15e'
    },
    infoCart:{
        flex:null
    },
    nameProp:{
        paddingLeft:7,
        paddingRight:7,
        marginBottom:10
    },
    input:{
        height:40,
        borderWidth:2,
        borderColor:"#ccc",
        paddingRight:10,
        borderRadius:5,
        paddingLeft:12
    },
    valiCod:{
        flex:null,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',paddingLeft:9,
        paddingRight:9
    },
    vaco:{
        width:150,
        alignItems:'center',
        marginBottom:20
    },
    inputVaco:{
        width:150,
        height:40,
        textAlign:'center'
    }
});