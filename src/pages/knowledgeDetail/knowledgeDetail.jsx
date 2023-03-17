import { Component } from 'react'
import { View } from '@tarojs/components'
import './knowledgedetail.scss'
import { getCurrentInstance } from '@tarojs/taro'

export default class knowledgedetail extends Component {
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
    // const msg = getCurrentInstance().router.params
    const knoTit = getCurrentInstance().router.params.title
    const knoAuthor = getCurrentInstance().router.params.author
    const knoContent = getCurrentInstance().router.params.content
    const firstImg = getCurrentInstance().router.params.firstImg
    const firstMsg = getCurrentInstance().router.params.firstMsg
    const secondMsg = getCurrentInstance().router.params.secondMsg
    const thirdMsg = getCurrentInstance().router.params.thirdMsg
    const fourthMsg = getCurrentInstance().router.params.fourthMsg
    const fifthMsg = getCurrentInstance().router.params.fifthMsg
    const sixthMsg = getCurrentInstance().router.params.sixthMsg
    const seventhMsg = getCurrentInstance().router.params.seventhMsg
    const eighthMsg = getCurrentInstance().router.params.eighthMsg

    this.setState({ windowWidth:windowWidth,windowHeight:windowHeight,
        knoTit:knoTit,knoAuthor:knoAuthor,knoContent:knoContent,firstImg:firstImg,
        firstMsg:firstMsg?firstMsg:'',secondMsg:secondMsg?secondMsg:'',thirdMsg:thirdMsg?thirdMsg:'',fourthMsg:fourthMsg?fourthMsg:'',fifthMsg:fifthMsg?fifthMsg:'',sixthMsg:sixthMsg?sixthMsg:'',seventhMsg:seventhMsg?seventhMsg:'',eighthMsg:eighthMsg?eighthMsg:'' })
        // console.log('knoContent:',knoContent);
        // console.log('typeof(knoContent):',typeof(knoContent));
  }

  componentDidMount () {
    // console.log(this.state);
  }


  render () {
    const { windowWidth,windowHeight,knoTit,knoAuthor,knoContent,firstImg,firstMsg,secondMsg,thirdMsg,fourthMsg,fifthMsg,sixthMsg,seventhMsg,eighthMsg } = this.state
    return (
      <View className='knowledgeDetail' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        <View className='knowledgeDetailBox'>
            <View className='knowledgeDetailTit'>{knoTit}</View>
            <View className='knowledgeDetailAut'>{knoAuthor}</View>
            {/* <View className='knowledgeDetailCon'>{knoContent}</View> */}
            <View className='knowledgeDetailCon'>{firstMsg}</View>
            <View className='knowledgeDetailImg' style={{width:'90%',height:'200px',backgroundImage:`url(${firstImg})`,backgroundSize:'100% 100%'}}></View>
            <View className='knowledgeDetailCon'>{secondMsg}</View>
            <View className='knowledgeDetailCon'>{thirdMsg}</View>
            <View className='knowledgeDetailCon'>{fourthMsg}</View>
            <View className='knowledgeDetailCon'>{fifthMsg}</View>
            <View className='knowledgeDetailCon'>{sixthMsg}</View>
            <View className='knowledgeDetailCon'>{seventhMsg}</View>
            <View className='knowledgeDetailCon'>{eighthMsg}</View>
            <View style={{width:'100%',height:'50px',borderTop:'1px solid grey'}}></View>
        </View>
      </View>
    )
  }
}
