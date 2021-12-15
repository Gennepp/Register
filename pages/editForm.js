import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Space } from 'antd'
import { useRouter } from 'next/router'
import { formItemLayout, blockStyle, btn } from '../utils/formLayout'
import { saveData, loadData } from '../utils/handleData'
import { constants } from 'buffer'

const editForm = () => {
    const router = useRouter([])

    const [oldData, setoldData] = useState()
    const [update, setUpdate] = useState([])

    const onFinish = (key) => {
        update[query] = key
        console.log('After Update', key)
        localStorage.setItem('member', JSON.stringify(update))
        router.push('/registTableV2')
    }

    const [data, setData] = useState([])

    const [newData] = data
    // console.log(newData)

    useEffect(() => {
        const dataEdit = JSON.parse(localStorage.getItem('member'))
        setUpdate(dataEdit)

        if (router.isReady) {
            const oldData = router.query.id
            setoldData(oldData)

            setData(
                dataEdit.filter((eachData) => {
                    if (eachData.key == oldData) {
                        return eachData
                    }
                })
            )
        }
    }, [])

    return (
        <div
            style={{
                backgroundImage: `url("https://i.pinimg.com/originals/63/13/bf/6313bfb59f68ce368a0bf25eb0497e00.png")`,
                backgroundPosition: 'center',
            }}
        >
            <title> Gennep Edit </title>
            {newData && (
                <Form
                    {...formItemLayout}
                    name="edit"
                    onFinish={onFinish}
                    scrollToFirstError
                    style={blockStyle}
                    initialValues={newData}
                >
                    <br />
                    <h2 style={{ textAlign: 'center', padding: '30px' }}>
                        Edit what you want
                    </h2>
                    <br />

                    <Form.Item
                        name="username"
                        label="Username"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input id="Inputusername" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input id="Inputemail" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve()
                                    }

                                    return Promise.reject(
                                        new Error(
                                            'The two passwords that you entered do not match!'
                                        )
                                    )
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Space>
                        <Button style={btn} htmlType="submit">
                            Save
                        </Button>

                        <Button
                            style={btn}
                            htmlType="submit"
                            onClick={() => router.push('/registTableV2')}
                        >
                            Cancel
                        </Button>
                    </Space>
                </Form>
            )}
        </div>
    )
}

export default editForm
