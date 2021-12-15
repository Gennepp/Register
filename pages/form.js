import React from 'react'
import { useRouter } from 'next/router'
import { Form, Input, Button } from 'antd'
import { saveData, loadData } from '../utils/handleData'
import { formItemLayout, blockStyle, btn } from '../utils/formLayout'

const RegistrationForm = () => {
    const router = useRouter()

    const onFinish = (member) => {
        console.log(member)
        saveData(member)
        // router.push('/Test2')
        router.push('/registTableV2')
        console.log('current data in localStorage:', loadData())
    }

    return (
        <div
            style={{
                backgroundImage: `url("https://i.pinimg.com/564x/76/e1/81/76e181a906d8ac339ccbb5aa79b6e910.jpg")`,
                backgroundPosition: 'center',
            }}
        >
            <title> Gennepp </title>

            <Form
                {...formItemLayout}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                style={blockStyle}
            >
                <br />
                <h2 style={{ textAlign: 'center', padding: '30px' }}>
                    Sign up here
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

                <Button style={btn} htmlType="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default RegistrationForm
