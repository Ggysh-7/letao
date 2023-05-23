import { Component } from 'react'
import { View, Input, Button } from '@tarojs/components'
import './selfdefined.scss'

export default class selfdefined extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',
      cardYN:false,
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
    const { windowWidth,windowHeight,cardYN } = this.state
    return (
      <View className='selfdefined' style={{minWidth:windowWidth,minHeight:windowHeight}}>
          <View className='selfdefinedBox'>
            <View className='selfdefinedItem'>请输入训练项目名称：<Input placeholder='请输入'/></View>
            <View className='selfdefinedItem'>请输入训练项目组数：<Input placeholder='请输入'/><View>组</View></View>
            <View className='selfdefinedItem'>请输入每组训练时间：<Input placeholder='请输入'/><View>秒</View></View>
            <View className='selfdefinedItem'>请输入训练组间间隔时间：<Input placeholder='请输入'/><View>秒</View></View>
            <Button onClick={()=>{
              this.setState({cardYN:!cardYN})
            }}>确定</Button>
          </View>

            {
              cardYN ? (<View className='xunlianCard'>
              <View>项目名称：俯卧撑</View>
              <View>项目组数：1</View>
              <View>训练时间：1 秒</View>
              <View>组间间隔时间：1 秒</View>
            </View>) : null
            }


      </View> 
    )
  }
}
