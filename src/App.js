import Dashboard from "./Dashboard";
import Store from "./Store";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
