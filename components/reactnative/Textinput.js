import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

/**
 * 处理文本输入
 */
export default class Textinput extends React.Component{
    constructor(props){
        super(props);

        this.state={
            text:''
        }
    }


    render(){
        return(
          <View>
              <TextInput
              style={{height:40}}
              placeholder='type here'
              onChangeText={(text) => this.setState({text})}/>

              <Text style={{padding:10,fontSize:42}}>
                  {this.state.text.split(' ').map((word)=>word && '@').join(' ')}
              </Text>
          </View>
        );
    }
}
