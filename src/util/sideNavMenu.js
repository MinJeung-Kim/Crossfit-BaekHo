
export const menus = [
    { id: 1, name: "Dashboard", url: "/", icon: "bx-grid-alt" },
    {
      id: 2,
      name: "Category",
      icon: "bx-collection",
      children: [
        { id: 2, name: "Category" },
        { id: 2, name: "CategoryDetail", url: "/category" },
        { id: 2, name: "JavaScript", url: "/" },
        { id: 2, name: "PHP & MySQL", url: "/" },
      ],
    },
    {
      id: 3,
      name: "Posts",
      icon: "bx-book-alt",
      children: [
        { id: 2, name: "Posts" },
        { id: 2, name: "Web Design", url: "/" },
        { id: 2, name: "Login Form", url: "/" },
        { id: 2, name: "Card Design", url: "/" },
      ],
    },
    { id: 4, name: "Analytics", url: "/analytics", icon: "bx-pie-chart-alt-2" },
    { id: 5, name: "Chart", url: "/chart", icon: "bx-line-chart" },
    {
      id: 6,
      name: "Plugins",
      icon: "bx-plug",
      children: [
        { id: 2, name: "Plugins", url: "/plugins" },
        { id: 2, name: "UI Face", url: "/ui" },
        { id: 2, name: "Pigments", url: "/pigments" },
        { id: 2, name: "Box Icons", url: "/box" },
      ],
    },
    { id: 7, name: "Explore", url: "/explore", icon: "bx-compass" },
    { id: 8, name: "History", url: "/history", icon: "bx-history" },
    { id: 9, name: "Setting", url: "/setting", icon: "bx-cog" },
  ];