import { Col, Image, Layout, Row } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import { LogoutOutlined } from "@ant-design/icons"
import { Button, Space } from 'antd';
import { Tabs } from 'antd';
import { TabsProps } from 'antd';
import Investor from "./Component/Investor/Investor";
import Report from "./Component/Report/Report";
import dashbord_logo from "../src/asset/dashbord_logo.svg"
import Dashboard from "./Component/Dashboard/Dashboard";
import Users from "./Component/Users/Users";



const onChange = (key) => {
    console.log(key);
};
function Main() {
    const items = [
        {
            key: '1',
            label: 'DASHBOARD',
            children: <Dashboard />,
        },
        {
            key: '2',
            label: 'USERS',
            children: <Users />,
        },
        {
            key: '3',
            label: 'FUND MANGER',
            children: 'FUND MANGER',
        },
        {
            key: '4',
            label: 'INVESTOR',
            children: <Investor />,
        },
        ,
        {
            key: '5',
            label: 'REPORT ',
            children: <Report />,
        },
        ,
        {
            key: '6',
            label: 'SETTING ',
            children: '',
        },
    ];
    return (
        <div className="main_bg">
            <Layout>
                <Header style={{ background: "white" }}>
                    <Row style={{ border: "1px solid #2F2B3D29", borderRadius: "5px", padding: "0 20px", marginTop: "15px" }} justify={"space-between"} >
                        <Col justify={"space-between"}>
                            <Image src={dashbord_logo}></Image>
                        </Col>
                        <Col>
                            <div className="header_btn">

                                <LogoutOutlined />
                                <p className="header_logout">LOGOUT</p>
                            </div>
                        </Col>

                    </Row>
                </Header>


                <div className="main_btn">
                    <Tabs
                        type="card"
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                    />
                </div>

            </Layout>


        </div>
    )
}
export default Main;