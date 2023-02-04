import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import CreditCardBack from './components/CreditCardBack';
import CreditCardFront from './components/CreditCardFront';

export default function App() {
  const rotate = useSharedValue(0);
  const frontAnimatedStyles = useAnimatedStyle(()=>{
    const rotateValue = interpolate(rotate.value,[0,1],[0,180])
    return{
      transform:[
        {
          rotateY : withTiming(`${rotateValue}deg`,{duration:1000})
        }
      ]
    }
  })
  const backAnimatedStyles = useAnimatedStyle(()=>{
    const rotateValue = interpolate(rotate.value,[0,1],[180,360])
    return{
      transform:[
        {
          rotateY : withTiming(`${rotateValue}deg`,{duration:1000})
        }
      ]
    }
  })
  return (
    <View style={styles.container}>
      <View>
      <Animated.View style={[styles.frontcard,frontAnimatedStyles]}>
        <CreditCardFront rotate={rotate}  />
      </Animated.View>
      <Animated.View style={[styles.backCard,backAnimatedStyles]}>
        <CreditCardBack rotate={rotate} />
      </Animated.View>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 frontcard:{
position:"absolute",
backfaceVisibility:'hidden'
 },
 backCard:{
backfaceVisibility:"hidden"
 },
  button:{
    paddingHorizontal:25,
    paddingVertical:5,
    backgroundColor:"#8ecae6",
    marginTop:10,
    borderRadius:5,
  },
 
});
