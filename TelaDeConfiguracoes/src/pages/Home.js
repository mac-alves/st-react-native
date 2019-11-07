import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { Avatar } from 'react-native-elements';

export default class Home extends Component {
    
    static navigationOptions = {
        header:null
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
                        {key:4, title:'Documentos', icon:'print', navi:'Login'},
                        {key:5, title:'Serviços', icon:'print', navi:'Login'},
                        {key:6, title:'', icon:'', navi:'Login'},
                    ],
                    [
                        {key:4, title:'', icon:'', navi:'Login'},
                        {key:5, title:'', icon:'', navi:'Login'},
                        {key:6, title:'', icon:'', navi:'Login'},
                    ]                
                ]
            ]
        };
    }

    render () {
        return (
            <View style={styles.container} >
                <View style={styles.logo} >
                    <Image style={styles.logoImage} source={require('../../assets/images/CEUMA.png')} />
                </View>
                
                    <View style={styles.menu} >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                            {this.state.views.map((abas, key)=>{
                                return (<View key={key} style={styles.view} >
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
        justifyContent:'center'
    },  
    logo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoImage:{
        width:190,
        height:120
    },
    menu:{
        flex:2,
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
        justifyContent:'space-around',
        alignItems:'center',
        margin:5
    },
    iconMenu:{
        backgroundColor:"rgba(255, 255, 255, 1.0)",
    },
    campMenu:{
        justifyContent:'center'
    },
    titleMenu:{
        textAlign:'center',
        color:"#fff",
        fontSize:14
    }
});

/**
 * <ScrollView horizontal={true} style={styles.scroll} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
 */