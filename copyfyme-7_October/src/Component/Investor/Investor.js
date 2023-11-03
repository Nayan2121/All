import { Col, Input, Row, DatePicker, Table } from "antd"
import "./Investor.css"
import { SearchOutlined } from "@ant-design/icons"
import action from "../../asset/pswd.svg"
import investor from "./Investor.json"


const { Column } = Table;

function Investor() {
 
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const onChange_to = (date, dateString) => {
        console.log(date, dateString);
    };
    
    return (
        <div className="investor_bg">
            <Row className="i_heading" justify={"space-between"}>
                <Col lg="12" style={{padding:"15px"}}>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <p>User List</p>
                        <div className="i_input">
                            <SearchOutlined />
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                </Col>
                <Col lg="12" style={{padding:"15px",display:"flex",gap:"20px"}} >
                    <span>
                    From Date:  <DatePicker onChange={onChange} />
                    </span>
                    <span>
                    To Date:  <DatePicker onChange={onChange_to} />
                    </span>
                </Col>
                <Col lg="24" style={{ width: "100%", marginTop: "15px" }}>
                    <Table dataSource={investor.i_data}  pagination={{
         pageSize: 5
        }}  >

                        <Column title="No." dataIndex="no" key="no" />
                        <Column title="Id" dataIndex="id" key="id" />
                        <Column title="Gmail" dataIndex="gmail" key="gmail" />
                        <Column title="Trading A/C No" dataIndex="ac" key="ac" />
                        <Column title="Registration Date" dataIndex="date" key="date" />
                        <Column title="Server" dataIndex="server" key="server" />
                        <Column title="Action" dataIndex="action" render={() => <img src={action}></img>} ></Column>

                    </Table>

                </Col>
            </Row>
        </div>
    )
}
export default Investor