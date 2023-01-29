import Layout from '@/components/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PrimaryButton from '@/components/primary_button';
import ProgressChart from '@/components/charts/progress_chart';
import SecondaryButton from '@/components/secondary_button';

export default function Progress() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [newWeight, setNewWeight] = useState(0);
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const addWeight = async () => {
    if (newWeight > 200) {
      alert(
        'Weight can not be greater than 200, please go see a doctor and do squats along the way'
      );
      return;
    } else if (newWeight < 20) {
      alert(
        'Weight can not be less than 20... please go see a doctor and eat some chicken along the way'
      );
      return;
    }

    // Getting username from localstorage
    const username = JSON.parse(localStorage.getItem('username'));

    let res = await fetch('/api/user/add_weight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        value: newWeight,
        day: startDate.getDate(),
        month: startDate.getMonth(),
      }),
    });

    if (res.status === 200) {
      location.reload();
    } else {
      alert('Error');
    }
  };

  const checkAuthenticated = () => {
    const foundUsername = localStorage.getItem('username')
      ? JSON.parse(localStorage.getItem('username'))
      : false;
    if (!foundUsername) {
      router.push('/');
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  });

  return (
    <Layout isAuthenticated={true}>
      {isAuthenticated && (
        <>
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
              Track Your Progress
            </h1>
            <p className="max-w-lg ml-auto mr-auto text-gray-300 font-light">
              Keep track of your progress by logging-in your weight
              periodically. Visualize how your health has improved/detoriated
              over time.
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-4 mt-12">
              <SecondaryButton
                label={'LOAD DATA'}
                onClickHandler={() => location.reload()}
              />
              <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 w-fit flex flex-row gap-6 items-center">
                <h3 className="font-bold text-xl w-fit whitespace-nowrap">
                  Log Weight
                </h3>
                <div className="flex flex-row gap-2">
                  <DatePicker
                    selected={startDate}
                    maxDate={new Date()}
                    onChange={(date) => setStartDate(date)}
                    className="bg-[#121212] rounded-md p-2 outline-none hover:cursor-pointer border border-gray-600 text-white focus-within:border-teal-500"
                  />
                  <input
                    type="number"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-[#121212] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                    placeholder="200"
                    value={newWeight}
                    onChange={(e) => setNewWeight(e.target.value)}
                  />
                  <PrimaryButton label={'Add'} onClickHandler={addWeight} />
                </div>
              </div>
              <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 flex flex-col gap-6">
                <div className="flex flex-row gap-8 items-center">
                  <h3 className="font-bold text-xl w-fit whitespace-nowrap">
                    Weight Progress
                  </h3>
                  <div className="flex flex-row text-sm font-extralight gap-4">
                    <div className="flex flex-col items-center">
                      <h4 className="font-semibold">{start} KG</h4>
                      <p>START</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h4 className="font-semibold">{current} KG</h4>
                      <p>CURRENT</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h4 className="font-semibold">{current - start} KG</h4>
                      <p>CHANGE</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <ProgressChart setStart={setStart} setCurrent={setCurrent} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
