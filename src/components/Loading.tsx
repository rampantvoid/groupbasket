import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-dvh bg-[#f7f7f7] flex justify-center items-center">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#595c58"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
