/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LotsOfGreeting from "./components/reactnative/Greeting";
import LotsOfStyles from "./components/reactnative/LotsOfStyles";
import FlexDirectionBasics from "./components/reactnative/Flexbox";
import TextInput from "./components/reactnative/Textinput";
import Flatlist from "./components/reactnative/Flatlist";
import Sectionlist from "./components/reactnative/Sectionlist";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <Sectionlist/>
    );
  }
}
