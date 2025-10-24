import { Button, Carousel, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'

function Register() {
    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className='px-10 xl:px-20 w-full flex flex-col h-full justify-center relative'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form layout='vertical'>
                        <Form.Item label="Kullanıcı Adı" name={"username"} rules={[{ required: true, message: "Kullanıcı Adı Alanı Boş Bırakılamaz!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="E-mail" name={"email"} rules={[{ required: true, message: "E-mail Alanı Boş Bırakılamaz!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Şifre" name={"password"} rules={[{ required: true, message: "Şifre Alanı Boş Bırakılamaz!" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item label="Şifre Tekrar" name={"passwordAgain"} dependencies={["password"]} rules={[{ required: true, message: "Şifre Tekrar Alanı Boş Bırakılamaz!" },({getFieldValue})=>({
                            validator(_,value){
                                if(!value || getFieldValue('password') === value){
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Şifreler eşleşmiyor'))
                            }
                        })]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button className='w-full' size='large' type='primary' htmlType='submit'>Kaydol</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full'>Bir hesabınız var mı?<Link to={"/login"} className='text-blue-600'>Giriş Yap</Link></div>
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

export default Register
