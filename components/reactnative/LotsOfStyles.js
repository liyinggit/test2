import React from 'react';
import {AppRegister, ScrollView, StyleSheet, Text, View} from 'react-native';

/**
 * 样式和指定宽高
 *垂直滚动的ScrollView
 */
class LotsOfStyles extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    {/*样式*/}
                    <Text style={styles.red}>just red</Text>
                    <Text style={styles.bigBlue}>just bigblue</Text>
                    <Text style={[styles.bigBlue, styles.red]}>bigBlue.then red</Text>
                    <Text style={[styles.red, styles.bigBlue]}>red,then bigBlue</Text>
                    {/*指定宽高*/}
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>

                    {/*弹性宽高  flex，父容器中要使用flex具有尺寸*/}
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
            </ScrollView>

        );
    }
}

export default LotsOfStyles;

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    }
});
