import { Component } from 'react'
import { View } from '@tarojs/components'
import './coursedetail.scss'
import { getCurrentInstance } from '@tarojs/taro'
import { Images } from '../../static/images/Images'
import { OsIcon,OsToast } from 'ossaui'

export default class coursedetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',

      courseId:null,
      isOrder:false,
      unOrder:false,
    }
    this.mockData = [
      {
        key:'1',
        courseImg:Images.course1,
        courseName:'深蹲训练',
        coursecoach:'侯波纹',
        courseInfo:'标准深蹲x15；负重深蹲x10；拉伸。',
        courseTime:'2023年04月01号-2023年04月30日',
        courseAction:' 14：00-14：20 ',
        courseOrder:true,
      },
      {
        key:'2',
        courseImg:Images.course2,
        courseName:'哑铃初级训练',
        coursecoach:'东吴晨',
        courseInfo:'上半程哑铃弯曲x8；下半程哑铃弯举x8；全程哑铃弯举x8；拉伸。',
        courseTime:'2023年04月01号-2023年04月30日',
        courseAction:' 16：00-16：20 ',
        courseOrder:true,
      },
    ]
  }
  componentWillMount () { 
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;

    const courseId = getCurrentInstance().router.params.id;

    this.setState({ windowWidth:windowWidth,windowHeight:windowHeight,courseId:courseId})
  }

  componentDidMount () {
  }


  render () {
    const { windowWidth,windowHeight,courseId,isOrder,unOrder } = this.state
    return (
      <View className='courseDetail' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='courseNam'>{ this.mockData[courseId].courseName }</View>
        <View className='courseDetail'>
          <View className='courseCardTit'>课程教练：</View>
          <View className='courseCardBody'>{ this.mockData[courseId].coursecoach }</View>
          <View className='courseCardTit'>课程内容：</View>
          <View className='courseCardBody'>{ this.mockData[courseId].courseInfo }</View>
          <View className='courseCardTit'>课程周期：</View>
          <View className='courseCardBody'>{ this.mockData[courseId].courseTime }</View>
          <View className='courseCardTit'>每日上课时间：</View>
          <View className='courseCardBody'>{ this.mockData[courseId].courseAction }</View>
          {/* <View className='courseImg' style={{backgroundImage:`url(${this.mockData[courseId].courseImg})`,backgroundSize:'100% 100%'}}></View> */}
          { 
            this.mockData[courseId].courseOrder ?
             <View className='btnBox'>
              <View  iew className='letaoBtn' onClick={()=>{
                // this.setState({isOrder:!isOrder})
              }}>
                { isOrder ? <View className="btnText" onClick={()=>{this.setState({unOrder:!unOrder,isOrder:!isOrder})}}>已预约</View>:<View className="btnText" onClick={()=>{this.setState({isOrder:!isOrder})}}>预约</View> }
              </View>
            </View>
            :
            <View className='btnBox'>
              <View  iew className='letaoBtn'>
                <View className="btnText">预约已满了哦~</View>
              </View>
            </View>
          }
        </View>
        <View style={{width:'100%',height:'80px'}}></View>
        <OsToast isShow={isOrder} text='预约成功'/>
        <OsToast isShow={unOrder} text='取消成功'/>
      </View>
    )
  }
}
