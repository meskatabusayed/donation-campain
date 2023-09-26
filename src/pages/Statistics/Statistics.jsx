import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";




const Statistics = () => {
  const [mes , setData] = useState(0)
  console.log(mes);
  const [subTract , setSubTract] = useState(0)
  console.log(subTract);
  const [newAdd , setNewAdd] = useState(0)
 



 

  useEffect(() => {

    const dataValue = JSON.parse(localStorage.getItem('donation'))
    const parcentage = Math.floor((100*`${mes}` )/12)
    const notDonate = 100 - parseFloat(parcentage)
    setSubTract(parcentage)
    setNewAdd(notDonate)
    console.log(parcentage , notDonate);
    setData(dataValue.length);

    
  


   

  } , [mes])

  const data = [
    { name: 'Group A', value: parseInt(`${newAdd}`)},
    { name: 'Group B', value: parseInt(`${subTract}`)},
    
  ];

 


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
       {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
    return (
        <div>
           <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        </div>
    );
};

export default Statistics;