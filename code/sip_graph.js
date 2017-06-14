'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

export class screen2 extends Component{
	// static navigationOptions = {
	// 	title:'welcome',
	// };
	render(){
		const {params} = this.props.navigation.state;

		var a = params.savings;
		var b = (params.period)*12 ;
		var c = params.ror;

		console.log(a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

		let cdata = [];

	 	var tdata = [];
	 
	 	for(let i=1;i<=params.period;++i)
	 	{
	 		let obj = {};
	 		obj["x"] = i;
	 		
	 		obj["y"] = 12*i*(params.savings);
	 		tdata.push(obj);
	 		
	 	}
	 	var kdata = [];
	 	for(let i=1;i<=params.period;++i)
	 	{
	 		let obj = {};
	 		obj["x"] = i;
	 		let sum =0;
	 		for(let j =1;j<=i*12;++j)
	 		{
	 			sum+=(a*Math.pow((1+c/(12*100)),j));
	 		}

	 		obj["y"] = sum;
	 		kdata.push(obj);
	 		
	 	}
	 	var Expected_amount = Number(params.result);
	 	Expected_amount = Expected_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	 	cdata.push(tdata);
	 	cdata.push(kdata);
	 	console.log(Expected_amount);
	 	let options = {
					    width: 250,
					    height: 350,
					    color: '#2980B9',
					    margin: {
					      top: 0,
					      left: 50,
					      bottom: 25,
					      right: 20
					    },
					    animate: {
					      type: 'delayed',
					      duration: 200
					    },
					    axisX: {
					      showAxis: true,
					      showLines: true,
					      showLabels: true,
					      showTicks: true,
					      zeroAxis: false,
					      orient: 'bottom',
					      label: {
					        fontFamily: 'Arial',
					        fontSize: 10,
					        fontWeight: true,
					        fill: '#34495E'
					      }
					    },
					    axisY: {
					      showAxis: true,
					      showLines: true,
					      showLabels: true,
					      showTicks: true,
					      zeroAxis: false,
					      orient: 'left',
					      label: {
					        fontFamily: 'Arial',
					        fontSize: 10,
					        fontWeight: true,
					        fill: '#34495E'
					      }
					    },
					 }

		return (
			<ScrollView style = {{flex:1,backgroundColor:'#ffffff'}}>
				<View style = {{alignItems:'center'}}>
					<Text style={{fontWeight:'bold',fontSize:20,color:'#000000'}}>Growth Chart</Text>
				</View>
				<View style = {{height:450,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
					<View style = {{alignItems:'flex-end',justifyContent:'center',height:80,width:50}}>
						<Text style = {{transform: [{ rotate: '270deg'}],color:'#000000',textAlign:'center'}}>Amount (Rs)</Text>
					</View>
					<View style={styles.container}>
						<SmoothLine data={cdata} options={options} xKey='x' yKey='y' />
						<Text style = {{fontWeight:'normal',color:'#000000'}}>Period in Years</Text>
					</View>
				</View>
				<View style = {{flex:1,backgroundColor:'#b3ffd9',height:50,justifyContent:'center',padding:10}}>
						<Text style = {{color:'#000000',fontSize:19,padding:10}}>Summary</Text>
				</View>
				
				<View style = {{flexDirection:'column',padding:10}}>
					<View style = {{flexDirection:'row'}}>
						<View style = {{flex:1}}>
							<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Expected Amount </Text>
						</View>
						<View style = {{flex:1}}>
							<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>{Expected_amount} </Text>
						</View>
					</View>
					<View style = {{flexDirection:'row'}}>
						<View style = {{flex:1}}>
							<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Amount Invested</Text>
						</View>
						<View style = {{flex:1}}>
							<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>{(tdata[params.period-1].y).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
						</View>
					</View>
					<View style = {{flexDirection:'row'}}>
						<View style = {{flex:1}}>
							<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Wealth Gain</Text>
						</View>
						<View style = {{flex:1}}>
							<Text style = {{fontWeight:'bold',fontSize:17,color:'#1a6600'}}>{(Number((params.result - tdata[params.period-1].y).toFixed())).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
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