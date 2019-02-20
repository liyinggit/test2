import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';


/**
 * 如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么SectionList将是个不错的选择
 */
export default class Sectionlist extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    {/*头部组件*/}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    {/*//此函数用于为给定的item生成一个不重复的key
                        //若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。*/}
                    keyExtractor={(item, index) => index}
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
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
