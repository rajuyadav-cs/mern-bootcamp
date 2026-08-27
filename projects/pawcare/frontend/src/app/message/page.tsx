export default function Message() {
  return (
    <div className="main px-10">
      <div className="title text-center text-5xl p-4 font-bold text-shadow-2xs text-slate-600">
        Message Board
      </div>
      <div className="messageContainer">
        <div className="inputmessage">
          <form className="flex justify-between p-2 gap-4" action="">
            <input
              className="w-full h-12 rounded-2xl border-2 px-4 py-2 border-slate-300
             focus:border-blue-200 focus:outline-none
             focus:ring-1 focus:ring-blue-200 caret-blue-900"
              type="text"
              name="messageInput"
            />
            <button
              className="border-2 bg-zinc-700 text-zinc-200 px-4 py-2 text-xl rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 hover:duration-300 active:duration-300"
              type="submit"
            >
              Post
            </button>
          </form>
        </div>
        <div className="messages">Messages List</div>
      </div>
    </div>
  );
}
