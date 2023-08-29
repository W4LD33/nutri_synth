import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/styles';
import { StyleSheet } from 'react-native';
import colors from '../assets/styles/colors';
import Keyboard from '../assets/Icons/Keyboard';
import Plus from '../assets/Icons/Plus';
import Lightining from '../assets/Icons/Lightining';
import typography from '../assets/fonts/typography';

export default function Buttons() {
    return (
        <View style={[buttonStyles.wrapper, typography.TextMd]}>
            <Text>Press '+' button to start generating</Text>
            <View style={buttonStyles.container}>
                <View style={buttonStyles.mainSmall}>
                    <TouchableOpacity>
                        <Keyboard width={26} height={26} />
                    </TouchableOpacity>
                </View>
                <View style={buttonStyles.main}>
                    <TouchableOpacity>
                        <Plus width={31} height={31} />
                    </TouchableOpacity>
                </View>
                <View style={buttonStyles.mainSmall}>
                    <TouchableOpacity>
                        <Lightining width={26} height={26} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const buttonStyles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        marginBottom: 38,
        gap: 19,
        color: colors.Gray700
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 13
    },
    main: {
      height: 74,
      width: 74,
      backgroundColor: colors.PigmentGreen,
      borderRadius: 100,
      borderWidth: 1.3,
      borderColor: colors.ForestGreen,
      alignItems: 'center',
      justifyContent: 'center'
    },
    mainSmall: {
        height: 52,
        width: 52,
        backgroundColor: colors.PigmentGreen,
        borderRadius: 100,
        borderWidth: 1.3,
        borderColor: colors.ForestGreen,
        alignItems: 'center',
        justifyContent: 'center'
      }
  });  