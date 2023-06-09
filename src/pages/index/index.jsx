import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',
    }
  }
  componentWillMount () { 
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    this.setState({windowWidth:windowWidth,windowHeight:windowHeight})
  }
  componentDidMount () { 
    console.log(this.state.windowWidth,this.state.windowHeight);
  }
   
  render () {
    const { windowWidth,windowHeight } = this.state
    return (
      <View className='index' style={{width:windowWidth,height:windowHeight}}>
        <View className='content-home'>
          <View className='title-home'>
            <Text> 掌  上  健  身  房 </Text>
          </View>

          <View className='nav-home'>
            <View className='navItem-home' onClick={()=>{
              Taro.navigateTo({
                url:'/pages/knowledge/knowledge',
              })
            }}>        
              <Image className='navItemImg-home'
                src={require('/src/static/icons/commonSense.png')}
              />
              <View className='navItemTit'>健身常识</View>
            </View>
            <View className='navItem-home' onClick={()=>{
              console.log('123');
              Taro.navigateTo({
                url:'/pages/ordercoach/ordercoach',
              })
            }}>
              <Image className='navItemImg-home'
                  src={require("/src/static/icons/coach.png")}
              />
              <View className='navItemTit'>预约教练</View>
            </View>
            <View className='navItem-home' onClick={()=>{
              console.log('123');
              Taro.navigateTo({
                url:'/pages/ordercourse/ordercourse',
              })
            }}>
              <Image className='navItemImg-home'
                src={require("/src/static/icons/schedule.png")}
              />
              <View className='navItemTit'>预约课程</View>
            </View>
            <View className='navItem-home' onClick={()=>{
              Taro.navigateTo({
                url:'/pages/selfdefined/selfdefined'
              })
            }}>
              <Image className='navItemImg-home'
                src={require('/src/static/icons/userDefined.png')}
              />
              <View className='navItemTit'>自定义训练</View>
            </View>
          </View>

          <View className='knowledge-home' onClick={()=>{
            Taro.navigateTo({
              url:'/pages/homeknowledgedetail/homeknowledgedetail',
            })
          }}>
            <View className='knowledgeImg-home'></View>
            <View className='knowledgeTit-home'>
                一对哑铃如何锻炼全身？
            </View>
          </View>
          
        </View>
      </View>
    )
  }
}
