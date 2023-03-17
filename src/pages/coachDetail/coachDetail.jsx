import { Component } from 'react'
import { View } from '@tarojs/components'
import './coachdetail.scss'
import { getCurrentInstance } from '@tarojs/taro'
import { Images } from '../../static/images/Images'

export default class coachdetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',

      coachId:null,

    }
    this.mockData = [
      {
        key:'1',
        coachImg:Images.coach1,
        coachName:'秦慧昕',
        coachInfo:'学校头衔：CFLS2014年国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员；XHQ私人健身教练，XHQ私人裁判员；CFPL终身荣誉会员',
        coachMajor:'力量训练师、综合格斗技术裁判',
        coachHonor:'CFS终身荣誉会员、CFPL终身荣誉会员',
        coachOrder:true,
      },
      {
        key:'2',
        coachImg:Images.coach2,
        coachName:'侯波文',
        coachInfo:'学校头衔：KFCC世界自由摔跤金牌；WBH私人健身教练；KFC终身荣誉会员',
        coachMajor:'睡眠质量监测师、综合格斗技术教练',
        coachHonor:'KFC终身荣誉会员',
        coachOrder:false,
      },
      {
        key:'3',
        coachImg:Images.coach3,
        coachName:'夏狮伟',
        coachInfo:'学校头衔：CFLS2016年国际体能大赛冠军；CFS世界自由搏击联合会综合格斗金牌；WSX私人健身教练，WSX私人裁判员；CFPL终身荣誉会员',
        coachMajor:'散打技术指导员、自由搏击技术教练',
        coachHonor:'CFS终身荣誉会员、CFPL终身荣誉会员',
        coachOrder:true,
      },
      {
        key:'4',
        coachImg:Images.coach4,
        coachName:'徐隆',
        coachInfo:'学校头衔：CFS2022年国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员；LX私人健身教练，XL私人裁判员；CFPL终身荣誉会员',
        coachMajor:'体能训练师、自由搏击技术裁判',
        coachHonor:'CFS终身荣誉会员、CFPL终身荣誉会员',
        coachOrder:false,
      },
      {
        key:'5',
        coachImg:Images.coach4,
        coachName:'魏亦同',
        coachInfo:'学校头衔：CFS2019年国际体能大赛冠军；WFK世界自由搏击联合会综合格斗裁判员；TYW私人健身教练，TYW私人裁判员；CFPL终身荣誉会员',
        coachMajor:'力量训练时、综合格斗技术裁判',
        coachHonor:'CFS终身荣誉会员、CFPL终身荣誉会员',
        coachOrder:false,
      },
    ]
  }
  componentWillMount () { 
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;

    const coachId = getCurrentInstance().router.params.id;

    this.setState({ windowWidth:windowWidth,windowHeight:windowHeight,coachId:coachId})
  }

  componentDidMount () {
  }


  render () {
    const { windowWidth,windowHeight,coachId } = this.state
    return (
      <View className='coachDetail' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='coachNam'>{ this.mockData[coachId].coachName }</View>
        <View className='coachDetail'>
          <View className='coachCardTit'>学校头衔：</View>
          <View className='coachCardBody'>{ this.mockData[coachId].coachInfo }</View>
          <View className='coachCardTit'>擅长专业：</View>
          <View className='coachCardBody'>{ this.mockData[coachId].coachMajor }</View>
          <View className='coachCardTit'>职业荣誉：</View>
          <View className='coachCardBody'>{ this.mockData[coachId].coachHonor }</View>
          <View className='coachImg' style={{backgroundImage:`url(${this.mockData[coachId].coachImg})`,backgroundSize:'100% 100%'}}></View>
          { 
            this.mockData[coachId].coachOrder ?
             <View className='btnBox'>
              <View  iew className='letaoBtn' onClick={()=>{
                console.log('123');
              }}>
                <View className="btnText">预约</View>
              </View>
            </View>
            :
            <View className='btnBox'>
              <View  iew className='letaoBtn'>
                <View className="btnText">预约已满了哦~</View>
              </View>
            </View>
          }
          {/* <View className='btnBox'>
            <View  iew className='letaoBtn'>
              <View className="btnText">{ this.mockData[coachId].coachOrder ? '预约' : '预约已满了哦~' }</View>
            </View>
          </View> */}
        </View>
        <View style={{width:'100%',height:'80px'}}></View>
      </View>
    )
  }
}
