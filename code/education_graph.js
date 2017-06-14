'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

export class Education_Result extends React.Component {
  static navigationOptions = {
    title: 'Result',
  };
  render() {
    const {params}=this.props.navigation.state;
    let p_age=(params.a);
    let c_age=(params.b);
    let duration_of_college=(params.c);
    let today_cost_per_annum=(params.d)*100000;
    let i_rate=(params.e);
    let sip_rate=(params.f);

    let years_to_save=c_age-p_age;
    let initial_withdrawl=Number(today_cost_per_annum*(Math.pow((1+i_rate/100),years_to_save)));

    let I=1+i_rate/100;
    let Y=1+sip_rate/100;
    let p_previous_last=(Number(initial_withdrawl))*(1-(Math.pow((I/Y),duration_of_college)))/(1-I/Y);

    let monthly_savings=p_previous_last*(Y-1)/(12*(Math.pow(Y,years_to_save)-1));

    return (
      
      <ScrollView style = {{flex:1,backgroundColor:'#ffffff'}}>
        
        <View style = {{flex:1,backgroundColor:'#b3ffd9',height:50,justifyContent:'center',padding:10}}>
            <Text style = {{color:'#000000',fontSize:19,padding:10}}>{today_cost_per_annum}</Text>

        </View>
        <View style = {{flexDirection:'column',padding:10}}>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Amount Required at Start of College </Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(p_previous_last.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View>
            <Text>
            </Text>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Monthly Investment </Text>
            </View>
            <View style = {{flex:1,alignItems:'center'}}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(monthly_savings.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>  
                
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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