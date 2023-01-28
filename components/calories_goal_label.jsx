export default function CaloriesGoalLabel({ Icon, label, value }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <Icon />
      <div>
        <p className="text-sm">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
