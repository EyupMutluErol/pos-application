import { Button, Carousel, Checkbox, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

function Login() {
    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className='px-10 xl:px-20 w-full flex flex-col h-full justify-center relative'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form layout='vertical'>
                        <Form.Item label="E-mail" name={"email"} rules={[{ required: true, message: "E-mail Alanı Boş Bırakılamaz!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Şifre" name={"password"} rules={[{ required: true, message: "Şifre Alanı Boş Bırakılamaz!" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName='checked'>
                            <div className='flex justify-between items-center'>
                                <Checkbox>Remember me</Checkbox>
                                <Link>Forgot Password?</Link>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button className='w-full' size='large' type='primary' htmlType='submit'>Giriş Yap</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full'>Henüz bir hesabınız yok mu?<Link to={"/register"} className='text-blue-600'>Kaydol</Link></div>
                </div>
                <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full'>
                    <div className='w-full h-full flex items-center'>
                        <div className='w-full'>
                            <Carousel autoplay autoplaySpeed={3000} dots={true} effect='scrollx' className='!h-full px-6'>
                                <AuthCarousel img="/images/responsive.svg" title={"Responsive"} description={"Tüm Cihaz Boyutlarıyla Uyumludur"} />
                                <AuthCarousel img="/images/statistic.svg" title={"İstatistikler"} description={"Geniş Tutulan İstatistikler"} />
                                <AuthCarousel img="/images/customer.svg" title={"Müşteri Memnuniyeti"} description={"Deneyim Sonunda Üründen Memnun Müşteriler"} />
                                <AuthCarousel img="/images/admin.svg" title={"Yönetim Paneli"} description={"Tek Yerden Yönetim"} />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
