export default function PrimaryButton({ label, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      type="button"
      class="text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
    >
      {label}
    </button>
  );
}
