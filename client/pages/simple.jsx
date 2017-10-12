import React,{Component} from 'react'
import PaInput from 'components/PaInput'
import NewSwitch from 'components/NewSwitch/NewSwitch'

class Simple extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }
    render(){
        return(
            <div className="simple">
                <h3>hello world</h3>
                <div>hello react</div>
                <PaInput title="随意" value={this.state.value} onChange={(value)=>{this.handleChange(value)}}/>
                <p>您输入的是：{this.state.value}</p>
                <NewSwitch />
            </div>
        )
    }
    handleChange(value){
        this.setState({
            value:value
        })
    }
}

export default Simple;