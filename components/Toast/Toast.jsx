import React,{Component} from 'react'
import classnames from 'classnames'
import Mask from '../Mask'
class Toast extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:props.visible
        }
        this.timer = null;
    }
    componentDidMount(){
        if(this.props.visible){
            this.enter();
        }
    }
    componentWillReceiveProps(nextProps){
        clearTimeout(this.timer);
        if(nextProps.visible){
            this.enter();
        }else{
            this.leave();
        }
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
    }
    enter(){
        const {duration} = this.props;
        this.setState({
            isShow:true
        })
        if(duration === 0){
            return;
        }
        this.timer = setTimeout(()=>{
            this.setState({
                isShow:false
            });
            clearTimeout(this.timer)
        },duration)
    }
    leave(){
        this.setState({
            isShow:false
        })
    }
    render(){
        const {visible,children,onMaskClick,className} = this.props;
        const cls = classnames({
            'toast-ui':true,
            'toast-open-ui':this.state.isShow,
            [className]:!!className
        })
        return(
            <div className={cls}>
                <div className="toast-container-ui">
                    {children}
                </div>
                <Mask visible={visible} type="transparent" onClose={onMaskClick}/>
            </div>
        )
    }
}

Toast.defaultProps = {
    visible:false,
    duration:2000,
    onMaskClick:()=>{}
}

export default Toast;