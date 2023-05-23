import { Component } from 'react'
import { View,Text } from '@tarojs/components'
import './ordercourse.scss'
import Taro from '@tarojs/taro'
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
    this.mockKnoData = [
      {
        key:'1',
        courseImg:Images.course1,
        courseName:'深蹲训练',
        courseInfo:'标准深蹲x15；负重深蹲x10；拉伸。',
        courseOrder:true,
      },
      {
        key:'2',
        courseImg:Images.course2,
        courseName:'哑铃初级训练',
        courseInfo:'上半程哑铃弯曲x8；下半程哑铃弯举x8；全程哑铃弯举x8；拉伸。',
        courseOrder:true,
      },
    ]
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
        {
          this.mockKnoData.map(( (item,key) => {
              return (
                  <View className='courseBox-ordercourse' onClick={()=>{
                            Taro.navigateTo({
                              url:`/pages/coursedetail/coursedetail?id=${key}`,
                      })
                  }}>
                    <View className='courseCard-ordercourse'>
                      <View className='courseImg-ordercourse' style={{backgroundImage:`url(${item.courseImg})`,backgroundSize:'100% 100%'}}></View>
                      <View className='courseDetail-ordercourse'>
                        <View className='courseName-ordercourse'>{item.courseName}</View>
                        <View className='courseInfo-ordercourse'>{item.courseInfo}</View>
                        <View className='courseOrder-ordercourse'> <Icon name="order" size="24" color="#64b578"/>{ item.courseOrder ? '可预约' : '预约已满'}</View>
                      </View>
                    </View>
                  </View>
                )
            }))
        }

        {/* <View className='courseBox-ordercourse'>
          <View className='courseCard-ordercourse'>
            <View className='courseImg-ordercourse' style={{backgroundImage:`url(${Images.course2})`,backgroundSize:'100% 100%'}}></View>
            <View className='courseDetail-ordercourse'>
              <View className='courseName-ordercourse'>哑铃初级训练</View>
              <View className='courseInfo-ordercourse'><Text numberOfLines={numberOfLines}>上半程哑铃弯曲x8；下半程哑铃弯举x8；全程哑铃弯举x8；拉伸。</Text></View>
              <View className='courseOrder-ordercourse'> <Icon name="order" size="24" color="#fa2c19"/>可预约</View>
            </View>
          </View>
        </View> */}
      </View>
    )
  }
}
