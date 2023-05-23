import { Component } from 'react'
import { View,Radio,Image } from '@tarojs/components'
import './shopcart.scss'
import { Images } from '../../static/images/Images';

export default class shopcart extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',
      sum:209,
      checkArr:[
        true,
        true,
        false,
      ],
      goodschecked:false,
    }
    this.mockData = [
      {
        id:1,
        goodsImg:Images.goods1,
        goodsTit:'乐淘钢制哑铃 家用电镀纯钢哑铃 男 女 儿童通用 1~10公斤  健身器材',
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
        goodsTit:'仰卧起坐辅助器健身器材家用运动锻炼器械男稳定器腹肌训练',
        goodsPrice:499.00,
      },
    ]

  }

  addPrice = () => {
    console.log('addPrice');
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
    const { windowWidth,windowHeight,checkArr,sum } = this.state
    return (
      <View className='shopcart' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        {
          this.mockData.map((item,index)=>{
            return (
              <View className='goodsgroup' key={index}>
                <Radio value={item.goodsPrice} checked={checkArr[index]} onChange={this.addPrice()} style={{margin: 'auto 10px' }}></Radio>
                <View className='goodsimg'><Image style={{width: '100%',height: '100%',borderRadius:'8px'}} src={item.goodsImg}/></View>
                <View className='goodsbox'>
                  <View className='goodstit'>{item.goodsTit}</View>
                  <View className='goodsprice'>￥{item.goodsPrice}</View>
                </View>
              </View>
            )
          })
        }
        <View className='allpricebox'>
          <View className='pricebox'>￥{sum}</View>
          <View className='jiesuanbtn'>结算</View>  
        </View>
      </View>
    )
  }
}
