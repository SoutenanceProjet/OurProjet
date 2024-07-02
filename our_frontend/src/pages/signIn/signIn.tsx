import AsideLeft from '../../components/asideLeft/AsideLeft'
import AsideRightIn from '../../components/asideRight/asideRightIn.tsx';

const SignIn = () => {

    const title: string = "Welcome back",
          description: string = "Discute with you friend and ",
          description1: string = "your communauty",
          question: string = " you have not account ?",
          button: string = "Create",
          link: string = "/signUp"

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
