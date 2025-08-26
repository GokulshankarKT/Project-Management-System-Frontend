const LandingPage = () => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "default";
    changeTheme(saved);
  }, []);

  const changeTheme = (theme: string) => {
    document.body.setAttribute("data-theme", theme);

    console.log(theme);
    setTheme(theme);
  };
  return (
    <div className="w-full h-screen m-4  bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-(--color-text)">
            Tailwind CSS v4 Multi-Theme System
          </h1>
          <p className="text-(--color-text-muted) mb-6">
            Select a theme to see the dynamic color changes using CSS custom
            properties.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => changeTheme("default")}
              className="px-4 py-2 rounded-lg bg-(--color-primary) text-white font-medium hover:opacity-90 transition-opacity">
              Default
            </button>
            <button
              onClick={() => changeTheme("ocean")}
              className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-medium hover:opacity-90 transition-opacity">
              Ocean
            </button>
            <button
              onClick={() => changeTheme("forest")}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:opacity-90 transition-opacity">
              Forest
            </button>
            <button
              onClick={() => changeTheme("sunset")}
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:opacity-90 transition-opacity">
              Sunset
            </button>
            <button
              onClick={() => changeTheme("purple")}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
              Purple
            </button>
            <button
              onClick={() => changeTheme("dark")}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium hover:opacity-90 transition-opacity">
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
