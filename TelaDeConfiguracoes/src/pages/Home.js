import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { Avatar } from 'react-native-elements';

export default class Home extends Component {
    
    static navigationOptions = {
        header:null
    }

    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <View style={styles.container} >
                <View style={styles.logo} >
                    <Image style={styles.logoImage} source={require('../../assets/images/CEUMA.png')} />
                </View>
                
                    <View style={styles.menu} >
                        <ScrollView horizontal={true} style={styles.scroll} showsHorizontalScrollIndicator={false} pagingEnabled={true} >
                            <View style={styles.view} >
                                <View style={styles.menuRow} >
                                    <View style={styles.campMenu} >
                                        <Avatar rounded size="large" icon={{name: 'home', color: 'rgba(13, 75, 129, 1.0)', type: 'font-awesome'}} overlayContainerStyle={styles.iconMenu} onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                        <Text style={styles.titleMenu} >Home</Text>
                                    </View>
                                    <View style={styles.campMenu} >
                                        <Avatar rounded size="large" icon={{name: 'book', color: 'rgba(13, 75, 129, 1.0)', type: 'font-awesome'}} overlayContainerStyle={styles.iconMenu} onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                        <Text style={styles.titleMenu} >Biblioteca</Text>
                                    </View>
                                    <View style={styles.campMenu} >
                                        <Avatar rounded size="large" icon={{name: 'bank', color: 'rgba(13, 75, 129, 1.0)', type: 'font-awesome'}} overlayContainerStyle={styles.iconMenu} onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                        <Text style={styles.titleMenu} >Santander</Text>
                                    </View>
                                </View>
                                <View style={styles.menuRow} >
                                    <Avatar rounded size="large" icon={{name: 'bank', type: 'font-awesome'}}  onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                    <Avatar rounded size="large" icon={{name: 'book', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                    <Avatar rounded size="large" icon={{name: 'home', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                </View>
                                <View style={styles.menuRow} >
                                    <Avatar rounded size="large" icon={{name: 'home', type: 'font-awesome'}}  onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                    <Avatar rounded size="large" icon={{name: 'book', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                    <Avatar rounded size="large" icon={{name: 'home', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                </View>
                            </View>
                            <View style={styles.view} >
                                <View style={styles.menuRow} >
                                    <View style={styles.campMenu} >
                                        <Avatar rounded size="large" icon={{name: 'home', color: 'rgba(13, 75, 129, 1.0)', type: 'font-awesome'}} overlayContainerStyle={styles.iconMenu} onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                        <Text style={styles.titleMenu} >Home</Text>
                                    </View>
                                    <View style={styles.campMenu} >
                                        <Avatar rounded size="large" icon={{name: 'book', color: 'rgba(13, 75, 129, 1.0)', type: 'font-awesome'}} overlayContainerStyle={styles.iconMenu} onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                        <Text style={styles.titleMenu} >Biblioteca</Text>
                                    </View>
                                    <View style={styles.campMenu} >
                                        <Avatar rounded size="large" icon={{name: 'bank', color: 'rgba(13, 75, 129, 1.0)', type: 'font-awesome'}} overlayContainerStyle={styles.iconMenu} onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                        <Text style={styles.titleMenu} >Santander</Text>
                                    </View>
                                </View>
                                <View style={styles.menuRow} >
                                    <Avatar rounded size="large" icon={{name: 'bank', type: 'font-awesome'}}  onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                    <Avatar rounded size="large" icon={{name: 'book', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                    <Avatar rounded size="large" icon={{name: 'home', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                </View>
                                <View style={styles.menuRow} >
                                    <Avatar rounded size="large" icon={{name: 'home', type: 'font-awesome'}}  onPress={()=>this.props.navigation.navigate('Pessoal')} />
                                    <Avatar rounded size="large" icon={{name: 'book', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                    <Avatar rounded size="large" icon={{name: 'home', type: 'font-awesome'}} onPress={() => console.log("Works!")} />
                                </View>
                            </View>
                            
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
    scroll:{
    },
    view:{
        flex:1,
        paddingTop:40,
        height:400,
        width:400
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
        justifyContent:'space-around',
        alignItems:'center'
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