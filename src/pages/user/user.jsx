import { Component } from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './user.scss'

export default class user extends Component {
  constructor(props){
    super(props);
    this.state = {

      swiperImg:[
        {
          imgSrc:'/static/tabBar/home.png',
        },
        {
          imgSrc:'/static/tabBar/home.png',
        },
      ],
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { swiperImg } = this.state
    return (
      <View className='user'>
        <Text>我的123</Text>
          <Swiper
            className='swiper-home'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
              {
                swiperImg.map((item,index)=>{
                  return(
                    <SwiperItem key={index}>
                      <Image
                        style='width: 100%;height: 100%;'
                        src={item.imgSrc}
                      />
                    </SwiperItem>
                  )
                })
              }
          </Swiper>
      </View>
    )
  }
}
