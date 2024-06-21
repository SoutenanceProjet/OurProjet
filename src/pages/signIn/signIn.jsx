import React from 'react'
import AsideLeft from '../../components/asideLeft/AsideLeft'
import AsideRightIn from '../../components/asideRight/asideRightIn.jsx';
import { useState } from 'react';
import './signIn.css'

const SignIn = () => {

    const title = "Welcome back",
          description = "Discute with you friend and ",
          description1 = "your communauty",
          question = " you have not account ?",
          button = "Create",
          link = "/signUp"

  return (
    <div>
        <div className="main">
                <div className="aside"> 
                    <AsideLeft 
                        title = {title} 
                        description={description} 
                        description1={description1}
                        question={question} 
                        button={button}
                        link = {link}
                    />
                    <AsideRightIn />
                </div>
        </div>
    </div>
  )
}

export default SignIn
