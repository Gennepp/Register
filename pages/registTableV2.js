import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Table, Button, Popconfirm, PageHeader } from 'antd'
import { loadData } from '../utils/handleData'
import { LeftOutlined } from '@ant-design/icons'
import { btn2 } from '../utils/formLayout'

const registTableV2 = () => {
    const router = useRouter()

    const [data, setData] = useState([])

    useEffect(() => {
        // console.log('Correct ANSWER:', loadData())

        const newData = loadData().map((d, i) => {
            return { ...d, key: i }
        })
        localStorage.setItem('member', JSON.stringify(newData))
        setData(newData)
    }, [])
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
        },
        {
            title: 'Password',
            dataIndex: 'password',
        },
        {
            title: 'Confirm Password',
            dataIndex: 'confirm',
        },
        {
            title: '',
            dataIndex: 'edit',
            render: (_, record, row) => {
                return (
                    <Button
                        type="link"
                        // onClick={() => router.push('/editForm')}
                        onClick={() => handleEditForm(record.key)}
                    >
                        Edit
                    </Button>
                )
            },
        },
        {
            title: '',
            dataIndex: 'operation',

            render: (_, record, row) => {
                return (
                    <Popconfirm
                        title="Sure to delete ?"
                        onConfirm={() => {
                            console.log(row)
                            handleDelete(record.key)
                        }}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                )
            },
        },
    ]

    const handleEditForm = (key) => {
        router.push(`/editForm?id=${key}`)
        console.log(key)
    }

    const handleDelete = (key) => {
        setData(data.filter((item) => item.key !== key))

        localStorage.setItem(
            'member',
            JSON.stringify(data.filter((item) => item.key !== key))
        )
    }

    return (
        <div>
            <PageHeader
                className="header"
                onBack={() => router.push('/form')}
                title="Back to register"
            />

            <Table
                pagination={{
                    defaultPageSize: 5,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default registTableV2
