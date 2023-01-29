import Layout from '@/components/layout';
import RangeSlider from '@/components/range_slider';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Bmi() {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(160);
  const [bmi, setBmi] = useState('00');
  const [bmiStatus, setBmiStatus] = useState('Healthy');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const calculateBmi = () => {
    setBmi(Math.floor(weight / ((height / 100) * (height / 100))));
    if (bmi < 18.5) {
      setBmiStatus('Underweight');
    } else if (bmi <= 25) {
      setBmiStatus('Healthy');
    } else if (bmi >= 25.1) {
      setBmiStatus('Overweight');
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
    calculateBmi();
  });

  return (
    <Layout isAuthenticated={isAuthenticated}>
      {isAuthenticated && (
        <>
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
              Calculate Your BMI
            </h1>
            <p className="max-w-lg ml-auto mr-auto text-gray-300 font-light">
              {`A BMI calculator is a tool that uses a person's weight and height
              to determine their body mass index (BMI). It is a simple way to
              assess whether a person is underweight, normal weight, overweight,
              or obese.`}
            </p>
          </div>
          <div className="font-extralight secondaryBg shadow-md my-12 rounded-lg p-3 w-fit ml-auto mr-auto text-center">
            <p>BMI</p>
            <p
              className={`text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r tabular-nums
           ${bmiStatus === 'Underweight' && 'from-cyan-400 to-cyan-500'} ${
                bmiStatus === 'Overweight' && 'from-red-400 to-red-500'
              } ${bmiStatus === 'Healthy' && 'from-green-400 to-green-500'}`}
            >
              {bmi}
            </p>
            <p
              className={`text-transparent font-semibold bg-clip-text bg-gradient-to-r ${
                bmiStatus === 'Underweight' && 'from-cyan-400 to-cyan-500'
              } ${bmiStatus === 'Overweight' && 'from-red-400 to-red-500'} ${
                bmiStatus === 'Healthy' && 'from-green-400 to-green-500'
              }`}
            >
              {bmiStatus}
            </p>
          </div>
          <div className="flex flex-col lg:px-64 md:px-32 sm:px-16 gap-4 justify-center">
            <RangeSlider
              sliderVal={weight}
              setSliderVal={setWeight}
              label={'Weight'}
              labelUnit={'KG'}
              min={30}
              max={140}
            />
            <RangeSlider
              sliderVal={height}
              setSliderVal={setHeight}
              label={'Height'}
              labelUnit={'CM'}
              min={120}
              max={210}
            />
          </div>
        </>
      )}
    </Layout>
  );
}
