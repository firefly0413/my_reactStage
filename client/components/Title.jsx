import React,{Component} from 'react'
import styled from 'styled-components'


const MyTitle = styled.h1`
  font-size: 20px;
  color: ${props=>props.primary?'#09f':'#333'};
`;

class Title extends Component{
    render(){
        return(
            <MyTitle primary>{this.props.children}</MyTitle>
        )
    }
}

export default Title;