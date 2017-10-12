import React,{Component} from 'react'

function PPHOC(WrappedComponent) {
    return class PP extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            const props = Object.assign({}, this.props, {
                onChange: ()=>{
                    alert("ok")
                }
            })
            return (
                <div>
                    <h2>
                        new Switch
                    </h2>
                    <WrappedComponent {...props}/>
                </div>
            )
        }
    }
}

export default PPHOC;