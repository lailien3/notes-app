import './App.css'

function App() {
  return (
    <div className="app-container">
      <form className="form-container">
        <input
          placeholder="note title"
          required
        ></input>
        <textArea
          placeholder="note content"
          required
        ></textArea>
        <button type="submit">Add</button>
      </form>
    </div>

  )
}

export default App
