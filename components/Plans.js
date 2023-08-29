import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import typography from '../assets/fonts/typography';
import { StyleSheet, Modal, Button } from 'react-native';
import colors from '../assets/styles/colors';
import DotsVerticalIcon from '../assets/Icons/DotsVerticalIcon';
import Edit from '../assets/Icons/Edit'
import Trash from '../assets/Icons/Trash'
import Cross from '../assets/Icons/Cross';


export default function Plans({ meals, navigation }) {

    const pressHandler = () => {
        navigation.navigate('Plan');
    }    

    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={indexStyles.container}>
        <Text style={[typography.DisplayXs, indexStyles.title]}>All plans</Text>
  
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={indexStyles.box} onPress={() => navigation.navigate('Plan', item)}>
              <View style={indexStyles.boxTop}>
              <Text style={typography.TextSm}>{item.title}</Text>
              <DotsVerticalIcon width={16} height={16} onPress={() => setModalVisible(true)}/>
              </View>
              <Text style={[typography.TextSm, indexStyles.boxDate]}>{item.date}</Text>
            <View style={indexStyles.weekDaysContainer}>
                {item.week_days.map((day, index) => (
                    <Text key={index} style={[indexStyles.weekDay, typography.TextXs]}>
                        {day.shortName}
                    </Text>
                ))}
            </View>

            </TouchableOpacity>
          )}
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={indexStyles.modalBackground}>
                <View style={indexStyles.modalContent}>
                <TouchableOpacity style={indexStyles.closeButton} onPress={() => setModalVisible(false)}>
                    <Cross width={22} height={22} onPress={() => setModalVisible(false)}/>
                </TouchableOpacity>
                    <View style={[indexStyles.modalItem, {marginBottom: 8}]}>
                        <Edit style={indexStyles.modalIcon}/>
                        <Text onPress={() => setModalVisible(false)} style={[indexStyles.modalButtonText, typography.TextSm]}>Edit title</Text>
                    </View>
                    <View style={indexStyles.divider}></View>
                    <View style={[indexStyles.modalItem, {marginTop: 8}]}>
                        <Trash style={indexStyles.modalIcon}/>
                        <Text onPress={() => setModalVisible(false)} style={[indexStyles.modalButtonText, typography.TextSm]}>Delete</Text>
                    </View>
                </View>
            </View>
        </Modal>
      </View>
    );
}

const indexStyles = StyleSheet.create({
    title: {
        marginBottom: 10
    },
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 24,
        paddingBottom: 24,
    },
    box: {
        backgroundColor: colors.Gray25,
        flexDirection: 'column',
        borderRadius: 12,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 20,
    },
    boxTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: colors.Gray700,
    },
    boxDate: {
        color: colors.Gray600,
        marginBottom: 4,
    },
    weekDaysContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    weekDay: {
        backgroundColor: colors.ForestGreen,
        color: colors.BaseWhite,
        marginRight: 4, // This will give a 4px gap between days
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 16
    },
    modal: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    modalIcon: {
        alignSelf: 'center',
        width: 16,
        height: 16
    },
    modalButtonText: {
        width: '100%',
        color: colors.Gray700,
        marginLeft: 8,
        alignSelf: 'center'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.Gray600
    },
    divider: {
        height: 0.5, // Change this if you want a thicker or thinner divider
        backgroundColor: colors.Gray600, // Use any color you like
        marginVertical: 10, // Adjust the space between the divider and the text elements
        width: '100%'
    },
    modalItem: {
        paddingHorizontal: 24, // Adding horizontal padding to each item
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        position: 'absolute',  // To position the X button absolutely
        top: -4,               // Spacing from the top
        right: -4,             // Spacing from the right
        zIndex: 1,             // Ensure it appears above other content
        padding: 10,           // Adding some padding to increase touch area
    }, 
});
