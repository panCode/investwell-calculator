'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

export class graph_cod extends Component{

	render(){

		const {params} = this.props.navigation.state;
		var a = (params.sip_amount);
		a= Number(a).toFixed();
		var b = params.sip_delay_amount ;
		var c = (a-b).toFixed();
		 let data = [
	      [{
	        "v": Number(params.sip_amount),
	        "name": "Start Today"
	      }],
	      [{
	        "v": Number(params.sip_delay_amount),
	        "name": "Delayed Start"
	      }],
	      [{
	        "v": Number(params.sip_amount-params.sip_delay_amount),
	        "name": "Loss"
	      }]
	    ];

	        let options = {
			      width: 200,
			      height: 250,
			      margin: {
			        top: 20,
			        left: 55,
			        bottom: 50,
			        right: 20
			      },
			      color: '#80b3ff',
			      gutter: 20,
			      animate: {
			        type: 'oneByOne',
			        duration: 200,
			        fillTransition: 3
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
			          fontSize: 14,
			          fontWeight: true,
			          fill: '#262626',
			          rotate: 20
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
			      }
			    }

		return(
			<ScrollView style = {{backgroundColor:'#ffffff'}}>
				<View style = {{flexDirection:'column'}}>
					<View style = {{flex:20,alignItems:'center'}}>
						<Text style={{fontWeight:'bold',fontSize:20,color:'#000000'}}>SIP - Cost of Delay</Text>
					</View>
					<View style = {{flex:4,flexDirection:'row',alignItems:'center',justifyContent:'center',padding:5}}>
						<View style = {{alignItems:'flex-end',justifyContent:'center',height:80,width:50}}>
							<Text style = {{transform: [{ rotate: '270deg'}],color:'#000000',textAlign:'center'}}>Amount(Rs)</Text>
						</View>
						<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff'}}>
					        <Bar data={data} options={options} accessorKey='v'/>
						</View>
					</View>
					
						<View style = {{padding:10}}>
							<View style = {{flex:1,backgroundColor:'#b3ffd9',height:50,justifyContent:'center'}}>
								<Text style = {{color:'#000000',fontSize:19,padding:10}}>Summary</Text>
							</View>
						</View>
					
					<View style = {{flexDirection:'column',padding:10}}>
						<View style = {{flexDirection:'row'}}>
							<View style = {{flex:1.3}}>
								<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Start Today (SIP Amount)</Text>
							</View>
							<View style = {{flex:1}}>
								<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(Number(a)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/- </Text>
							</View>
						</View>
						<View style = {{flexDirection:'row'}}>
							<View style = {{flex:1.3}}>
								<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Delayed Start (SIP Amount)</Text>
							</View>
							<View style = {{flex:1}}>
								<Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(Number(Number(b).toFixed(0))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/- </Text>
							</View>
						</View>
						<View style = {{flexDirection:'row'}}>
							<View style = {{flex:1.3}}>
								<Text style = {{fontWeight:'normal',fontSize:17,color:'red'}}>Loss</Text>
							</View>
							<View style = {{flex:1}}>
								<Text style = {{fontWeight:'bold',fontSize:17,color:'red'}}>Rs. {(Number(c)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/- </Text>
							</View>
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