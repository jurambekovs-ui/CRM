import { LogoIcon } from "../../assets/icons"
import { LoginImg } from "../../assets/images"
import { LoginForm } from "../../components"

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[50%]">
        <img className="w-full object-cover h-full" src={LoginImg} alt="Login Img" /> 
      </div>
      <div className="w-[40%] p-20">
        <div className="flex  text-[#9c7751]!  items-center gap-10">
          <LogoIcon classList="scale-[1.5]"/>
          <strong className="font-normal  text-[30px]">Najot Ta'lim</strong>
        </div>
        
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login