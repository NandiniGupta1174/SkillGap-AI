function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center 
      text-white font-bold"
style={{
    backgroundColor: "var(--primary)"
}}>
         S
         </div>
      <div>
        <h1 className="text-xl font-bold"
style={{
    color:"var(--text)"
}}>
          SkillGap AI
        </h1>

        <p className="text-xs"
style={{
    color:"var(--text-secondary)"
}}>
          Career Intelligence
        </p>
      </div>
    </div>
  );
}

export default Logo;