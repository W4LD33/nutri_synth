import { Text, View, StyleSheet} from 'react-native';
import ShoppingCart from '../assets/Icons/ShoppingCart';
import colors from '../assets/styles/colors';
import DotsVerticalIcon from '../assets/Icons/DotsVerticalIcon';
import typography from '../assets/fonts/typography';

export default function Plan({ route }){
  return (
      <View style={planStyles.plan}>
        <View style={planStyles.card}>
          <View style={planStyles.cardText}>
            <Text style={[typography.TextSm, {color: colors.Gray700}]}>{ route.params?.title }</Text>
            <Text style={[typography.TextXs, {color: colors.Gray600}]}>{ route.params?.date }</Text>
          </View>
          <ShoppingCart/>
        </View>

        <View style={planStyles.main}>
          <View style={planStyles.mainTop}>
            <View style={planStyles.mainTopLeft}>
              <Text style={[planStyles.mainTopLeftText, typography.TextXs]}>Monday</Text>
              <Text style={[planStyles.mainTopLeftText, typography.TextXs]}>16/8</Text>
            </View>
            <Text style={[typography.TextXs, {color: colors.Gray600}]}>2023-07-01</Text>
          </View>
          <View style={planStyles.meal}>
            <View>
              <View style={planStyles.mealDate}>
                <Text style={[typography.TextSm, {color: colors.Gray700}]}>08:00</Text>
                <Text style={[typography.TextSm, {color: colors.Gray700}]}>|</Text>
                <Text style={[typography.TextSm, {color: colors.Gray700}]}>Breakfast</Text>
              </View>
              <Text style={[typography.TextXs, {color: colors.Gray600, maxWidth: 240}]}>Sorghum porridge with sliced lingonberries, crushed cashews, and sesame seeds</Text>
            </View>
            <DotsVerticalIcon width={16} height={16}/>
          </View>
        </View>
      </View>
  );
}

const planStyles = StyleSheet.create({
  plan: {
    height: '100%',
    backgroundColor: colors.BaseWhite,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: colors.Gray25,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 10
  },
  cardText: {
    gap: 8,
  },
  main: {
    backgroundColor: colors.Gray25,
    borderRadius: 12,
    padding: 16,
  },
  mainTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  mainTopLeft: {
    flexDirection: 'row',
    gap: 4
  },
  mainTopLeftText: {
    backgroundColor: colors.ForestGreen,
    color: colors.BaseWhite,
    borderRadius: 16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
  },
  meal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealDate: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 4
  }
});