import React from 'react'
import { Home } from '../home/Home'
import {PosType} from '../home/PosType'
export const HomePage = ({setTitle}) => {
  return (
    <>
    <Home/>
    <PosType setTitle = {setTitle}/>
    </>
  )
}
