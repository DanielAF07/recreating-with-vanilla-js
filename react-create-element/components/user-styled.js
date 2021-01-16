import styled from '../lib/styled-components.js'
import { Component, createElement } from '../lib/react/index.js'
import { unmountComponentAtNode } from '../lib/react-dom.js'


const UserStyled = styled.div`
    background-image: linear-gradient(to bottom, #f9f9f9 0%, #f9f9f9 130px,rgba(0,0,0,.15) 130px, rgba(0,0,0,.15) 131px, white 131px, white 100%);
    text-align: center;
    overflow: hidden;
    padding: 20px;
    font-family: system-ui;
    border-radius: .3rem;
    box-shadow: 0 0 1px rgba(0,0,0,.5);
    cursor: pointer;
    user-select: none;
`

const AvatarStyled = styled.img`
    max-width: 150px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 2px black;
    object-fit: cover;
    max-width:160px;
    max-height:160px;
    width: 160px;
    height: 160px;
`

const theme = {
    light: {
        primaryColor: '#f9f9f9',
        secondaryColor: 'white',
        tertiaryColor: 'rgba(0,0,0,.15)',
        fontColor: 'black',
    },
    dark: {
        primaryColor: '#212429',
        secondaryColor: '#212429',
        tertiaryColor: 'white',
        fontColor: 'white',
    }
}

class User extends Component {
    state = {
        mode: 'light'
    }
    setMode = (event) => {
        if(event.matches) {
            return this.setState({
                mode: 'dark'
            })
        }
        return this.setState({
            mode: 'light'
        })
    }

    componentDidMount(){
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        this.setMode(mediaQuery)
        mediaQuery.addEventListener('change', this.setMode)
    }
    render() {
        const { mode } = this.state
        const colors = mode === 'light' ? theme.light : theme.dark
        console.log(colors)
        const { name, avatar, age } = this.props
        return UserStyled({
            onClick: this.handleClick,
            children: [
                AvatarStyled({
                    src: avatar
                }),
                createElement('h2', null, `Hola! Soy ${name} y tengo ${age} años`)
            ]
        })
    }
}

export default User