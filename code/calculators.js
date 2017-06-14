'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

export class calculators extends Component{
	static navigationOptions = {
    title: 'Financial Calculators',
  };
	render(){
		const { navigate } =  this.props.navigation ;
		return(
			<ScrollView style={{backgroundColor:'#ffffff'}}>
				<View style = {{height:550}}>
					<View style= {{flex:5,flexDirection:'row'}}>
						<View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
								<TouchableOpacity onPress = {()=>navigate('sip')}>
									<View style = {{width:90,height:100}}>
										<View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:20,width:90,height:10}}>
											   <Image source={require('./photos/sip.png')} />		
												<Text style = {{textAlign:'center',color:'#000000'}}> SIP </Text>
												<Text style = {{textAlign:'center',color:'#000000'}}>Calculator</Text>
										</View>
									</View>
								</TouchableOpacity>
						</View>
						<View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
								<TouchableOpacity onPress = {()=>navigate('cod')}>
									<View style = {{width:90,height:100}}>
										<View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:20,width:90,height:10}}>
											   <Image source={require('./photos/sip-delay.png')} />		
												<Text style = {{textAlign:'center',color:'#000000'}}>SIP Delay</Text>
												<Text style = {{textAlign:'center',color:'#000000'}}>Calculator</Text>
										</View>
									</View>
								</TouchableOpacity>
						</View>
					</View>
					<View style= {{flex:5,alignItems:'center',justifyContent:'center'}}>
								<TouchableOpacity onPress = {()=>navigate('step_up')}>
									<View style = {{width:90,height:100}}>
										<View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:20,width:90,height:10}}>
											   <Image source={require('./photos/step-up.png')} style = {{backgroundColor:'#d9d9d9'}}/>		
												<Text style = {{textAlign:'center',color:'#000000'}}> step-up </Text>
												<Text style = {{textAlign:'center',color:'#000000'}}> SIP calculator </Text>
										</View>
									</View>
								</TouchableOpacity>
					</View>
					<View style= {{flex:5,flexDirection:'row'}}>
						<View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>		
								<TouchableOpacity onPress = {()=>navigate('education')}>
									<View style = {{width:90,height:100}}>
										<View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:20,width:90,height:10}}>
											   <Image source={require('./photos/edu.png')} />		
												<Text style = {{textAlign:'center',color:'#000000'}}>Education</Text>
												<Text style = {{textAlign:'center',color:'#000000'}}>Calculator</Text>
										</View>
									</View>
								</TouchableOpacity>
						</View>
						<View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
								<TouchableOpacity onPress = {()=>navigate('retirement')}>
									<View style = {{width:90,height:100}}>
										<View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:20,width:90,height:10}}>
											   <Image source={require('./photos/retirement.png')} />		
												<Text style = {{textAlign:'center',color:'#000000'}}>Retirement</Text>
												<Text style = {{textAlign:'center',color:'#000000'}}>Calculator</Text>
										</View>
									</View>
								</TouchableOpacity>
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