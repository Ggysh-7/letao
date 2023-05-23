import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './user.scss'
import { OsIcon } from 'ossaui'
import { axios } from 'taro-axios'

export default class user extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',
    }
  }

  onGet = () => {
    axios({
      method: 'GET',
      url: 'https://localhost:3000/comments',
    })
    console.log('123');
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
        <View className='userBg'>
          <View className='userBox'>
            <View className='userAvatar'></View>
            <View className='userDetail'>
              <View className='userName'>ggg国语</View>
              <View className='suerSign'>我爱学习我很敬业</View>
            </View>
          </View>

          <View className='orderToday' onClick={()=>{
            this.onGet()
            console.log('gggysh')
          }}>
            <View className='orderTodayTit'>我的今日预约</View>
            <View className='orderTodayTitContent'>
              {/* <Ellipsis> */}
                今日暂无预约哦~ 
              {/* </Ellipsis> */}
            </View>
          </View>

          <View className='infoBox' onClick={()=>{
              Taro.navigateTo({
                url:'/pages/allorder/allorder',
              })
            }}>
            <View className='infoNam'>
              <OsIcon type='inform'></OsIcon>
              <View style={{marginLeft:'5px'}}>我的全部预约</View>
              
            </View>
            <View className='expandBtn'>{'>'}</View>
          </View>

          <View className='infoBox' onClick={()=>{
            console.log('123')
          }}>
            <View className='infoNam'>
              <OsIcon type='detail-cart'></OsIcon>
              <View style={{marginLeft:'5px'}}>我的购物车</View>
            </View>
            <View className='expandBtn'>{'>'}</View>
          </View>

          <View className='infoBox' onClick={()=>{
            console.log('123')
          }}>
            <View className='infoNam'>
              <OsIcon type='user'></OsIcon>
              <View style={{marginLeft:'5px'}}>我的个人资料</View>
            </View>
            <View className='expandBtn'>{'>'}</View>
          </View>

          <View className='infoBigbox'>
            <View className='infoBigboxItem' onClick={()=>{
              Taro.navigateTo({
                url:'/pages/aboutus/aboutus',
              })
            }}>
              <View className='infoNam'>
                <OsIcon type='my-group-buying'></OsIcon>
                <View style={{marginLeft:'5px'}}>关于我们</View>
              </View>
              <View className='expandBtn'>{'>'}</View>
            </View>
            <View style={{width:'100%',borderBottom:'1px solid grey',margin:' 7px  auto'}}></View>
            <View className='infoBigboxItem' onClick={()=>{
              console.log('123')
            }}>          
              <View className='infoNam'>
                <OsIcon type='service'></OsIcon>
                <View style={{marginLeft:'5px'}}>联系作者了解更多详情</View>
              </View>
              <View className='expandBtn'>{'>'}</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
