function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-slate-900 border-b border-cyan-500"
    : "text-slate-500";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-slate-700 cursor-pointer ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
}

export default TabButton;
