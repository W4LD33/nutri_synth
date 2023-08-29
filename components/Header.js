import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg'; // Import from react-native-svg
import typography from '../assets/fonts/typography';
import styles from '../assets/styles/styles';
import { StyleSheet } from 'react-native';
import Menu from '../assets/Icons/Menu';

export default function Header() {
    return (
        <View style={headerStyles.container}>
            <Text style={typography.logo}>nutri_synth</Text>
            <Menu width={24} height={24} />
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
      height: 64,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
      paddingBottom: 12
    }
  });  