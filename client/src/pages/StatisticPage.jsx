import { useState ,useEffect} from 'react';
import Header from '../components/header/Header'
import StatisticCard from '../components/statistics/StatisticCard'
import {Area} from '@ant-design/plots'



function StatisticPage() {
    const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  

  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

   


  return (
    <>
      <Header />
            <div className='px-6'>
                <h1 className='text-4xl font-bold text-center'>İstatistiklerim</h1>
                <div className='statistic-section'>
                    <h2 className='text-lg'>Hoş geldin<span className='text-green-700 font-bold text-xl'>admin</span></h2>
                    <div className='statistic-cards grid md:grid-cols-2 xl:grid-cols-4 my-10 gap-4 md:gap-10'>
                        <StatisticCard title={"Toplam Müşteri"} amount={"10"} img={"images/user.png"} />
                        <StatisticCard title={"Toplam Kazanç"} amount={"660.96₺"} img={"images/money.png"} />
                        <StatisticCard title={"Toplam Satış"} amount={"6"} img={"images/sale.png"} />
                        <StatisticCard title={"Toplam Ürün"} amount={"28"} img={"images/product.png"} />
                    </div>
                    <div className='w-1/2 h-1/2'>
                        <Area {...config} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default StatisticPage
