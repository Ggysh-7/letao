
import { Component } from 'react'
import { View,Image,Input } from '@tarojs/components'
import './friendgroup.scss'
import { Images } from '../../static/images/Images'
import { OsIcon,OsToast } from 'ossaui'

export default class friendgroup extends Component {
  constructor(props){
    super(props);
    this.state = {
        windowWidth:'100%',
        windowHeight:'100%',

        stateLike:false,
        stateTalk:false,
        talkValue:'',
    }
    this.mockData = [
        {
            id:1,
            userAvatar:Images.xlAvatar,
            userNam:'叫我龙哥',
            userText:'啤酒脏腰小烧烤 叫我龙哥你记好！！',
            stateLike:true,
            stateTalk:false,
            talkValue:'',
            userTextImgArr:[
                Images.xlImg,
            ]
        },
        {
            id:2,
            userAvatar:Images.wytAvatar,
            userNam:'魏来很美好',
            userText:'在给女朋友做晚饭 嘤嘤嘤',
            stateLike:false,
            stateTalk:false,
            talkValue:'',
            userTextImgArr:[
                Images.wytImg,
            ]
        },
        {
            id:3,
            userAvatar:Images.xswAvatar,
            userNam:'夏E谋',
            userText:'##是结束也是开始',
            stateLike:false,
            stateTalk:false,
            talkValue:'',
            userTextImgArr:[
                Images.xswImg,
            ]
        },
        {
            id:4,
            userAvatar:Images.qhxAvatar,
            userNam:'无极剑圣秦蒙面',
            userText:'强迫老大给我染头',
            stateLike:true,
            stateTalk:false,
            talkValue:'',
            userTextImgArr:[
                Images.qhxImg,
            ]
        },
    ]
  }
  componentWillMount () { 
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    this.setState({windowWidth:windowWidth,windowHeight:windowHeight})
  }
  componentDidMount () { 

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { windowWidth,windowHeight,stateLike,stateTalk,talkValue } = this.state
    return (
      <View className='friendgroup' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='groupBg' style={{backgroundImage:`url(${Images.groupBg})`,backgroundSize:'100% 100%'}}>
            <View className='groupMore'>
                {/* <View className='btnBox'><OsIcon type='compile'/></View> */}
                <View className='btnBox'><OsIcon type='share' color='black'/></View>
            </View>
            <View className='gropAvatar'><Image className='gropAvatar' src={require(`../../static/images/avatar.jpg`)}></Image></View>
        </View>
        {
            this.mockData.map((item,key)=>{
                return (
                    <View className='gropuCon'>
                        <View className='userBox'>
                            
                            <View className='userAvatar' style={{backgroundImage:`url(${item.userAvatar})`,backgroundSize:'100% 100%'}}></View>
                            
                            <View className='userTextBox'>
                                <View className='userNam'>{ item.userNam }</View>
                                <View className='userText'>{ item.userText }</View>
                                <View className='userTextImgArr'>
                                    {
                                        item.userTextImgArr.length == 0 ? 
                                        console.log('数组为空') 
                                        : 
                                        item.userTextImgArr.map((value,index) => {
                                            return (
                                                <View className='userTextImg' style={{backgroundImage:`url(${value})`,backgroundSize:'100% 100%'}}></View>
                                            )
                                        })
                                    }
                                </View>
                                <View className='moreBtn'>
                                    <View className='btnBox' onClick={()=>{
                                        this.setState({ stateLike:!stateLike }) 
                                    }}>
                                        { stateLike ? <OsIcon type='like-selected'/> : <OsIcon type='like'/> }
                                    </View>
                                    <View className='btnBox' onClick={()=>{
                                        this.setState({ stateTalk:!stateTalk })
                                    }}>
                                        <OsIcon type='compile'/>
                                    </View>
                                </View>
                                {
                                    stateTalk ? 
                                    <Input type='text' className='talkInput' placeholder='请输入'  maxlength='50' onKeyboardHeightChange={()=>{
                                        return (<View className='talkBox'>123</View>)
                                    }}></Input> 
                                    :
                                    ''
                                }

                            </View>

                        </View>
                    </View>
                )
            })
        }
        <OsToast isShow={stateLike} text='点赞成功'/>
        {/* <View className='gropuCon'>
            <View className='userBox'>
                <View className='userAvatar'><Image className='userAvatar' src={require(`../../static/images/group/xlAvatar.jpg`)}></Image></View>
                <View className='userTextBox'>
                    <View className='userNam'>叫我龙哥</View>
                    <View className='userText'>啤酒搭配小烧烤 得劲！！</View>
                    <View className='userTextImgArr'>
                        <View className='userTextImg'><Image className='userTextImg' src={require(`../../static/images/group/xlImg.jpg`)}></Image></View>
                    </View>
                    <View className='moreBtn'></View>
                </View>
            </View>
        </View> */}
      </View>
    )
  }
}
