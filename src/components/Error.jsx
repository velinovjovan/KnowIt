function Error() {
  return (
    <div className="h-screen flex-col flex w-full bg-gradient-to-b from-slate-800 to-sky-900 px-5 py-24">
      <p className="text-gray-100 font-bold font-mono text-center mt-40 md:text-5xl text-2xl">
        Error Loading The Questions
      </p>
      <p className="text-gray-300 font-bold font-mono text-center mt-24 md:text-4xl text-2xl">
        Try Again Later...
      </p>
    </div>
  );
}

export default Error;
