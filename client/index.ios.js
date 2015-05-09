/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  DeviceEventEmitter,
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
} = React;

var {
  Gyroscope
} = require("NativeModules");


var client = React.createClass({
  getInitialState: function () {
    return {
      rotationRate: {
        x: 0,
        y: 0,
        z: 0
      }
    };
  },
  componentDidMount: function () {
    var _self = this;
    Gyroscope.setGyroUpdateInterval(0.1); // in seconds
    DeviceEventEmitter.addListener('GyroData', function (data) {
      _self.setState({
        rotationRate: {
          x: data.rotationRate.x,
          y: data.rotationRate.y,
          z: data.rotationRate.z
        }
      });
      console.log(data);
    });
    Gyroscope.startGyroUpdates(); // you'll start getting AccelerationData events above
    Gyroscope.stopGyroUpdates();
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
          {this.state.rotationRate.x}
          {this.state.rotationRate.y}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('client', () => client);
