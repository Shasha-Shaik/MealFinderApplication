import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading1">Meal Finder Application</h1>
      <search input="search" placeholder="Search" />
      <div>
        <h2 className="heading2">Spicy Arrabiata Penne</h2>
        <p className="paragraph">Vegetarian</p>
        <p className="paragraph">Italian</p>
        <p className="paragraph">
          Bring a large pot of water to a boil. Add kosher salt to the boiling
          water, then add the pasta. Cook according to the package instructions,
          about 9 minutes.\r\nIn a large skillet over medium-high heat, add the
          olive oil and heat until the oil starts to shimmer. Add the garlic and
          cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped
          tomatoes, red chile flakes, Italian seasoning and salt and pepper to
          taste. Bring to a boil and cook for 5 minutes. Remove from the heat
          and add the chopped basil.\r\nDrain the pasta and add it to the sauce.
          Garnish with Parmigiano-Reggiano flakes and more basil and serve{" "}
        </p>
      </div>
    </div>
  );
}
