import { Component } from 'react'
import { View } from '@tarojs/components'
import './user.scss'
// import  React from "react";
// import { Ellipsis } from '@nutui/nutui-react';

export default class user extends Component {
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
      <View className='user' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='userBox'>
          <View className='userAvatar'></View>
          <View className='userDetail'>
            <View className='userName'>ggg国语</View>
            <View className='suerSign'>我爱学习我很敬业</View>
          </View>
        </View>

        <View className='orderToday' onClick={()=>{
          console.log('123')
        }}>
          <View className='orderTodayTit'>我的今日预约</View>
          <View className='orderTodayTitContent'>
            {/* <Ellipsis> */}
              今日暂无预约哦~ 
              溢出没省略号溢出没省略号溢出没省略号溢出没省略号溢出没省略号
              溢出没省略号溢出没省略号溢出没省略号溢出没省略号溢出没省略号
              溢出没省略号溢出没省略号溢出没省略号溢出没省略号溢出没省略号
            {/* </Ellipsis> */}
          </View>
        </View>

        <View className='infoBox' onClick={()=>{
          console.log('123')
        }}>
          <View className='infoNam'>我的全部预约</View>
          <View className='expandBtn'>{'>'}</View>
        </View>

        <View className='infoBox' onClick={()=>{
          console.log('123')
        }}>
          <View className='infoNam'>我的购物车</View>
          <View className='expandBtn'>{'>'}</View>
        </View>

        <View className='infoBox' onClick={()=>{
          console.log('123')
        }}>
          <View className='infoNam'>我的个人资料</View>
          <View className='expandBtn'>{'>'}</View>
        </View>

        <View className='infoBigbox'>
          <View className='infoBigboxItem' onClick={()=>{
            console.log('123')
          }}>
            <View className='infoNam'>关于我们</View>
            <View className='expandBtn'>{'>'}</View>
          </View>
          <View style={{width:'100%',borderBottom:'1px solid grey',margin:' 7px  auto'}}></View>
          <View className='infoBigboxItem' onClick={()=>{
            console.log('123')
          }}>          
            <View className='infoNam'>联系作者了解更多详情</View>
            <View className='expandBtn'>{'>'}</View>
          </View>
        </View>

      </View>
    )
  }
}
