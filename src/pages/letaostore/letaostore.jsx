import { Component } from 'react'
// import Taro from '@tarojs/taro'
import { View,Swiper,SwiperItem,Image,Icon } from '@tarojs/components'
import './letaostore.scss'
import { Images } from '../../static/images/Images'
import { Input } from '@nutui/nutui-react-taro';
import { OsIcon } from 'ossaui'

export default class user extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',
    }
    this.mockData = {
        swiperArr:[
          Images.swiperO,
          Images.swiperT
        ]
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
      <View className='letaostore' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='bodyBg-store'></View>
        <View className='body-store'> 
          <View className='header-store'>
            <View className='icon-store'>乐淘</View>
            <View>正品优质商品保障</View>
          </View>
          <View className='searchBox-store'>
            <View className='search-store'>
              <Icon size='20' type='search' style={{marginLeft:'15px'}}/>
              <Input value='' placeholder=' 输入您想要的商品' style={{width:'100%'}}></Input>
            </View>
            <OsIcon type='detail-cart' onClick={()=>{
              console.log('123')
            }}/>
          </View>
          <Swiper
            className='letaoSwiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
              {/* {
                this.mockData.swiperArr.map((item,key)=>{
                  console.log(item,'123456');
                  return (
                    <SwiperItem>
                      <View className='demo-text' key={key}><Image src={require(item)} style={{width:'100%' , height: '300px'}}></Image></View>
                    </SwiperItem>
                  )
                })
              } */}
            <SwiperItem>
              <View className='swiperItem'><Image src={require(`../../static/images/letaostore/swiper1.jpg`)} style={{width:'100%' , height: '100%',borderRadius:'8px'}}></Image></View>
            </SwiperItem>
            <SwiperItem>
              <View className='swiperItem'><Image src={require(`../../static/images/letaostore/swiper2.jpg`)} style={{width:'100%' , height: '100%',borderRadius:'8px'}}></Image></View>
            </SwiperItem>
          </Swiper>
          <View className='classify-store'>
            <View className='classifyBox'>
              <Image className='classifyItem' src={require(`../../static/images/letaostore/imgbox1.jpg`)}></Image>
              <Image className='classifyItem' src={require(`../../static/images/letaostore/imgbox2.jpg`)}></Image>
            </View>
            <View className='classifyBox'>
              <Image className='classifyItem' src={require(`../../static/images/letaostore/imgbox3.jpg`)}></Image>
              <Image className='classifyItem' src={require(`../../static/images/letaostore/imgbox4.jpg`)}></Image>
            </View>
          </View>
          <View className='goodsBox-store'>
            <View className='goodsItem'>
              <Image className='goodsImg' src={require(`../../static/images/letaostore/goods1.png`)}></Image>
              <View className='goodsTit'>乐淘钢制哑铃 家用电镀纯钢哑铃 男 女 儿童通用 1~10公斤  健身器材</View>
              <View className='goodsPrice'>￥113.00</View>
            </View>
            <View className='goodsItem'>
              <Image className='goodsImg' src={require(`../../static/images/letaostore/goods2.png`)}></Image>
              <View className='goodsTit'>哑铃男士健身家用器材女壶铃练臂肌一对包胶六角亚玲套装宿舍学生</View>
              <View className='goodsPrice'>￥96.00</View>
            </View>
            <View className='goodsItem'>
              <Image className='goodsImg' src={require(`../../static/images/letaostore/goods3.png`)}></Image>
              <View className='goodsTit'>仰卧起坐辅助器健身器材家用运动锻炼器械男稳定器腹肌训练仰卧板</View>
              <View className='goodsPrice'>￥499.00</View>
            </View>
            <View className='goodsItem'>
              <Image className='goodsImg' src={require(`../../static/images/letaostore/goods4.png`)}></Image>
              <View className='goodsTit'>健身器材家用男士全套龙门架健身房器械室内多功能一体综合训练器</View>
              <View className='goodsPrice'>￥4396.00</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
