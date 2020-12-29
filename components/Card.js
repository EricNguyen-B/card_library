import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        height: 150,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Card;