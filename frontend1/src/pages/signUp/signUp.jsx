import React from "react";
import AsideLeft from "../../components/asideLeft/AsideLeft";
import AsideRightUp from "../../components/asideRight/asideRightUp";

export default function SignUp(props){

    const title = "Welcome",
          description = "Discover our community and let start",
          description1 = "this beautiful world",
          question = " Have you already a count ?",
          button = "Connexion",
          link = "/signIn"
        
  return (
    <div>
        <div className="Main">
                <div className="aside"> 
                    <AsideLeft 
                        title = {title} 
                        description={description} 
                        description1={description1} 
                        question={question} 
                        button={button}
                        link = {link}
                    />
                    <AsideRightUp />
                </div>
        </div>
    </div>
  )
}