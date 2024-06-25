import NewArrivalCard from "./NewArrivalCard";

const NewArrivals = () => {
  return (
    <div className="h-screen bg-[#FDF9F9] flex flex-col items-center justify-center snap-center gap-5">
      <p className="font-playwrite text-2xl font-bold">New Arrivals</p>
      {/* Divider  */}
      <div className="h-0.5 w-[90vw] bg-black "></div>
      <p className="italic">
        This season's most loved, customer favorite designs - curated just for
        you!
      </p>
      <NewArrivalCard />
    </div>
  );
};

export default NewArrivals;
