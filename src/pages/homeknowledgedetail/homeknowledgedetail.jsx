import { Component } from 'react'
import { View } from '@tarojs/components'
import './homeknowledgedetail.scss'
import { Images } from '../../static/images/Images'

export default class homeknowledgedetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',

      //mock数据
      knoTit:'',
      knoAuthor:'',
      knoContent:'',
      firstImg:'',
      firstMsg:'',
      secondMsg:'',
      thirdMsg:'',
      fourthMsg:'',
      fifthMsg:'',
      sixthMsg:'',
      seventhMsg:'',
      eighthMsg:'',
    }
  }
  componentWillMount () { 
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;


    this.setState({ windowWidth:windowWidth,windowHeight:windowHeight})
  }

  componentDidMount () {
    // console.log(this.state);
  }


  render () {
    const { windowWidth,windowHeight } = this.state
    return (
      <View className='homeknowledgedetail' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='homeknowledgedetailBox'>
            <View className='homeknowledgedetailTit'>一对哑铃如何锻炼全身？</View>
            <View className='homeknowledgedetailAut'>杨海峰</View>
            {/* <View className='homeknowledgedetailCon'>{knoContent}</View> */}
            <View className='homeknowledgedetailCon'>哑铃训练是我们增强肌肉力量训练中，非常常见的训练方式。哑铃是很实用常见的健身器械，它能很方便、灵活的锻炼激活各个部位的肌肉，让肌肉得到全面发展增强。我们使用哑铃健身也不要一味不变的训练，也要不断调整训练计划。下面为大家分享一套哑铃训练，帮你过年回家锻炼全身肌肉。包括胸，背，肩，肱二，肱三，腿！动作过程中注意安全，以自身能力为基础，不要勉强去追求次数与组数。训练过程每个动作尽量慢一点，动作都做到位，体会每个肌群的发力。动作前活动热身，动作结束后整理放松。</View>
            {/* <View className='homeknowledgedetailCon'>{secondMsg}</View>
            <View className='homeknowledgedetailCon'>{thirdMsg}</View> */}
            <View className='homeknowledgedetailImg' style={{width:'90%',height:'200px',backgroundImage:`url(${Images.homeKnl})`,backgroundSize:'100% 100%'}}></View>
            <View style={{width:'100%',height:'50px',borderTop:'1px solid grey'}}></View>
        </View>
      </View>
    )
  }
}
