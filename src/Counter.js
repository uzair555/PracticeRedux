import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as action from './store/action';

const Counter = (props) => {
  // This is the code without redux
  // const [counter, setCounter] = useState(0);
  // const addHandler = () => {
  //   setCounter(counter + 1);
  // };
  // const subHandler = () => {
  //   setCounter(counter - 1);
  // };

  // this is with Redux

  // for one state from store or redux
  // const data = useSelector((state) => state.counter);
  // for Multiple state from redux or store
  const data = useSelector((state) => state);
  const {counter, name} = data;

  //Calling action from redux or action
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => dispatch(action.addition())} />
      <Text>{counter}</Text>
      <Text>{name}</Text>
      <Button title="Subtract" onPress={() => dispatch(action.subtraction())} />
    </View>
  );
};
export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
