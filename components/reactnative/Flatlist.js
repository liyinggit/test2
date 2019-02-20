import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

/**
 * FlatList:用于垂直的滚动列表，适合长列表数据
 * FlatList组件必须的两个属性是data和renderItem
 * data是列表的数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。
 */
export default class Flatlist extends FlatList{
    render(){
        return(
          <View style ={styles.container}>
            <FlatList
                data={[
                    {key:'davei'},
                    {key:'lisa'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={
                    ({item}) => <Text style={styles.item}>{item.key}</Text>
                }
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
