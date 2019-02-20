import React from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
const REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

/**
 * 使用FlatList做一个电影列表
 *
 */
class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[],
            loaded:false,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    /**
     * 获取数据
     */
    fetchData = () => {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                    data: this.state.data.concat(responseData.movies),
                    loaded:true,
                });
            });
    };

    /**
     * 渲染数据
     * @param movie
     * @returns {*}
     */
    renderMovie ({item}){
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: item.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    };

    /**
     * 为给定的item生成一个不重复的key
     * @param item      item
     * @param index     item下标
     * @private
     */
    _keyExtractor = (item, index) => item.id;

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <Text>
                        正在加载电影数据……
                    </Text>
                </View>
            );
        }

        return (
            <FlatList
                data = {this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

export default Movie;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
