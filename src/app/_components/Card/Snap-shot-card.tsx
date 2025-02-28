export default function SnapShotCard({
  data,
  title,
}: {
  data: { name: string; icon: any };
  title: string;
}) {
  const { name, icon } = data;

  return (
    <div className="mx-auto min-w-28 w-full sm:w-60 rounded-lg flex flex-col justify-center items-center p-4 border-[1px] border-[#bf9877] text-[#bf9877]">
      <span className="size-20">{icon}</span>
      <span className="mt-4 font-semibold tracking-wide text-sm sm:text-base">{title.split("_").join(" ")}</span>
      <span className="mt-1 text-sm">{name}</span>
    </div>
  );
}
