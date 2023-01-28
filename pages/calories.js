import Layout from '@/components/layout';
import { useEffect, useState } from 'react';
import RemainingCaloriesChart from '@/components/charts/remaining_calories_chart';
import FlagIcon from '@/components/icons/flag_icon';
import CaloriesGoalLabel from '@/components/calories_goal_label';
import FoodIcon from '@/components/icons/food_icon';
import BurnIcon from '@/components/icons/burn_icon';
import PrimaryButton from '@/components/primary_button';
import SeconondaryButton from '@/components/secondary_button';
import { useRouter } from 'next/router';

export default function Calories() {
  const [calories, setCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newCalories, setNewCalories] = useState(0);
  const [newExercise, setNewExercise] = useState(0);
  const router = useRouter();

  function containsNonNumeric(string) {
    return !/^\d+$/.test(string);
  }

  const editMaximum = async (new_maximum) => {
    if (containsNonNumeric(new_maximum)) {
      return;
    }

    // Getting username from localstorage
    const username = JSON.parse(localStorage.getItem('username'));

    let res = await fetch('/api/user/edit_maximum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, new_maximum }),
    });

    if (res.status === 200) {
      const user_data = await res.json();
      setMaxCalories(user_data.user.calories.maximum);
      setCalories(user_data.user.calories.consumed);
      setCaloriesBurned(user_data.user.calories.burned);
    } else {
      alert('Error');
    }
  };

  const addCalories = async () => {
    // Getting username from localstorage
    const username = JSON.parse(localStorage.getItem('username'));

    let res = await fetch('/api/user/add_consumed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, new_calories: newCalories }),
    });

    if (res.status === 200) {
      const user_data = await res.json();
      setMaxCalories(user_data.user.calories.maximum);
      setCalories(user_data.user.calories.consumed);
      setCaloriesBurned(user_data.user.calories.burned);
    } else {
      alert('Error');
    }
  };

  const addExercise = async () => {
    // Getting username from localstorage
    const username = JSON.parse(localStorage.getItem('username'));

    let res = await fetch('/api/user/add_burned', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, new_burned: newExercise }),
    });

    if (res.status === 200) {
      const user_data = await res.json();
      setMaxCalories(user_data.user.calories.maximum);
      setCalories(user_data.user.calories.consumed);
      setCaloriesBurned(user_data.user.calories.burned);
    } else {
      alert('Error');
    }
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
      setMaxCalories(user_data.user.calories.maximum);
      setCalories(user_data.user.calories.consumed);
      setCaloriesBurned(user_data.user.calories.burned);
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

    if (isAuthenticated) {
      getUserDetails();
    }
  });

  return (
    <Layout isAuthenticated={true}>
      {isAuthenticated && (
        <>
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
              Track Your Calories
            </h1>
            <p className="max-w-lg ml-auto mr-auto text-gray-300 font-light">
              {`Keep track of you dialy calories intake categorically and make
              sure it's under the set limit. See how much calories you intake
              graphically.`}
            </p>
          </div>
          <div className="flex flex-row justify-center gap-4 mt-12">
            <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 w-fit flex flex-col gap-6">
              <div>
                <h3 className="font-bold text-xl">Calories</h3>
                <p className="font-light text-sm text-gray-500">
                  Remaining = Goal - Food + Exercise
                </p>
              </div>
              <div className="flex flex-row gap-6">
                <RemainingCaloriesChart
                  calories={calories}
                  caloriesBurned={caloriesBurned}
                  maxCalories={maxCalories}
                />
                <div className="flex flex-col justify-between">
                  <CaloriesGoalLabel
                    label={'Base Goal'}
                    value={maxCalories}
                    Icon={FlagIcon}
                  />
                  <CaloriesGoalLabel
                    label={'Food'}
                    value={calories}
                    Icon={FoodIcon}
                  />
                  <CaloriesGoalLabel
                    label={'Exercise'}
                    value={caloriesBurned}
                    Icon={BurnIcon}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 flex flex-row justify-between gap-6 items-center">
                <div>
                  <h3 className="font-bold text-xl">Calorie Goal</h3>
                </div>
                <p>{`${maxCalories} CAL`}</p>
                <SeconondaryButton
                  label={'Edit'}
                  onClickHandler={() => {
                    let val = prompt('Enter new daily calorie goal');
                    editMaximum(val);
                  }}
                />
              </div>
              <div className="flex flex-row gap-2">
                <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 w-fit flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-bold text-xl">Add Calories</h3>
                    <p className="font-light text-sm text-gray-500">
                      Record calories consumed
                    </p>
                  </div>
                  <input
                    type="number"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="200"
                    value={newCalories}
                    onChange={(e) => setNewCalories(e.target.value)}
                  />
                  <PrimaryButton label={'Add'} onClickHandler={addCalories} />
                </div>
                <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="font-bold text-xl">Add Exercise</h3>
                    <p className="font-light text-sm text-gray-500">
                      Record calories burned
                    </p>
                  </div>
                  <input
                    type="number"
                    class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="400"
                    value={newExercise}
                    onChange={(e) => setNewExercise(e.target.value)}
                  />
                  <PrimaryButton label={'Add'} onClickHandler={addExercise} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
