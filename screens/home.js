import Plans from '../components/Plans';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
}); 

export default function Home({ navigation }){

    // const [meals, setMeals] = useState([
    //     { title: 'Week #31/1', date: 'from 2023-07-31 until 2023-08-02', week_days: ['Mon', 'Tue', 'Wed'], id: 1},
    //     { title: 'Week #31/2', date: 'from 2023-08-02 until 2023-08-06', week_days: ['Thu', 'Fri', 'Sat', 'Sun'], id: 2},
    //     { title: 'Week #32', date: 'from 2023-07-31 until 2023-08-02', week_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], id: 3}
    // ]);

    const [meals, setMeals] = useState([
      {
          title: 'Week #31/1',
          date: 'from 2023-07-31 until 2023-08-02',
          fastingType: '16/8',
          week_days: [
              {
                  shortName: 'Mon',
                  fullName: 'Monday',
                  meals: [
                      {
                          name: 'Breakfast',
                          time: '08:00',
                          title: 'Scrambled Eggs',
                          preparationTime: '10 minutes',
                          kitchenEquipment: ['Pan', 'Spatula'],
                          ingredients: ['2 eggs', 'Salt', 'Pepper'],
                          instructions: 'Whisk eggs and cook in pan. Add salt and pepper to taste.',
                          nutrients: {
                              calories: 150,
                              protein: 10,
                              // ... other nutrients
                          }
                      },
                      // ... Snack 1, Lunch, and so on
                  ]
              },
              // ... Tuesday, Wednesday
          ],
          id: 1
      },
      // ... Week #31/2 and Week #32
  ]);
  
    
    return (
        <View style={styles.container}>
          <Plans meals={meals} navigation={navigation} />
          <Buttons />
        </View>
    );
}