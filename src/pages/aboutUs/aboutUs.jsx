import { Component } from 'react'
import { View,Image } from '@tarojs/components'
import './aboutus.scss'

export default class aboutus extends Component {
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
      <View className='aboutUs' style={{width:windowWidth,height:windowHeight}}>
        <View className='viewBox'>
          <Image className='viewImg' src={require("../../static/images/aboutUs/us1.jpg")}></Image> 
          <View>乐淘掌上健身房</View>
        </View>
        <View className='infoBox'>
          <View style={{marginLeft:'10px'}}> 企业介绍</View>
          <View style={{marginRight:'10px',fontWeight:'bold'}}> {'>'} </View>
        </View>
        <View className='infoBox'>
          <View style={{marginLeft:'10px'}}>联系我们</View>
          <View style={{marginRight:'10px'}}>ggysh_7@163.com</View>
        </View>
      </View>
    )
  }
}
