import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

/**
 * 使用flexbox布局
 * 1.flexDirection:子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列,默认竖直轴
 * 2.justifyContent:子元素沿着主轴的排列方式,flex-start、center、flex-end、space-around、space-between以及space-evenly
 * 3.alignItems:子元素可以沿着与主轴垂直的轴的排列方式，flex-start、center、flex-end以及stretch。
 */
export default class FlexDirectionBasics extends Component {
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent:'space-between',
                alignItems:'stretch'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};
