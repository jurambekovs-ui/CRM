import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../hooks';
import {toast} from 'react-hot-toast';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import PATH from './Path';

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const [, setCookie, ] = useCookies([`token`]);
  const {mutate, isPending} = useMutation({
    mutationFn:(body: {email:string, password:string})=> instance().post("/auth/login", body),
    onSuccess:(res)=>{
        toast.success("Muvaffaqiyatli kirildi!")
       setCookie("token", res.data.data.tokens.accessToken)
       navigate(PATH.home)
    },
    onError:(err) => toast.error(err.message) 

  })
  const onFinish = (values: {email:string, password:string}) => mutate(values) 
 return (
    <Form className='mt-10!' name="login" autoComplete='off' initialValues={{ remember: true }} style={{ maxWidth: 400 }}onFinish={onFinish} >
        <h1 className='font-bold text-[30px] mb-5'>Tizimga kirish</h1>
      <Form.Item   name="email" rules={[{ required: true, message: 'Please input your Email!' }]} >
        <div>
          <p className='mb-1 text-[18px]'><span className='text-red-600'>*</span>Email</p>
          <Input allowClear size='large' prefix={<UserOutlined />} placeholder="Email" />
        </div>
      </Form.Item>
      <Form.Item  name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
       <div>
          <p className='mb-1 text-[18px]'><span className='text-red-600'>*</span>Password</p>
          <Input.Password size='large' autoComplete='off' prefix={<LockOutlined />} type="password" placeholder="Password" />
      </div>
      </Form.Item>
        <Button loading={isPending} className='bg-[#9c7751]!' size='large' block type="primary" htmlType="submit">
          Log in
        </Button>
    </Form>
  );
};

export default LoginForm;