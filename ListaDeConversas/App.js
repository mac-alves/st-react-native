import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList } from 'react-native';

import ListItem from './src/ListItem';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      list:[
        { key:'1', img:'https://www.b7web.com.br/avatar1.png', name:'Mauricio', msg:'Quando sai novas aulas?' },
        { key:'2', img:'https://www.b7web.com.br/avatar2.png', name:'João', msg:'nada alem de nada' },
        { key:'3', img:'https://www.b7web.com.br/avatar3.png', name:'Paulo', msg:'sda asdaf?' },
        { key:'4', img:'https://www.b7web.com.br/avatar3.png', name:'Amanda', msg:'bla bla bla?' },
        { key:'5', img:'https://www.b7web.com.br/avatar2.png', name:'Junho', msg:'ggirn askgosdns?' },
        { key:'6', img:'https://www.b7web.com.br/avatar1.png', name:'jessika', msg:'dsdfndfnk jsfjsdnj?' }
      ]
    };
  }

  render() {
    return(
      <View style={styles.container} >
        <FlatList 
          data={this.state.list}
          renderItem={({item})=><ListItem data={item} />}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:(Platform.OS == 'ios') ? 20 : 0
  }
});
