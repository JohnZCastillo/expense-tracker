import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from "react-chartjs-2";
import Form from './form';
import { useState,useEffect } from 'react';

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Expenses Tracker',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jun", "Jul",],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12,12],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [12,14],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
}

function App() {

  const [expenses,setExpenses] = useState([]);

  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  return (
    <div className='p-2'>
      <h1 className='text-white text-center'>Welcome To Expense Tracker</h1>
      <Form  data={expenses} dataHandler={setExpenses}/>
      <Bar options={options} data={data} />
    </div>
  );
}

export default App;