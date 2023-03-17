import { Component } from 'react'
import { View } from '@tarojs/components'
import './selfdefined.scss'

export default class selfdefined extends Component {
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

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { windowWidth,windowHeight } = this.state
    return (
      <View className='selfdefined' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='btnBox'>
          <View className='letaoBtn'>
            <View className='btnText'>添加运动</View>
          </View>
        </View>
      </View>
    )
  }
}
