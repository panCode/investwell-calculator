
'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';

import { sip } from './code/sip.js';
import {screen2} from './code/sip_graph.js';
import {COD} from './code/cost_delay.js';
import { graph_cod } from './code/cost_delay_graph.js';
import { step_up } from './code/Step_up.js';
import { graph_step_up } from './code/Step_up_graph.js';
import { Retirement } from './code/retirement.js';
import { Retirement_Result } from './code/retirement_graph.js';
import { Education } from './code/education.js';
import { Education_Result } from './code/education_graph.js';
import { calculators } from './code/calculators.js';

var {height,width} = Dimensions.get('window');

StyleSheet.create({
	text:{
		color:'#000000',
		fontSize:17,
		textShadowRadius:1,
	},
	bigblue:{
		color:'#ffffff',
		fontWeight:'bold',
		fontSize:25,
		includeFontPadding:true,
		fontStyle:'normal',
		textShadowRadius:40
	},
	view:{
		color:'#000000',
		fontWeight:'bold',
		fontSize:16,
		alignItems:'flex-start',
		justifyContent:'flex-end',
		textAlign:'center'		
	},
	container: {
    height:450,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
const stylesbutton = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#87ceeb',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000066'
  },
  welcomePress: {
    fontSize: 20,
    textAlign: 'auto',
    margin: 10,
    color: '#ffffff'
  },
  button: {
    borderColor: '#000066',
    borderWidth: 7,
    borderRadius: 10,
  },
  buttonPress: {
    borderColor: '#000066',
    backgroundColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
  },
});
const SimpleApp = StackNavigator({
  page1: {screen: calculators },
  sip: { screen : sip },
  graph_sip: { screen : screen2},
  cod:{ screen : COD},
  graph_cod: { screen : graph_cod},
  step_up : { screen : step_up},
  graph_step : { screen : graph_step_up},
  retirement : { screen : Retirement},
  result_retirement : { screen : Retirement_Result},
  education : { screen : Education},
  education_result : { screen : Education_Result},
});
AppRegistry.registerComponent('calculator', () => SimpleApp);