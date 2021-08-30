import React from 'react'
import styled from 'styled-components'
import backgroundHeader from './low-poly-grid-haikei.svg'

const StyledHeader = styled.img`
   z-index: -3;
   width: 100%;
   overflow: hidden;
`

export default function Header () {
	return (<StyledHeader src={backgroundHeader} alt="header-img"/>)
}


