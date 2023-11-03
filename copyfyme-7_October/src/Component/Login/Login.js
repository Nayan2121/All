import { Col, Form, Image, Row, Space, Input, Button } from "antd"
import "./Login.css"
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";
import logo_bg from "../../asset/logo_bg.svg"
import logo from "../../asset/logo.svg"
const validateMessages = {


    email: '${label} is not a valid email!',


};

function Login() {
    return (
        <div className="login_bg">

            <Row justify={"center"} align={"center"} style={{ width: "100%" }}>
                <Col className="login_col" justify={"center"} >
                    <img src={logo} style={{ width: "120px" }}></img>
                    <Form validateMessages={validateMessages}
                    >
                        <FormItem name={"email"} label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email ID!',
                                },
                            ]}>
                            <Input style={{ width: 300 }} placeholder="Enter your Email ID" />
                        </FormItem>



                        <Form.Item name="password"
                            label="Password"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}

                        >


                            <Input.Password style={{ width: 300 }} placeholder="Enter your Email Password" />
                            <a href="#" style={{ color: "#5d87ff", textAlign: "end",paddingTop:"5px" }}>Forgot Password?</a>
                        </Form.Item>
                        

                        <Form.Item >
                            <Link to="/dashboard">
                            <Button htmlType="submit">
                                LOGIN
                            </Button>
                            </Link>
                        </Form.Item>

                    </Form>



                </Col>
            </Row>
            <img src={logo_bg} className="login_logo_bg" ></img>


        </div>
    )
}
export default Login