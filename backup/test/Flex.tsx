const Flex = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-screen m-5 max-md:grid-cols-1 sm:flex-wrap-reverse">
      <div className="bg-white grid grid-cols-[48%_2fr] gap-2 max-sm:grid-cols-1 ">
        <div className="bg-amber-100 grid grid-cols-1 grid-row-[1fr_1fr_1fr] gap-2 order-2 md:order-1">
          <div className="bg-red-100"></div>
          <div className="bg-red-100"></div>
          <div className="bg-red-100"></div>
        </div>
        <div className="bg-amber-200 grid grid-cols-1 grid-rows-[20%_1fr_1fr] gap-2 order-1 md:order-2">
          <div className="bg-red-100"></div>
          <div className="bg-red-100"></div>
          <div className="bg-red-100"></div>
        </div>
      </div>
      <div className="bg-white "></div>
    </div>
  );
};

export default Flex;
