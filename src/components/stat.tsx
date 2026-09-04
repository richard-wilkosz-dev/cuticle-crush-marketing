export const Stat = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
};
