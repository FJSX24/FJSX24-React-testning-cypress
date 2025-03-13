import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("Knappen klickad!");
  };

  return (
    <div>
      <h1>Test av Button-komponent</h1>
      <Button label="Klicka här" onClick={handleClick} />
    </div>
  );
}

export default App;
