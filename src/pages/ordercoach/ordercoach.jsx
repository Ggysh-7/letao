import { Component } from 'react'
import { View } from '@tarojs/components'
import './ordercoach.scss'
import { Images } from '../../static/images/Images'

export default class ordercoach extends Component {
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
      <View className='ordercoach' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='coachBox-ordercoach' onClick={()=>{
          console.log('123')
        }}>
          <View className='coachCard-ordercoach'>
            <View className='coachImg-ordercoach' style={{backgroundImage:`url(${Images.coach1})`,backgroundSize:'100% 100%'}}></View>
            <View className='coachDetail-ordercoach'>
              <View className='coachName-ordercoach'>秦奋</View>
              <View className='coachInfo-ordercoach'>学校头衔：ISFT国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员；ISFT私人健身教练，私人裁判员；WKL终身荣誉会员</View>
              <View className='coachOrder-ordercoach'>可预约</View>
            </View>
          </View>
        </View>

        <View className='coachBox-ordercoach'>
          <View className='coachCard-ordercoach'>
            <View className='coachImg-ordercoach' style={{backgroundImage:`url(${Images.coach2})`,backgroundSize:'100% 100%'}}></View>
            <View className='coachDetail-ordercoach'>
              <View className='coachName-ordercoach'>秦奋</View>
              <View className='coachInfo-ordercoach'>学校头衔：ISFT国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员。</View>
              <View className='coachOrder-ordercoach'>可预约</View>
            </View>
          </View>
        </View>

        <View className='coachBox-ordercoach'>
          <View className='coachCard-ordercoach'>
            <View className='coachImg-ordercoach' style={{backgroundImage:`url(${Images.coach3})`,backgroundSize:'100% 100%'}}></View>
            <View className='coachDetail-ordercoach'>
              <View className='coachName-ordercoach'>秦奋</View>
              <View className='coachInfo-ordercoach'>学校头衔：ISFT国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员。</View>
              <View className='coachOrder-ordercoach'>可预约</View>
            </View>
          </View>
        </View>

        <View className='coachBox-ordercoach'>
          <View className='coachCard-ordercoach'>
            <View className='coachImg-ordercoach' style={{backgroundImage:`url(${Images.coach4})`,backgroundSize:'100% 100%'}}></View>
            <View className='coachDetail-ordercoach'>
              <View className='coachName-ordercoach'>秦奋</View>
              <View className='coachInfo-ordercoach'>学校头衔：ISFT国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员。</View>
              <View className='coachOrder-ordercoach'>可预约</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
