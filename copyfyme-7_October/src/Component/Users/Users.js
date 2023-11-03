import user_data from "./Users.json"
import "./Users.css"
import { Col, Input, Row, DatePicker, Table } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import action from "../../asset/pswd.svg"
import bin from "../../asset/delete.svg"
const { Column } = Table;

function Users(){
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
                    <Table dataSource={user_data.user_data}  pagination={{
         pageSize: 10
        }}  >

                        <Column title="No." dataIndex="no" key="no" />
                       
                        <Column title="Gmail" dataIndex="gmail" key="gmail" />
                        <Column title="Country" dataIndex="country" key="country" />
                        <Column title="Registration Date" dataIndex="date" key="date" />
                        <Column title="Status" dataIndex="status" key="status" render={(d)=>
                            <p className={d == "Active"?"user_active" : "user_inactive"}>{d}</p>
                        }/>
                        <Column title="Action" dataIndex="action" render={() => {return(
                             <div>
                                <img src={action}></img>
                                <img src={bin}></img>
                             </div>
                        )}} ></Column>

                    </Table>

                </Col>
            </Row>
        </div>
    )
}
export default Users