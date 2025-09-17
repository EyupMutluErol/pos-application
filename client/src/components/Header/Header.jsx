import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';

function Header() {
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between items-center gap-10'>
                <div className="logo">
                    <a href="/">
                        <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1">
                    <Input className='rounded-full max-w-[800px]' size="large" placeholder="Ürün Ara..." prefix={<SearchOutlined />} />
                </div>
                <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen bg-white md:bg-transparent
                 left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
                    <a href="/" className='menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all'>
                        <HomeOutlined className='text-xl md:text-2xl' />
                        <span className='text-[10px] md:text-xs'>Ana Sayfa</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all'>
                        <Badge count={1} offset={[0, 6]} className='md:flex hidden'>
                            <ShoppingCartOutlined className='text-xl md:text-2xl ' />
                        </Badge>
                        <span className='text-[10px] md:text-xs'>Sepet</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all'>
                        <CopyOutlined className='text-xl md:text-2xl' />
                        <span className='text-[10px] md:text-xs'>Faturalar</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all'>
                        <UserOutlined className='text-xl md:text-2xl' />
                        <span className='text-[10px] md:text-xs'>Müşteriler</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all'>
                        <BarChartOutlined className='text-xl md:text-2xl' />
                        <span className='text-[10px] md:text-xs'>İstatistikler</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all'>
                        <LogoutOutlined className='text-xl md:text-2xl' />
                        <span className='text-[10px] md:text-xs'>Çıkış</span>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header
