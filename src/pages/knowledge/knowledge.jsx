import { Component } from 'react'
import { View } from '@tarojs/components'
import './knowledge.scss'
import { Images } from '../../static/images/Images'

export default class knowledge extends Component {
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
  }


  render () {
    const { windowWidth,windowHeight } = this.state
    return (
      <View className='knowledge' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='articleBox-knowledge' onClick={()=>{
            console.log('123');
          }}>
            <View className='articleImg-knowledge' style={{backgroundImage:`url(${Images.knowledge1})`,backgroundSize:'100% 100%'}}></View>
            <View className='articleTit-knowledge'>
                一个人做硬拉应该注意些什么？
            </View>
          </View>
          <View className='articleBox-knowledge' onClick={()=>{
            console.log('123');
          }}>
            <View className='articleImg-knowledge' style={{backgroundImage:`url(${Images.knowledge2})`,backgroundSize:'100% 100%'}}></View>
            <View className='articleTit-knowledge'>
                跑步机的正确使用方法。
            </View>
          </View>
          <View className='articleBox-knowledge' onClick={()=>{
            console.log('123');
          }}>
            <View className='articleImg-knowledge' style={{backgroundImage:`url(${Images.knowledge3})`,backgroundSize:'100% 100%'}}></View>
            <View className='articleTit-knowledge'>
              使用哑铃锻炼时应注意的细节！！！
            </View>
          </View>
      </View>
    )
  }
}
