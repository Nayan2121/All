import "./Report.css"
import { Tabs } from 'antd';
import Performance_fee from "./Performance_fee";

function Report(){
    const onChange = (key) => {
        console.log(key);
      };
    const items = [
        {
          key: '1',
          label: 'Performance Fee',
          children: <Performance_fee/>,
        },
        {
          key: '2',
          label: 'Platform Fee',
          children: 'Content of Tab Pane 2',
        }
      ];
    return(
        <div className="report_tab">
           <Tabs
        defaultActiveKey="1"
        type="card"
        items={items}
      />
        </div>
    )
}
export default Report