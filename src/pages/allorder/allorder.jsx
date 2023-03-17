import { Component } from 'react'
import { View } from '@tarojs/components'
import './allorder.scss'

export default class allorder extends Component {
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
      <View className='allorder' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        123
      </View>
    )
  }
}
