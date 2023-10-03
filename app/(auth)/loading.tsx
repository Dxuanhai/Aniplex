const Loading = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center relative">
      <span className="loading loading-ring w-[10px]  text-pink-100  absolute"></span>
      <span className="loading loading-ring w-[50px]  text-pink-200 absolute"></span>
      <span className="loading loading-ring w-[100px]  text-pink-300 absolute"></span>
      <span className="loading loading-ring w-[200px] text-pink-400 absolute "></span>
      <span className="loading loading-ring w-[400px] text-pink-500 absolute "></span>
    </main>
  );
};

export default Loading;
