import { Component } from 'react'
import Taro from '@tarojs/taro'
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

      mockDataNum:1,
      showActivity: false,
      searchWords:'' 
    }
    this.mockData = [
      {
        id:1,
        goodsImg:Images.goods1,
        goodsTit:'哑铃',
        goodsPrice:113.00,
      },
      {
        id:2,
        goodsImg:Images.goods2,
        goodsTit:'哑铃男士健身家用器材女壶铃练臂肌一对包胶六角亚玲套装宿舍学生',
        goodsPrice:96.00,
      },
      {
        id:3,
        goodsImg:Images.goods3,
        goodsTit:'仰卧起坐辅助器健身器材家用运动锻炼器械男稳定器腹肌训练仰卧板',
        goodsPrice:499.00,
      },
      {
        id:4,
        goodsImg:Images.goods4,
        goodsTit:'健身器材家用男士全套龙门架健身房器械室内多功能一体综合训练器',
        goodsPrice:4396.00,
      }
    ]
    this.mockDataAdd = [
      {
        id:1,
        goodsImg:Images.goods2,
        goodsTit:'哑铃男士健身家用器材女壶铃练臂肌一对包胶六角亚玲套装宿舍学生',
        goodsPrice:96.00,
      },
      {
        id:2,
        goodsImg:Images.goods2,
        goodsTit:'哑铃男士健身家用器材女壶铃练臂肌一对包胶六角亚玲套装宿舍学生',
        goodsPrice:96.00,
      },
      {
        id:3,
        goodsImg:Images.goods1,
        goodsTit:'乐淘钢制哑铃 家用电镀纯钢哑铃 男 女 儿童通用 1~10公斤  健身器材',
        goodsPrice:'￥113.00',
      },
      {
        id:4,
        goodsImg:Images.goods8,
        goodsTit:'健腹轮自动回弹收腹卷腹运动练腹肌神器男女家用肘撑滚轮健身器材',
        goodsPrice:'￥34.90',
      },
      {
        id:5,
        goodsImg:Images.goods1,
        goodsTit:'乐淘钢制哑铃 家用电镀纯钢哑铃 男 女 儿童通用 1~10公斤  健身器材',
        goodsPrice:'￥113.00',
      },
      {
        id:6,
        goodsImg:Images.goods2,
        goodsTit:'哑铃男士健身家用器材女壶铃练臂肌一对包胶六角亚玲套装宿舍学生',
        goodsPrice:'￥96.00',
      },
      {
        id:7,
        goodsImg:Images.goods3,
        goodsTit:'仰卧起坐辅助器健身器材家用运动锻炼器械男稳定器腹肌训练仰卧板',
        goodsPrice:'￥499.00',
      },
      {
        id:8,
        goodsImg:Images.goods4,
        goodsTit:'健身器材家用男士全套龙门架健身房器械室内多功能一体综合训练器',
        goodsPrice:'￥4396.00',
      },
      {
        id:9,
        goodsImg:Images.goods5,
        goodsTit:'R4动感单车家用锻炼自行车健身器材减肥运动室内超静音健身房专用',
        goodsPrice:'￥339.00',
      },
      {
        id:10,
        goodsImg:Images.goods6,
        goodsTit:'健身器材多功能举重床卧推架杠铃床深蹲架杠铃架杠铃套装家用健身',
        goodsPrice:'￥228.00',
      },
      {
        id:11,
        goodsImg:Images.goods7,
        goodsTit:'多功能俯卧撑支架训练板男练腹肌胸肌平板支撑训练器家用健身器材',
        goodsPrice:'￥29.90',
      },
      {
        id:12,
        goodsImg:Images.goods8,
        goodsTit:'健腹轮自动回弹收腹卷腹运动练腹肌神器男女家用肘撑滚轮健身器材',
        goodsPrice:'￥34.90',
      },
    ]
    
  }
  searchData = (keywords) => {
    console.log('keywords',keywords);
    this.setState({searchWords:keywords})
    const arr = this.mockData.filter((a)=>{
      console.log('a.goodsTit',a.goodsTit == keywords);
      return a.goodsTit == keywords
    })
    this.mockData = arr
  }
  getData = (i) => {
    // console.log('this.mockData456789',this.mockData);
    this.mockData.push(this.mockDataAdd[i])
  }
  componentWillMount () { 
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    this.setState({windowWidth:windowWidth,windowHeight:windowHeight})
  }
  componentDidMount () { 
    console.log(this.state.windowWidth,this.state.windowHeight);
  }
  onPullDownRefresh() {
    const i = this.state.mockDataNum
    console.log('this.state.mockDataNum',this.state.mockDataNum);
    this.getData(i);
  }
  onReachBottom() {
    this.setState({
      showActivity: true,
      mockDataNum:this.state.mockDataNum+1,
    });
    const i = this.state.mockDataNum
    console.log('this.state.mockDataNum',this.state.mockDataNum);
    this.getData(i);
  }
  render () {
    const { windowWidth,windowHeight,searchWords } = this.state
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
              <Icon size='20' type='search' style={{marginLeft:'15px'}} onClick={()=>{
                this.searchData("哑铃")
              }}/>
              <Input value={searchWords} placeholder=' 输入您想要的商品' style={{width:'100%'}}></Input>
            </View>
            <OsIcon type='detail-cart' onClick={()=>{
                Taro.navigateTo({
                  url:'/pages/shopcart/shopcart',
                })
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
            {
              this.mockData.map((item,key)=>{
                return(
                  <View className='goodsItem' key={key}>
                    <Image className='goodsImg' src={item.goodsImg}></Image>
                    <View className='goodsTit'>{item.goodsTit}</View>
                    <View className='goodsPrice'>￥{item.goodsPrice}</View>
                  </View>
                )
              })
            }
            {/* <View className='goodsItem'>
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
            </View> */}
          </View>
        </View>
      </View>
    )
  }
}
