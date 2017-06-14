'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Alert,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

export class step_up extends Component{

	static navigationOptions = {
		title:'Step-up SIP CALCULATOR'
	};
	constructor(props){
		super(props);
		this.state = {
			savings:1000,
			period:2,
			ror:10,
			increment:1000,
			sip_amount:39338,
		}
	}

	change_savings(data){
		let a = data ;
		a = a<1000||a===NaN ? 1000:a;
		let b = this.state.period*12 ;
		let c = this.state.ror ; 
		let d = this.state.increment;
		let sum = 0;
		var k =-1;
		for(var i=0 ; i < b ; ++i){
			if(i%12===0)++k;
			sum+=Number(( Number(k*d) + Number(a) )*Math.pow((1+c/(12*100)),b-i));
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
			savings:data,
			sip_amount:sum,
		})
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
			savings:data,
			sip_amount:sum,
		});
        }
        
    }
	}
	change_period(option){
		let a = this.state.savings ;
		a = a<1000||a===NaN ? 1000:a;
		let b = option.label*12 ;
		let c = this.state.ror ; 
		let d = this.state.increment;
		let sum = 0;
		var k = -1;
		for(var i=0;i < b;++i){
			if(i%12==0)++k;
			sum+=Number(( Number(k*d) + Number(a) )*Math.pow((1+c/(12*100)),b-i));
			
		}
		sum=sum.toFixed();
		this.setState({
			period:option.label,
			sip_amount:sum,
		})
	}
	change_ror(option){
		let a = this.state.savings ;
		a = a<1000||a===NaN ? 1000:a;
		let b = this.state.period*12 ;
		let c = option.label ; 
		let d = this.state.increment;
		let sum = 0;
		var k = -1;
		for(var i=0;i < b;++i){
			if(i%12==0)++k;
			sum+=Number(( Number(k*d) + Number(a) )*Math.pow((1+c/(12*100)),b-i));
			
		}
		sum=sum.toFixed();
		this.setState({
			ror:option.label,
			sip_amount:sum,
		})
	}
	change_increment(option){
		let a = this.state.savings ;
		a = a<1000||a===NaN ? 1000:a;
		let b = this.state.period*12 ;
		let c = this.state.ror ; 
		let d = option.label;
		let sum = 0;
		var k = -1;
		for(var i=0;i < b;++i){
			if(i%12==0)++k;
			sum+=Number(( Number(k * d) + Number(a) )*Math.pow((1+c/(12*100)),b-i));
			
		}
		sum=sum.toFixed();
		this.setState({
			increment:option.label,
			sip_amount:sum,
		})
	}
	render(){
		const { navigate } = this.props.navigation ;
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
        var incdata = [];
        for(let i=1000;i<=100000;i+=1000)
        {
        	let obj = {};
        	obj["key"] = i;
        	obj["label"]=""+i+"";
        	incdata.push(obj);
        }

		return(
			<ScrollView KeyboardShouldPersistTaps = "always" style = {{backgroundColor:'#ffffff',padding:5}}>
				<View style={{backgroundColor:'#ffffff'}}>
	 				<Text style = {styles.text}>This calculator will help you to visualize the amount accumulated with Regular Investment with an Annual Increase (Step-up SIP)!</Text>
	 			</View>
	 			<View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:20}}>			
					<View style = {{flex:6,backgroundColor:'#d9d9d9',height:60,borderRadius:5,width:70,justifyContent:'center'}}>
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
							value = {this.state.savings}
							onChangeText={(value)=>this.change_savings(value)}
							/>
						</View>
					</View>			
				</View>

				<View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
					<View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
						<Text style = {styles.view}>Yearly Increment</Text>
						<Text style = {styles.view1}>(Rs.)</Text>
					</View>
					<View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
						<View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
			                <ModalPicker
			                    data={incdata}
			                    onChange={(option)=>{ this.change_increment(option)}}>
			                    
			                    <TextInput
			                        style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
			                        editable={false}
			                        placeholder="     1000 "
			                        value={this.state.increment} />
			                        
			                </ModalPicker>
	            		</View>

					</View>
				</View>

				<View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
					<View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
						<Text style = {styles.view}>Investment Period</Text>
						<Text style = {styles.view1}>(years)</Text>
					</View>
					<View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
						<View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
			                <ModalPicker
			                    data={ydata}
			                    onChange={(option)=>{ this.change_period(option)}}>
			                    
			                    <TextInput
			                        style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
			                        editable={false}
			                        placeholder="     2 "
			                        value={this.state.period} />
			                        
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
			                    onChange={(option)=>{ this.change_ror(option)}}>
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
				<View style={{alignItems:'center',justifyContent:'flex-start',padding:28,height:200}}>
					<View style = {{width:120}}>
						<Button 
						style = {{width:600}}
						onPress = {()=>navigate('graph_step',{savings:this.state.savings, period:this.state.period , ror:this.state.ror, increment:this.state.increment, sip_amount:this.state.sip_amount})}
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