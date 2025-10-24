function Box({ children, title, text }) {
  return (
    <div className="group relative max-w-[30rem] px-12 py-6 flex flex-col rounded-3xl transition-all duration-500 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm shadow-2xl border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <h3 className="md:text-3xl text-xl font-bold mb-8 text-center pb-3 border-b-2 border-gradient-to-r from-transparent via-slate-600 to-transparent">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 drop-shadow-lg">
            {title}
          </span>
        </h3>
        <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed">
          {text}
        </p>
        {children}
      </div>
    </div>
  );
}

export default Box;
