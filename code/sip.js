'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Alert,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

export class sip extends Component{
	
	static navigationOptions = {
    		title: 'SIP CALCULATOR',
	};
	constructor(props){
		super(props);
		this.state = {
			invest:1000,
			month:2,
			ror:10,
			result:26667,
			anything:0,
			pickm:0,
			wheel:1,
			text:'',
			color:'yellow',
		}
	}
	change(data){
		let a = data ;
		a = a<1000||a===NaN ? 1000:a;
		let b = this.state.month*12 ;
		let c = this.state.ror ; 
		let sum = 0;
		for(var i=1;i<=b;++i){
			sum+=(a*Math.pow((1+c/(12*100)),i));
		}
		sum=sum.toFixed();
		///
		    let len =data.length;
		    let z=0;
		    let string1="";
		    let string2="";
		    data=data.trim();
		    
		        for(z=0;z<len;z++)
		    {
		      if(data.charAt(z)===',')
		        {
		          string1=data.substring(0,z);
		          string2=data.substring(z+1);
		          data=string1+string2;
		        }
		        if(data.charAt(z)==='.')
		        {
		          if(data.charAt(z+1)==='.')
		          {
		            Alert.alert(
		                'Invalid Input',
		                'Modify Input by Removing Decimal Points'
		              )
		          }
		          else
		          {
		            string1=data.substring(0,z);
		          data=string1;
		          this.setState({
			invest:a,
			result:sum,	
		});
		          break;
		          }
		        }
		        if(data.charAt(z)==='-')
		        {
		          Alert.alert(
		              'Hyphen Not Allowed',
		              'You can enter numbers only',
		              [
		                {

		                  text:'OK',onPress:()=>console.log('OK Pressed')
		                }
		              ],
		              {cancelable:false}
		            )
		            break;  
		        }
		        else
		        {
		          this.setState({
					invest:a,
					result:sum,	
				});
		        }
    }
    
  }
	




	ywheel(event){
		let a = this.state.invest ;
		a = a<1000 ? 1000:a;
		let b = event.label*12;
		let c = this.state.ror ; 
		let sum = 0;
		for(var i=1;i<=b;++i){
			sum+=(a*Math.pow((1+c/(12*100)),i));
		}
		sum=sum.toFixed();
		this.setState({
			month:event.label,
			result:sum
		});
	}

	rwheel(event){
		let a = this.state.invest ;
		a = a<1000 ? 1000:a;
		let b = this.state.month*12 ;
		let c = event.label ; 
		let sum = 0;
		for(var i=1;i<=b;++i){
			sum+=(a*Math.pow((1+c/(12*100)),i));
		}
		sum=sum.toFixed();
		this.setState({
			ror:event.label ,
			result: sum
		});
	}

	change_text(){
		this.setState({
			text:'Systematic Investment Plan (SIP) is an investment vehicle offered by mutual funds to investors, allowing them to invest small amounts periodically instead of lump sums. The frequency of investment is usually weekly, monthly or quarterly.',
			color:'white',
		});
	}
	change_t(){
		return(
			<Text>yolo</Text>
			);
	}
	render(){

	 	const { navigate } =  this.props.navigation ;
        var ydata = [];
        for(let i =2 ; i<=30 ; ++i)
        {
        	let object = {};
        	object["key"]=i;
        	object["label"]=""+i+"";
        	ydata.push(object);
        }

        var rdata =[];
        for(let i=0;i<=30;++i)
        {
        	let obj = {};
        	obj["key"] = i;
        	obj["label"]=""+i+"";
        	rdata.push(obj);
        }
    return(
	 <ScrollView KeyboardShouldPersistTaps = "always" style = {{backgroundColor:'#ffffff',padding:5}}>
	 
	 	<View style={{backgroundColor:'#ffffff',padding:10}}>
	 		<Text style = {styles.text}>This calculator will help you to visualize the <Text style = {{fontWeight:'bold'}}>Amount Accumulated</Text> with a Regular Investment </Text>
	 	</View>
	 	<View style = {{flex:1, flexDirection:'row'}}>
		 	<View style = {{flex:2,backgroundColor:'#ffff99' ,padding:10,borderRadius:5}}>
		 		<TouchableOpacity onPress = {()=>this.change_text()} >
		 			<Text style = {{color:'#262626',fontSize:16,textAlign:'center'}}>What is SIP ?</Text>
		 		</TouchableOpacity>
		 	</View>
		 	<View style = {{flex:4}}>
		 		<Text></Text>
		 	</View>
	 	</View>
	 	<View>
	 		<Text style = {{color:'#262626',fontSize:16,textAlign:'center'}}>{this.state.text}</Text>
	 	</View>
		<View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:20}}>
			
				<View style = {{flex:6,backgroundColor:'#d9d9d9',height:60,borderRadius:5,width:70}}>
			        <Text style = {styles.view}>Monthly Savings</Text>
			        <Text style = {styles.view1}>(Rs.)</Text>
				</View>
				<View style ={{flex:6,alignItems:'center',justifyContent:'center'}}>
					<View style={{width:90,height:40,backgroundColor:'#ffffff'}}>		
						<TextInput 
						style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90,color:'#000000',textShadowRadius:0,fontSize:17,textAlign:'center'}}
						underlineColorAndroid='white'
						keyboardType='numeric'
						placeholder = '1000'
						editable = {true}
						value = {this.state.invest}
						onChangeText={(value)=>this.change(value)}
						/>
					</View>
				</View>
			
		</View>

		
			<View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
				<View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
					<Text style = {styles.view}>Investment Period </Text>
					<Text style = {styles.view1}>(years)</Text>
				</View>
				<View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
					<View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
		                <ModalPicker
		                    data={ydata}
		                    onChange={(option)=>{ this.ywheel(option)}}>
		                    
		                    <TextInput
		                        style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
		                        editable={false}
		                        placeholder="     2 "
		                        value={this.state.month} />
		                        
		                </ModalPicker>
            		</View>

				</View>
			</View>

			<View style ={{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
				<View style = {{flex:9,width:150,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5,padding:10}}>
					<Text style = {styles.view}>Expected Rate of Return<Text style = {{fontWeight:'normal',fontSize:15,color:'#595959'}}>(%)</Text></Text>
				</View>
				<View style = {{flex:10,width:200,alignItems:'center',justifyContent:'center'}}> 
					<View style={{flex:1, justifyContent:'center'  }}>
		                <ModalPicker
		                    data={rdata}
		                    initValue="0"
		                    onChange={(option)=>{ this.rwheel(option)}}>
		                    <TextInput
		                        style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90,color:'#000000',textShadowRadius:0,fontSize:17 }}
		                        editable={false}
		                        placeholder="    10"
		                        value={this.state.ror}
		                       />
		                        
		                </ModalPicker>
            		</View>
				</View>
			</View>

		
		<View style={{alignItems:'center',justifyContent:'center',padding:28}}>
			<View style = {{width:120,height:20}}>
				<Button 
				style = {{width:600}}
				onPress = {()=>navigate('graph_sip',{savings:this.state.invest , period:this.state.month , ror:this.state.ror, result:this.state.result})}
				title = "calculate SIP"
				color = '#008080'
			/>
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
	view1:{
		fontWeight:'normal',
		fontSize:15,
		alignItems:'flex-start',
		justifyContent:'flex-end',
		textAlign:'center',
	},
	container: {
    height:450,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});