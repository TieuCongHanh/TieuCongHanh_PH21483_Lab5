import React from 'react';
import { NativeModules, LayoutAnimation, Text,TouchableOpacity,StyleSheet,  View,} from 'react-native';
const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class Page1 extends React.Component {
  state = {
    w: 200,
    h: 200,
  };
  _onPress = () => {
    // Animate the update
    LayoutAnimation.easeInEaseOut();
    this.setState({w: this.state.w + 15, h: this.state.h + 15});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Page2', {
              itemId: '07-02-2023',
              name: 'hanhtcph21483-CP17306-Lab5',
            }); }}>
         <View style={styles.button}>
            <Text style={styles.buttonText}>Chuyen Page2</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'violet',
    borderRadius:90,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    borderTopRightRadius:100,
    borderTopLeftRadius:100,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20,
  },
});