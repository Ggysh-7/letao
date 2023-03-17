import { Component } from 'react'
import { View } from '@tarojs/components'
import './addtrain.scss'

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

  render () {
    const { windowWidth,windowHeight } = this.state
    return (
      <View className='addtrain' style={{width:windowWidth,height:windowHeight}}>
        123456
      </View>
    )
  }
}
