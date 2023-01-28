import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';

let ran = false;

const data_temp = {
  labels: [],
  datasets: [
    {
      label: 'Weight',
      data: [],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options = {
  scales: {
    y: {
      label: 'y-axis label',
    },
    x: {
      label: 'x-axis label',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  width: 800,
  height: 600,
};

export default function ProgressChart({ setStart, setCurrent }) {
  const [data, setData] = useState(data_temp);

  const sort = (a, b) => {
    let c = a
      .map((e, i) => [e, b[i]])
      .sort((a, b) => a[0] - b[0])
      .map((e) => e[1]);
    return c;
  };

  const getUserDetails = async () => {
    // Getting username from localstorage
    const username = JSON.parse(localStorage.getItem('username'));

    let res = await fetch('/api/user/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    if (res.status === 200) {
      const user_data = await res.json();
      let weights = user_data.user.weight;
      let labels = [];
      let data = [];
      for (let i = 0; i < weights.length; i++) {
        labels.push(weights[i].day);
        data.push(weights[i].value);
      }
      let sorted_data = sort(labels, data);
      sorted_data.shift();
      let sorted_labels = labels.sort();
      sorted_labels.shift();

      setData({
        labels: sorted_labels,
        datasets: [
          {
            label: 'Weight',
            data: sorted_data,
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      });
      setStart(sorted_data[0]);
      setCurrent(sorted_data[sorted_data.length - 1]);
    } else {
      alert('Error');
    }
  };

  useEffect(() => {
    if (!ran) {
      getUserDetails();
      ran = true;
    }
  });

  return (
    <div className="w-[575px] h-[350px]">
      <Line data={data} options={options} />
    </div>
  );
}
