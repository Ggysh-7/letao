import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './knowledge.scss'
import { Images } from '../../static/images/Images'

export default class knowledge extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth:'100%',
      windowHeight:'100%',

    };
    //模拟数据
    this.mockKnoData = [
        {
          articleImg:Images.knowledge1,
          articleTit:'一个人做硬拉应该注意些什么？',
          articleAuthor:'杨海峰',
          articleContent:{
            firstMsg:'  硬拉详解——正确的动作姿势技术要领',
            secondMsg:'  硬拉是力量训练中的黄金动作！可以打造全身的块头和力量，',
            thirdMsg:'  “拉起的越多，肌肉增长的越多”！看似简单却不简单！但是只有精确的动作姿势，这样才可以得到最大的收获和避免受伤。',
            fourthMsg:'  一、起始动作:对于硬拉而言，一定要在起始动作中使身体各部位处于正确位置上;开始拉起重物之后，你就没有机会再做出调整了。',
            fifthMsg:'要点如下：双脚走近铃杆，站在杠铃正中，双脚间距大于肩宽一点儿。脚尖稍微指向外侧。铃杆对准脚中部，以便使铃杆尽量靠近双腿。胫骨应靠近或轻贴铃杆。',
            sixthMsg:'俯身，采用正握。双臂在双腿稍偏外侧下垂，但要靠近身体。手臂伸直，而且要在拉起重物的整个过程中保持伸直。',
            seventhMsg:'双膝弯曲，背部保持平直，臀部后移。如果你的柔韧性一般，应该把这些动作做得夸张一些。如果你的背部柔韧性非常好，要注意避免背部过度伸展。',
            eighthMsg:'要使髋部处于正确位置，你的大腿应该移至高于水平位置一两英寸处。此时你的髋部应高于深蹲最低点。如果你的髋部过低，你就会做出蹲起动作，或者先抬高髋部，然后再抬高背部，对下背部施加更大的压力。如果你的髋部过高，你就会做出双腿不动的硬拉。'
          }
        },
        {
          articleImg:Images.knowledge2,
          articleTit:'跑步机的正确使用方法。',
          articleAuthor:'杨海峰',
          articleContent:{
            firstMsg:'  在初次使用电动跑步机前，请先站在旁边熟悉一下如何控制它—比如启动、停机和速度调节等，等你熟悉了之后才可以使用。熟悉后按下跑步机开始的电源按钮。',
            secondMsg:'  按下start键，这时跑步机就已经开始运作了，它会自动选择速度为1，初学者可先以此速度为热身，大概热身五分钟，然后慢慢再根据自己的体质增加速度。',
            thirdMsg:'  速度模式：',
            fourthMsg:'  一般情况下，用双手抓住扶手，将机器开到1.6～3.2公里/小时的低速度，身体站直，向前看，用一只脚在跑带上"瓟"几下，尽量放松；接着站到跑步带随其一起运动，大概跑10分钟。在感觉适应后，再慢慢地把速度增加到3～5公里/小时，再保持这样的速度10分钟左右。最后，慢慢调低速度让机子停下来，缓慢减速直至停下来的时长大约为8分钟。',
            fifthMsg:'注意：如果身体状况不适合高强度运动的人千万不要选择快速度的跑步，请在医生的嘱咐或者教练的建议下进行跑步机锻炼，以免造成不可挽回的过失。',
            sixthMsg:'坡度模式：',
            seventhMsg:'调整坡度，跑步机上有排调整坡度的按钮，开启机器后，可以自主选择坡度，但不建议初学者提高坡度，在有一定经验后，可适当提高难度。比如康林KL1319特有5段速度直选功能、5段坡度直选功能，可根据自己的需要进行调整。',
            eighthMsg:'跑步机不用了最好关闭电源。切换按摩机头电源的正确顺序为将开关切到“OFF”的位置，然后再拨掉电源插头。另外，请勿放置地毯或任何手体在电源线上，跑步机有潮湿或变形，插头电源损坏时请勿使用。'
          }
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


  render () {
    const { windowWidth,windowHeight } = this.state
    return (
      <View className='knowledge' style={{minWidth:windowWidth,minHeight:windowHeight}}>
        {
          this.mockKnoData.map((item,key) => {
            // console.log('item.articleContent',item.articleContent);
            // console.log('item.articleContent.firstMsg',item.articleContent.firstMsg);
            return (
              <View key={key} className='articleBox-knowledge' onClick={()=>{
                Taro.navigateTo({
                  url:`/pages/knowledgeDetail/knowledgeDetail?title=${item.articleTit}&author=${item.articleAuthor}&content=${item.articleContent}&firstImg=${item.articleImg}
                  &firstMsg=${item.articleContent.firstMsg}&secondMsg=${item.articleContent.secondMsg}
                  &thirdMsg=${item.articleContent.thirdMsg}&fourthMsg=${item.articleContent.fourthMsg}
                  &fifthMsg=${item.articleContent.fifthMsg}&sixthMsg=${item.articleContent.sixthMsg}
                  &seventhMsg=${item.articleContent.seventhMsg}&eighthMsg=${item.articleContent.eighthMsg}`,
                })
              }}>
                <View className='articleImg-knowledge' style={{backgroundImage:`url(${item.articleImg})`,backgroundSize:'100% 100%'}}></View>
                <View className='articleTit-knowledge'>
                    {item.articleTit}
                </View>
              </View>
            )
          })
        }

        {/* <View className='articleBox-knowledge' onClick={()=>{
              console.log('123');
              Taro.navigateTo({
                url:'/pages/knowledgeDetail/knowledgeDetail',
              })
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
          </View> */}
      </View>
    )
  }
}
