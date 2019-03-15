import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Button
} from 'react-native';
import {WebBrowser} from 'expo';
import {api_env} from "../../api.env";
import axios from "axios";
import {createStackNavigator} from "react-navigation";

export default class UsersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        }
    }

    static navigationOptions = {
        title: 'Users Lists',
    };

    componentDidMount() {
        console.log('comp is ok');
        this.state.users.push()
        this.setState({
            loading: false,
            users: [{id: 1, username: "rémi"}, {id: 2, username: "tibo"}]
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        let displayList;
        if (!this.state.loading) {
            displayList = <FlatList
                data={this.state.users}
                renderItem={({item}) => {
                    console.log(item)
                    return (
                        <TouchableOpacity
                            onPress={() => navigate('ShowUser', {"id": item.id, "username": item.username})}>
                            <Text style={styles.item} keys={item.id}>Nom de l'utistaeur : {item.username}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        } else {
            displayList = <Text>Loading</Text>
        }
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Button
                        title="Show Test vue "
                        onPress={() => navigate('TestScreen')}
                    />
                    <Text style={styles.getStartedText}>Users Lists</Text>
                    {displayList}
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    col: {
        flex: 1, flexDirection: 'column'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
