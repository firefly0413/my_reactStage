import React,{Component} from 'react'

function PPHOC(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            const props = Object.assign({}, this.props, {
                onChange: (status)=>{
                    let str = status?'开':'关';
                    alert(str)
                }
            })
            return (
                <div>
                    <h2>new Switch</h2>
                    <WrappedComponent {...props}/>
                </div>
            )
        }
    }
}

export default PPHOC;