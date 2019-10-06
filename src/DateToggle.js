import React from 'react'
import styled from 'styled-components'

export const Toggle = styled.div`
  width: 160px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center; 
  cursor: pointer;
  user-select: none;
`

const SortArrow = ({pointedUp}) => (
  <svg 
    style={{
      transform: pointedUp ? 'none' : 'rotate(180deg)',
      margin: '0 10px'
    }} 
    width="33" 
    height="32" 
    viewBox="0 0 33 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 15.0471L16.8 27.632L31 15.0471" stroke="black" strokeWidth="6"/>
    <path d="M16.5 26.5377V0" stroke="black" strokeWidth="6"/>
  </svg>
)

export const DateToggle = ({sortDescending, onClick}) => (
  <Toggle onClick={onClick}>
    <SortArrow pointedUp={sortDescending} />
    release date
  </Toggle>
)