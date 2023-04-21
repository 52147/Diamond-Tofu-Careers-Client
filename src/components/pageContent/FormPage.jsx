import React from 'react'
import {FormComponent} from "../form/FormComponent"
export const FormPage = ({ title, setDocument, uid }) => {
  return (
    <>
    <FormComponent setTitle={title} setDocument = {setDocument} setUid = {uid}/>
    </>
  )
}
