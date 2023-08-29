import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../assets/Icons/Menu';
import DailyMealNutrientTarget from'../screens/dailyMealNutrientTarget';
import DailyNutrientTarget from '../screens/dailyNutrientTarget';
import FastingTemplates from '../screens/fastingTemplates';
import FastingType from '../screens/fastingType';
import MealPreparationType from '../screens/mealPreparationType';
import MedicalInformation from '../screens/medicalInformation';
import NutrientGroupTargets from '../screens/nutrientGroupTargets';
import NutrientTargets from '../screens/nutrientTargets';
import NutrientTargetTemplate from '../screens/nutrientTargetTemplate';
import PersonalDetails from '../screens/personalDetails';
import TDEE from '../screens/tdee';
import TDEETemplates from '../screens/tdeeTemplates';
import WeightTarget from '../screens/weightTarget';
import { useNavigation } from '@react-navigation/native';

const DetailsStackNav = createStackNavigator();

const DetailsStack = () => {
    const navigation = useNavigation();

    return (
        <DetailsStackNav.Navigator initialRouteName="Personal Details">
        <DetailsStackNav.Screen 
            name="Personal Details" 
            component={PersonalDetails} 
            options={{ 
                title: 'Personal Details', 
                headerTitleAlign: 'center',
                headerRight: () => (
                    <Menu 
                    width={24} 
                    height={24}
                    title="Menu"
                    onPress={() => navigation.toggleDrawer()}
                    style={{ marginRight: 16 }}
                    />
                ),
                }} 
            />
        </DetailsStackNav.Navigator>
    );
}

export default DetailsStack;