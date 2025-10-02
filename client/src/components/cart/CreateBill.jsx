import React from 'react'
import { Modal } from 'antd'

function CreateBill({isModalOpen,setIsModalOpen}) {
    return (
        <div>
            <Modal title="Fatura Oluştur" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}></Modal>
        </div>
    )
}

export default CreateBill
