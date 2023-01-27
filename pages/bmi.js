import Layout from '@/components/layout';

export default function Index({ username }) {
  return (
    <Layout isAuthenticated={true}>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
          Calculate Your BMI
        </h1>
        <p className="max-w-lg ml-auto mr-auto text-gray-300 font-light">
          A BMI calculator is a tool that uses a person's weight and height to
          determine their body mass index (BMI). It is a simple way to assess
          whether a person is underweight, normal weight, overweight, or obese.
        </p>
      </div>
    </Layout>
  );
}
