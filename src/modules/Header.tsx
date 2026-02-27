import { BellFilled, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Badge, Button } from "antd"
import { useContext } from "react"
import { Context } from "../context/Context"
 
const Header = () => {
  const {setCollapse, collapse} =useContext(Context)
  return (
    <div className="px-5 py-6.75 bg-[#8f5c28]! flex items-center justify-between ">
       <Button onClick={() => setCollapse(!collapse)} className={'bg-[#ffffffa5]! text-black!'} type="primary"  style={{ marginBottom: 16 }}>
            {collapse ? <MenuFoldOutlined className="scale-[1.2]"  /> : <MenuUnfoldOutlined className="scale-[1.2]" /> }
       </Button>
       <div className="flex items-center gap-5">
        <Badge className="text-white! cursor-pointer!" size="small" count={2}>
          <BellFilled className="text-[30px]"/>
        </Badge>
        <Button className=" hover:bg-white! bg-[#ffffffa5]! " size="medium" icon={<LogoutOutlined/>}>Chiqish</Button>
       </div>
    </div>
  )
}

export default Header