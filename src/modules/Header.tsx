import { BellFilled, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Badge, Button, Modal } from "antd"
import { useContext, useState } from "react"
import { Context } from "../context/Context"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { PATH } from "../components"
import { useCookies } from "react-cookie"
 
const Header = () => {
  const [,, removeCookie] = useCookies(["token"])
  const navigate = useNavigate()
  const [loading, setloading] = useState<boolean>(false)
  const [openModal, SetOpenModal] = useState<boolean>(false)
  const {setCollapse, collapse} =useContext(Context)

  function handleLogOut(){
    setloading(true)
    toast.success("chiqib ketdingiz")
    SetOpenModal(false)
    setTimeout(() => {
      removeCookie("token")
      navigate(PATH.home)
    }, 1500)
  }



  return (
    <div className="px-5 py-6.75 bg-[#8f5c28]! flex items-center justify-between ">
       <Button onClick={() => setCollapse(!collapse)} className={'bg-[#ffffffa5]! text-black!'} type="primary"  style={{ marginBottom: 16 }}>
            {collapse ? <MenuFoldOutlined className="scale-[1.2]"  /> : <MenuUnfoldOutlined className="scale-[1.2]" /> }
       </Button>
       <div className="flex items-center gap-5">
        <Badge className="text-white! cursor-pointer!" size="small" count={2}>
          <BellFilled className="text-[30px]"/>
        </Badge>
        <Button onClick={() => SetOpenModal(true)} className=" hover:bg-white! bg-[#ffffffa5]! " size="medium" icon={<LogoutOutlined/>}>Chiqish</Button>
       </div>
       <Modal confirmLoading={loading} onOk={handleLogOut} okText="Chiqish" cancelText="Bekor qilish" okButtonProps={{className:"bg-[#8f5c28]!"}} open={openModal} onCancel={()=> SetOpenModal(false)} title="Chiqish">
        <p>Aniq chiqishni hohlisizmi?</p>
       </Modal>
    </div>
  )
}

export default Header