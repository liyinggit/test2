import React from 'react';
import {Text,View} from 'react-native';

/**
 * props(属性）
 */
class Greeting extends React.Component{
    render(){
        return(
          <View style={{alignItems:'center'}}>
              <Text>Hello {this.props.name}</Text>
          </View>
        );
    }
}

export default class LotsOfGreeting extends React.Component{
    render(){
        return(
          <View style={{alignItems:'center'}}>
                <Greeting name='lisa'/>
              <Greeting name='hua'/>
          </View>
        );
    }
}
