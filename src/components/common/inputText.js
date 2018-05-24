import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputText = (props) => {
    const { containerStyle, textStyle, inputStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>
                {props.label}
            </Text>
            <TextInput
                autoCorrect={false}
                secureTextEntry={props.secureText}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={text => props.updateText(text)}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },

    textStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    }
};

export { InputText };
