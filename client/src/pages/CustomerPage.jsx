import Header from '../components/header/Header'
import {Table} from 'antd';
import PrintBill from '../components/bills/PrintBill';


function CustomerPage() {
        const dataSource = [{
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downning Street'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downning Street'
        }]
    
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        }]
  return (
    <>
      <Header />
            <div className='px-6'>
                <h1 className='text-4xl font-bold text-center'>Müşterilerim</h1>
                <Table className='pt-4' dataSource={dataSource} columns={columns} bordered pagination={false} />
            </div>
    </>
  )
}

export default CustomerPage
