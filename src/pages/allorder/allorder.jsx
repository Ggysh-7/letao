import { Component } from 'react'
import { View } from '@tarojs/components'
import './allorder.scss'
import { Images } from '../../static/images/Images'

export default class allorder extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',

      tabValue:true,
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
    const { windowWidth,windowHeight,tabValue } = this.state
    return (
      <View className='allorder' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='letaoTab'>
          <View className={tabValue ? 'letaoTabItemActive' : 'letaoTabItemDeactive'} onClick={()=>{
            this.setState({tabValue:true})
          }}>
            预约的课程
          </View>
          <View className={tabValue ? 'letaoTabItemDeactive' : 'letaoTabItemActive'} onClick={()=>{
            this.setState({tabValue:false})
          }}>
            预约的教练
          </View>
        </View>
        {
          tabValue ? 
          <View className='tabPageCourse'>
            <View className='courseCard-allorder'>
              <View className='courseImg-allorder' style={{backgroundImage:`url(${Images.course1})`,backgroundSize:'100% 100%'}}></View>
              <View className='courseDetail-allorder'>
                <View className='courseName-allorder'>深蹲训练</View>
                <View className='courseInfo-allorder'>标准深蹲x15；负重深蹲x10；拉伸。</View>
              </View>
            </View>
          </View> 
          :
          <View className='tabPageCoach'>
            <View className='coachCard-allorder'>
              <View className='coachImg-allorder' style={{backgroundImage:`url(${Images.coach1})`,backgroundSize:'100% 100%'}}></View>
              <View className='coachDetail-allorder'>
                <View className='coachName-allorder'>秦慧昕</View>
                <View className='coachInfo-allorder'>学校头衔：CFLS2014年国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员；XHQ私人健身教练，XHQ私人裁判员；CFPL终身荣誉会员</View>
              </View>
            </View>
          </View> 
        }
      </View>
    )
  }
}
