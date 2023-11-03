import Layout from "antd/es/layout/layout";
import "./Dashboard.css";
import {
  Col,
  Image,
  Row,
  Button,
  Space,
  Dropdown,
  message,
  Table,
  Select,
} from "antd";
import align from "../../asset/align.svg";
import platform from "../../asset/platform.svg";
import users from "../../asset/user.svg";
import eclipse1 from "../../asset/eclipse1.svg";
import eclipse2 from "../../asset/eclipse2.svg";
import action from "../../asset/pswd.svg";
import dashbord from "./Dashbord.json";
import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import { Userdata } from "./Data";
const { Column } = Table;

function Dashboard() {
  const [user, setUser] = useState({
    labels: Userdata.map((item) => item.Day),
    datasets: [
      {
        label: "views",
        data: Userdata.map((item) => item.Viewers),
        backgroundColor: "white",
        color: "white",
        borderWidth: "10px",
      },
    ],
  });

  const [data, setData] = useState("1");
  const [gridData, setGridData] = useState(null);
  const handleChange = (value) => {
    console.log(value);
    setData(value.value);
  };
  const handleChange_data = (value) => {
    console.log(value);
  };
  console.log(data);

  useEffect(() => {
    const selected = dashbord.find((d) => d.searchBy == data);
    console.log("selecetd", selected);
    setGridData(selected);
  }, [data]);

  const data_graph = [
    {
      name: "Mar",
      FundManager: 200,
      Investor: -120,
    },
    {
      name: "Apr",
      FundManager: 180,
      Investor: -220,
    },
    {
      name: "May",
      FundManager: 240,
      Investor: -110,
    },
    {
      name: "Jun",
      FundManager: 200,
      Investor: -190,
    },
    {
      name: "July",
      FundManager: 100,
      Investor: -200,
    },
    {
      name: "Aug",
      FundManager: 180,
      Investor: -80,
    },
    {
      name: "Sep",
      FundManager: 200,
      Investor: -120,
    },
  ];

  return (
    <div className="dashbord_bg">
      <Row>
        <Col lg={6} md={6} sm={24}>
          <Row justify={"center"}>
            <Col md={24} sm="12">
              <div className="dashbord_box">
                <div className="dashbord_title">
                  <div className="dashbord_user">
                    <img src={users}></img>
                  </div>

                  <img src={align}></img>
                </div>
                <div>
                  <h2>12820</h2>
                  <p>Total Gmail Registration</p>
                </div>
              </div>
            </Col>
            <Col md={24} sm="12">
              <div className="dashbord_box3 ">
                <div className="dashbord_title">
                  <div className="dashbord_platform">
                    <img src={platform}></img>
                  </div>

                  <img src={align}></img>
                </div>
                <div>
                  <p>This Month</p>
                  <ul>
                    <li>
                      <Row justify={"space-between"}>
                        <Col>
                          <p>Performance Fee</p>
                        </Col>
                        <Col>
                          <p>$ 0.00</p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row justify={"space-between"}>
                        <Col>
                          <p>Platform Fee</p>
                        </Col>
                        <Col>
                          <p>$ 0.00</p>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={18} md={18} sm={24}>
          <div className="dashbord_box2">
            <Row>
              <Col lg="10" md="24" sm="10">
                <div className="dashbord_reg_tag">
                  <div>
                    <h3 style={{ color: "var(--prim-color" }}>Registration</h3>
                    <p>Overview of Registration</p>
                  </div>
                  <div>
                    <h3>5250</h3>
                    <p>Fund Manager Registration</p>
                  </div>
                  <div>
                    <h3>6820</h3>
                    <p>Investor Registration</p>
                  </div>
                  <div>
                    <h3>1620</h3>
                    <p>Undefined Registration</p>
                  </div>
                </div>
              </Col>
              <Col lg="14" md="24" sm="14">
                <Row justify={"space-between"}>
                  <Col className="dashbord_chart_title">
                    {/* <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <img src={eclipse1} className="eclipse1"></img>
                                            <p>Fund Manager</p>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <img src={eclipse2} className="eclipse1"></img>
                                            <p>Investor</p>
                                        </div> */}
                  </Col>
                  <Col>
                    <Select
                      labelInValue
                      defaultValue={{
                        value: "data1",
                        label: "All Data",
                      }}
                      style={{
                        width: 150,
                      }}
                      onChange={handleChange_data}
                      options={[
                        {
                          value: "data1",
                          label: "All Data",
                        },
                        {
                          value: "data2",
                          label: "...",
                        },
                      ]}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <BarChart
                        width={600}
                        height={300}
                        data={data_graph}
                        stackOffset="sign"
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar
                          dataKey="Investor"
                          fill="#49beff"
                          stackId="stack"
                          width={400}
                        />
                        <Bar
                          dataKey="FundManager"
                          fill="#5D87FF"
                          stackId="stack"
                          width={400}
                        />
                      </BarChart>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="dashbord_table_main">
        <Row justify={"space-between"} style={{ padding: "15px" }}>
          <Col>
            <div className="dashbord_table_title">
              <p>Recently Added Users</p>
            </div>
          </Col>
          <Col>
            <p>
              Search By:{" "}
              <Select
                labelInValue
                defaultValue={{
                  value: "1",
                  label: "Fund Manager",
                }}
                style={{
                  width: 150,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "Fund Manager",
                  },
                  {
                    value: "2",
                    label: "Investor",
                  },
                ]}
              />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="24" style={{ width: "100%" }}>
            <Table dataSource={gridData?.data} pagination={false}>
              {gridData?.column.map((grid) => (
                <Column
                  title={grid.title}
                  dataIndex={grid.dataIndex}
                  key={grid.no}
                />
              ))}

              <Column
                title="Action"
                dataIndex="action"
                render={() => <img src={action}></img>}
              ></Column>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Dashboard;
