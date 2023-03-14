import { Component } from 'react'
import { View } from '@tarojs/components'
import './selfdefined.scss'

export default class selfdefined extends Component {
  constructor(props){
    super(props);
    this.state = {


    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    // const {  } = this.state
    return (
      <View className='selfdefined'>
        自定义训练
      </View>
    )
  }
}
