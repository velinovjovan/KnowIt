function Select({ dispatch, currState, gameMode }) {
  return (
    <div className="w-full">
      <label
        htmlFor="category"
        className="block text-gray-200 font-semibold text-sm mb-2 ml-1"
      >
        Select Category
      </label>
      <div className="relative group">
        {/* Decorative gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-50 blur transition duration-500" />

        <select
          value={currState}
          onChange={(e) =>
            dispatch(
              gameMode === 2
                ? { payload: e.target.value, type: "quickfire" }
                : { payload: e.target.value, type: "random" }
            )
          }
          id="category"
          className="relative h-fit w-full bg-slate-700/50 backdrop-blur-sm border-2 border-slate-600 text-white text-base rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 block p-3 cursor-pointer transition-all duration-300 hover:bg-slate-700 hover:border-cyan-500/50 appearance-none pr-10 font-medium shadow-lg"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2306b6d4'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.75rem center",
            backgroundSize: "1.5rem",
          }}
        >
          <option value="any" className="bg-slate-800 text-white py-2">
            🎲 Any Category
          </option>
          <option value="9" className="bg-slate-800 text-white py-2">
            🧠 General Knowledge
          </option>
          <option value="22" className="bg-slate-800 text-white py-2">
            🌍 Geography
          </option>
          <option value="23" className="bg-slate-800 text-white py-2">
            📜 History
          </option>
          <option value="21" className="bg-slate-800 text-white py-2">
            ⚽ Sports
          </option>
          <option value="25" className="bg-slate-800 text-white py-2">
            🎨 Art
          </option>
          <option value="24" className="bg-slate-800 text-white py-2">
            🏛️ Politics
          </option>
          <option value="20" className="bg-slate-800 text-white py-2">
            ⚡ Mythology
          </option>
          <option value="27" className="bg-slate-800 text-white py-2">
            🦁 Animals
          </option>
          <option value="26" className="bg-slate-800 text-white py-2">
            ⭐ Celebrities
          </option>
          <option value="28" className="bg-slate-800 text-white py-2">
            🚗 Vehicles
          </option>
          <option value="17" className="bg-slate-800 text-white py-2">
            🔬 Science & Nature
          </option>
          <option value="18" className="bg-slate-800 text-white py-2">
            💻 Science: Computers
          </option>
          <option value="19" className="bg-slate-800 text-white py-2">
            📐 Science: Mathematics
          </option>
          <option value="30" className="bg-slate-800 text-white py-2">
            📱 Science: Gadgets
          </option>
          <option value="10" className="bg-slate-800 text-white py-2">
            📚 Entertainment: Books
          </option>
          <option value="11" className="bg-slate-800 text-white py-2">
            🎬 Entertainment: Film
          </option>
          <option value="12" className="bg-slate-800 text-white py-2">
            🎵 Entertainment: Music
          </option>
          <option value="29" className="bg-slate-800 text-white py-2">
            💥 Entertainment: Comics
          </option>
          <option value="13" className="bg-slate-800 text-white py-2">
            🎭 Entertainment: Musicals & Theatres
          </option>
          <option value="14" className="bg-slate-800 text-white py-2">
            📺 Entertainment: Television
          </option>
          <option value="15" className="bg-slate-800 text-white py-2">
            🎮 Entertainment: Video Games
          </option>
          <option value="16" className="bg-slate-800 text-white py-2">
            🎲 Entertainment: Board Games
          </option>
          <option value="31" className="bg-slate-800 text-white py-2">
            🗾 Entertainment: Japanese Anime & Manga
          </option>
          <option value="32" className="bg-slate-800 text-white py-2">
            🎪 Entertainment: Cartoon & Animations
          </option>
        </select>
      </div>
    </div>
  );
}

export default Select;
