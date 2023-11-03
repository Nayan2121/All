import {Bar} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
function BarChart({ChartData,option}){
   
    return(
       
        <div>
            <Bar data={ChartData} options={option} />
        </div>
    )
}
export default BarChart;