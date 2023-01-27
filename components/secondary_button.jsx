export default function PrimaryButton({ label, onClickHandler }) {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      class="text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:bg-teal-600 dark:focus:ring-teal-800"
    >
      {label}
    </button>
  );
}
