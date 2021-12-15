import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Table, Pagination } from 'antd'
import { loadData } from '../utils/handleData'

const registTable = (props) => {
    const { Column } = Table
    const router = useRouter()

    const [data, setData] = useState([])

    useEffect(() => {
        console.log('Correct ANSWER:', loadData())

        const newData = loadData().map((d, i) => {
            return { ...d, key: i }
        })
        setData(newData)
    }, [])
    return (
        <div>
            <Table dataSource={data}>
                <Column title="Username" dataIndex="username" key="username" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Password" dataIndex="password" key="password" />
                <Column
                    title="Confirm Password"
                    dataIndex="confirm"
                    key="confirm"
                />
            </Table>

            <Button type="primary" onClick={() => router.push('/form')}>
                Back to register
            </Button>

            <Pagination defaultCurrent={1} total={50} />
        </div>
    )
}
export default registTable
