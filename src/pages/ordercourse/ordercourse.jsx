import { Component } from 'react'
import { View,Text } from '@tarojs/components'
import './ordercourse.scss'
import { Images } from '../../static/images/Images'
import { Icon } from '@nutui/nutui-react-taro';

export default class ordercourse extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',
      numberOfLines:Number(3)
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
    const { windowWidth,windowHeight,numberOfLines } = this.state
    return (
      <View className='ordercourse' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='courseBox-ordercourse' onClick={()=>{
          console.log('123')
        }}>
          <View className='courseCard-ordercourse'>
            <View className='courseImg-ordercourse' style={{backgroundImage:`url(${Images.course1})`,backgroundSize:'100% 100%'}}></View>
            <View className='courseDetail-ordercourse'>
              <View className='courseName-ordercourse'>深蹲训练</View>
              <View className='courseInfo-ordercourse'>标准深蹲x15；负重深蹲x10；拉伸。</View>
              <View className='courseOrder-ordercourse'> <Icon name="order" size="24" color="#64b578"/>可预约</View>
            </View>
          </View>
        </View>

        <View className='courseBox-ordercourse'>
          <View className='courseCard-ordercourse'>
            <View className='courseImg-ordercourse' style={{backgroundImage:`url(${Images.course2})`,backgroundSize:'100% 100%'}}></View>
            <View className='courseDetail-ordercourse'>
              <View className='courseName-ordercourse'>深蹲训练</View>
              <View className='courseInfo-ordercourse'><Text numberOfLines={numberOfLines}>标准深蹲x15；负重深蹲x10；拉伸。标准深蹲x15；负重深蹲x10；拉伸。标准深蹲x15；负重深蹲x10；拉伸。标准深蹲x15；负重深蹲x10；拉伸。</Text></View>
              <View className='courseOrder-ordercourse'> <Icon name="order" size="24" color="#fa2c19"/>可预约</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
