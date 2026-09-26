function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
        S
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-900">
          SkillGap AI
        </h1>

        <p className="text-xs text-slate-500">
          Career Intelligence
        </p>
      </div>
    </div>
  );
}

export default Logo;