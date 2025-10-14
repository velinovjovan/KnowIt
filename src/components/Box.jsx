function Box({ children, title, text }) {
  return (
    <div className="max-w-[30rem] px-12 py-6 flex flex-col rounded-4xl hover:-translate-y-2 transition-transform duration-500 bg-gray-800">
      <p className="md:text-3xl text-xl text-white font-bold mb-8 text-center border-b-3 border-black pb-3">
        {title}
      </p>
      <p className="text-gray-200 text-xl mb-10">{text}</p>
      {children}
    </div>
  );
}

export default Box;
