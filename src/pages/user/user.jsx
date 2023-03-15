import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './user.scss'

export default class user extends Component {
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
      <View className='user' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='userBox'>
          <View className='userAvatar'></View>
          <View className='userDetail'>
            <View className='userName'>ggg国语</View>
            <View className='suerSign'>我爱学习我很敬业</View>
          </View>
        </View>
      </View>
    )
  }
}
