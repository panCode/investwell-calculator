'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
// import renderIf from 'renderIf';
var {height,width} = Dimensions.get('window');



export class Retirement_Result extends React.Component {
  constructor (props){
    super(props);
    this.state={
      shortfall_string:"Shortfall Corpus",
      extra_yearly_savings_string:"Monthly Expenses Just After Retirement ",
      color:'red',
    }
  }
  static navigationOptions = {
    title: 'Result',
  };

  

  render() {
     const {params}=this.props.navigation.state;
    let p_age=(params.a);
    let r_age=(params.b);
    let m_expenses=(params.c);
    let m_savings=(params.d);
    let i_rate=(params.e);
    let pre_return=(params.f);
    let post_return=(params.g);
    let l_expectancy=(params.h);
    let years_to_retirement=(r_age-p_age);
     

    //1.update_corpus_with_savings
    let power1=Math.pow((1+pre_return/100),years_to_retirement);
    let savings = m_savings*12*((power1-1)/(pre_return/100))*(1+pre_return/100);
    //--> Return Corpus due to savings 
    //

    //2.update_last_withdrawl
    let toDie_months=(l_expectancy - p_age)*12;
    // let last_withdrawl=(monthly_expenses*Math.pow((1+inflation_rate/100),toDie));
    let count1=0;
    let monthly_expense=m_expenses;
    while(count1<years_to_retirement){
      monthly_expense=monthly_expense*(1+i_rate/100);
      count1++;
    }
    ///->return monthly_expense;


    //3.update_net_returns_after_retirement
    //let net_returns=((1+post_return)/(1+i_rate)-1);
    //---> return net_returns;

    


    //5.update_initial_withdrawl
    //let toDie_months=years_to_retirement*12;
    // let last_withdrawl=(monthly_expenses*Math.pow((1+inflation_rate/100),toDie));
    let count4=0;
    let initial_withdrawl=(m_expenses*12*(Math.pow((1+i_rate/100),years_to_retirement)));
    // initial

    let p =0;
    let I=Number(1+i_rate/100);
    let Y=Number(1+post_return/100);
    // if(I===Y)
    // {
    //   let p_previous_last=Number((Number(initial_withdrawl))*12*(1-(Math.pow(I/Y,(toDie_months/12))))/(1-I/Y);
    // }
    // else{
    //   let p_previous_last=Number((Number(initial_withdrawl))*12*(1-(Math.pow(I/Y,(toDie_months/12))))/(1-I/Y));
    // }

    let sum = 0;
    for(let i=0;i<years_to_retirement;++i)
    {
      sum+=(Math.pow(I,i)*Math.pow(Y,(toDie_months/12-i)))/(Math.pow(Y,toDie_months/12));
    }
    let p_previous_last = Number(sum)+initial_withdrawl;
    //-->return p_previous_last;
    //
    //6.update_extra_savings_required
    let shortfall_corpus=p_previous_last-savings;
    let extra_yearly_savings;
    // shortfall_corpus=shortfall_corpus*-1;
    if(shortfall_corpus>0){
      let power2=Math.pow((1+pre_return/100),years_to_retirement);
      extra_yearly_savings=shortfall_corpus/((power2-1)/(pre_return/100));

      return (
      <ScrollView style = {{flex:1,backgroundColor:'#ffffff'}}>
        
        <View style = {{flex:1,backgroundColor:'#b3ffd9',height:50,justifyContent:'center',padding:10}}>
            <Text style = {{color:'#000000',fontSize:19,padding:10}}>{m_expenses}</Text>
        </View>
        <View style = {{flexDirection:'column',padding:10}}>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>

              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Years To Retirement </Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
              <Text>Monthly Expenses {m_expenses}</Text>
            <Text>Monthly Savings {m_savings}</Text>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {((r_age-p_age).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center',
              backgroundColor:'#bab6b6',
              borderRadius:4

            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Monthly Expenses Just After Retirement </Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(monthly_expense.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Corpus Accumulated due to Savings</Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(savings.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Corpus Required at Retirement:</Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {p_previous_last.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          
            <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'black'}}>Shortfall Corpus</Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(shortfall_corpus.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>

            <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'black'}}>Extra Monthly Savings </Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(extra_yearly_savings.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
  else
  {
    let monthly_investment_should_be=p_previous_last*(pre_return/100)/((Math.pow((1+pre_return/100),years_to_retirement)-1)*(1+pre_return/100)*12);
    return(
      <ScrollView style = {{flex:1,backgroundColor:'#ffffff'}}>
        
        <View style = {{flex:1,backgroundColor:'#b3ffd9',height:50,justifyContent:'center',padding:10}}>
            <Text style = {{color:'#000000',fontSize:19,padding:10}}>{m_expenses}</Text>
            <Text></Text>
        </View>
        <View style = {{flexDirection:'column',padding:10}}>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Years To Retirement</Text>
              
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {((r_age-p_age).toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center',
              // backgroundColor:'#bab6b6',
              borderRadius:4

            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Monthly Expenses Just After Retirement </Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(monthly_expense.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Corpus Accumulated due to Savings</Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(savings.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Corpus Required at Retirement:</Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {p_previous_last.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>
          <View style = {{flexDirection:'column'}}>
            <View style = {{
              flex:1,
              alignItems:'center'
            }}>
              <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Appropriate Savings Instead of the Input Value </Text>
            </View>
            <View style = {{
                flex:1,
                alignItems:'center'
              }}>
                <Text style = {{fontWeight:'normal',fontSize:17,color:'#1a1a1a'}}>Rs. {(monthly_investment_should_be.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Text>
            </View>
          </View>          
        </View>

      </ScrollView>
      ); 
  }
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