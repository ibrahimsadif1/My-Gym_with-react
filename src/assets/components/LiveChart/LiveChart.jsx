
import { LineChart, Line } from 'recharts';
const LiveChart = () => {



   const mathMarksData = [
        { "id": 1, "name": "John Doe", "marks": 85 },
        { "id": 2, "name": "Jane Smith", "marks": 78 },
        { "id": 3, "name": "David Johnson", "marks": 92 },
        { "id": 4, "name": "Emily Brown", "marks": 88 },
        { "id": 5, "name": "Michael Wilson", "marks": 75 },
        { "id": 6, "name": "Sarah Davis", "marks": 94 },
        { "id": 7, "name": "Daniel Lee", "marks": 81 },
        { "id": 8, "name": "Olivia Anderson", "marks": 89 },
        { "id": 9, "name": "William Clark", "marks": 72 },
        { "id": 10, "name": "Sophia Martinez", "marks": 96 }
      ];
      

    return (
        <div>
            <LineChart width={500} height={400} data={mathMarksData}>

              <Line type='monotone' dataKey={'marks'}/>
            </LineChart>
        </div>
    );
};

export default LiveChart;