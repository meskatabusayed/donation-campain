import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";




const Statistics = () => {
  const [mes , setData] = useState(0)

  const [subTract , setSubTract] = useState(0)

  const [newAdd , setNewAdd] = useState(0)
 



 

  useEffect(() => {

    const dataValue = JSON.parse(localStorage.getItem('donation'))
    if(dataValue){
      const parcentage = Math.floor((100*`${mes}` )/12)
      const notDonate = 100 - parseFloat(parcentage)
      setSubTract(parcentage)
      setNewAdd(notDonate)
      console.log(parcentage , notDonate);
      setData(dataValue.length);
    }
    else {
      console.log('No data found');
    }
   

    
  


   

  } , [mes])

  const data = [
    { name: 'Group A', value: parseInt(`${newAdd}`)},
    { name: 'Group B', value: parseInt(`${subTract}`)},
    
  ];

 


const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];

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
    
        <div className="flex justify-center items-center h-screen">
       
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