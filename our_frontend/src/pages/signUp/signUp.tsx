import AsideLeft from "../../components/asideLeft/AsideLeft";
import AsideRightUp from "../../components/asideRight/asideRightUp";

export default function SignUp(): any {

    const title: string = "Welcome",
          description: string = "Discover our community and let start",
          description1: string = "this beautiful world",
          question: string = " Have you already a count ?",
          button: string = "Connexion",
          link: string = "/signIn"
        
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
                    <AsideRightUp />
                </div>
        </div>
    </div>
  )
}