import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
    
    static navigationOptions = {
        headerLeft: () => {
            return (
                <View>
                    <Button buttonStyle={styles.drawerButon} icon={<Icon name="bars" size={35} color="#rgba(13, 75, 129, 1.0)" />} />
                </View>
            );
        },
        headerRight: () => {
            return (
                <View>
                    <Button buttonStyle={styles.drawerButon} icon={<Icon name="ellipsis-v" size={35} color="#rgba(13, 75, 129, 1.0)" />} />
                </View>
            );
        },
        headerTransparent:true,
    }

    constructor(props){
        super(props);
        this.state = {
            views:[
                [
                    [
                        {key:1, title:'Home', icon:'home', navi:'Pessoal'}, 
                        {key:2, title:'Biblioteca', icon:'book', navi:'Financeiro'}, 
                        {key:3,title:'Santander', icon:'bank', navi:'Home'}, 
                    ],
                    [
                        {key:1, title:'Home', icon:'home', navi:'Pessoal'}, 
                        {key:2, title:'Biblioteca', icon:'book', navi:'Financeiro'}, 
                        {key:3,title:'Santander', icon:'bank', navi:'Home'}, 
                    ],
                    [
                        {key:1, title:'Home', icon:'home', navi:'Pessoal'}, 
                        {key:2, title:'Biblioteca', icon:'book', navi:'Financeiro'}, 
                        {key:3,title:'Santander', icon:'bank', navi:'Home'}, 
                    ]                 
                ]
            ]
        };
        switch (this.state.views[0].length) {
            case 1:
                this.heightMenu = {flex:this.state.views[0].length - 1};
                break;
            case 2:
                this.heightMenu = {flex:this.state.views[0].length};
                break;
            case 3:
                this.heightMenu = {flex:this.state.views[0].length + 1};
                break;        
            default:
                this.heightMenu = {flex:this.state.views[0].length};
                break;
        }
    }

    render () {
        return (
            
            <View style={styles.container} >
                <View style={styles.logo} >
                    <Image style={styles.logoImage} source={require('../../assets/images/CEUMA.png')} />
                    <Text style={styles.nome} >Mauricio Alves</Text>
                    <Text style={styles.curso} >Engenharia da Computação</Text>
                </View>
                
                    <View style={[styles.menu, this.heightMenu]} >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                            {this.state.views.map((abas, key)=>{
                                return (<View key={key} style={[styles.view, this.heightMenu]} >
                                            {abas.map((row, key)=>{

                                                return (<View key={key} style={styles.menuRow} >
                                                            {row.map((item, key) => {
                                                                return( <View key={item.key} style={styles.campMenu} >
                                                                            <Avatar rounded size="large" icon={{name: item.icon, color: 'rgba(13, 75, 129, 1.0)', type: 'font-awesome'}} overlayContainerStyle={styles.iconMenu} onPress={()=>this.props.navigation.navigate(item.navi)} />
                                                                            <Text style={styles.titleMenu} >{item.title}</Text>
                                                                        </View>
                                                                    );
                                                            })}
                                                        </View>
                                                        );
                                            })}
                                        </View>
                                        );
                            })}
                        </ScrollView>             
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    view:{
        flex:1,
        paddingTop:10
    },  
    logo:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    logoImage:{
        width:190,
        height:120,
        marginBottom:10
    },
    nome:{
        fontSize:24,
        fontWeight:'bold',
        color:'#333'
    },
    menu:{
        flex:4,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"rgba(13, 75, 129, 1.0)",
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    menuRow:{
        flexDirection:'row',
        height:100,
        width:400,
        alignItems:'center',
        margin:5,
        marginBottom:10
    },
    iconMenu:{
        backgroundColor:"rgba(255, 255, 255, 1.0)",
    },
    campMenu:{
        width:130,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:2
    },
    titleMenu:{
        textAlign:'center',
        color:"#fff",
        fontSize:14
    },
    drawerButon:{
        backgroundColor:'transparent',
        margin:6
    }
});