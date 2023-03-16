import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './ordercoach.scss'
import { Images } from '../../static/images/Images'

export default class ordercoach extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',
    }
    this.mockKnoData = [
      {
        key:'1',
        coachImg:Images.coach1,
        coachName:'秦慧昕',
        coachInfo:'学校头衔：CFLS2014年国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员；XHQ私人健身教练，XHQ私人裁判员；CFPL终身荣誉会员',
        coachOrder:true,
      },
      {
        key:'2',
        coachImg:Images.coach2,
        coachName:'侯波文',
        coachInfo:'学校头衔：KFCC世界自由摔跤金牌；WBH私人健身教练；KFC终身荣誉会员',
        coachOrder:false,
      },
      {
        key:'3',
        coachImg:Images.coach3,
        coachName:'夏狮伟',
        coachInfo:'学校头衔：CFLS2016年国际体能大赛冠军；CFS世界自由搏击联合会综合格斗金牌；WSX私人健身教练，WSX私人裁判员；CFPL终身荣誉会员',
        coachOrder:true,
      },
      {
        key:'4',
        coachImg:Images.coach4,
        coachName:'徐隆',
        coachInfo:'学校头衔：CFS2022年国际体能大赛亚军；WFK世界自由搏击联合会综合格斗裁判员；LX私人健身教练，XL私人裁判员；CFPL终身荣誉会员',
        coachOrder:false,
      },
      {
        key:'5',
        coachImg:Images.coach4,
        coachName:'魏亦同',
        coachInfo:'学校头衔：CFS2019年国际体能大赛冠军；WFK世界自由搏击联合会综合格斗裁判员；TYW私人健身教练，TYW私人裁判员；CFPL终身荣誉会员',
        coachOrder:false,
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
    const { windowWidth,windowHeight } = this.state
    return (
      <View className='ordercoach' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        {
          this.mockKnoData.map(( (item,key) => {
              return (
                <View className='coachBox-ordercoach' onClick={()=>{
                  Taro.navigateTo({
                          url:`/pages/coachDetail/coachDetail?id=${key}`,
                  })
                }}>
                  <View className='coachCard-ordercoach'>
                    <View className='coachImg-ordercoach' style={{backgroundImage:`url(${item.coachImg})`,backgroundSize:'100% 100%'}}></View>
                    <View className='coachDetail-ordercoach'>
                      <View className='coachName-ordercoach'>{ item.coachName }</View>
                      <View className='coachInfo-ordercoach'>{ item.coachInfo }</View>
                      <View className='coachOrder-ordercoach'>{ item.coachOrder ? '可预约' : '预约已满'}</View>
                    </View>
                  </View>
                </View>
              )
          }))
        }


        {/* <View className='coachBox-ordercoach' onClick={()=>{
          Taro.navigateTo({
                  url:`/pages/knowledgeDetail/knowledgeDetail?id=${key}`,
          })
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
        </View> */}
      </View>
    )
  }
}
