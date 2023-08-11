import "./header.css"

function Header({setPage, setNumber, number}) {
  return(
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={() => setPage("a")}>
          Go to content A!
        </button>
        <button className="button" onClick={() => setPage("b")}>
        Go to content B!
        </button>
        <button className="button" onClick={() => setPage("c")}>
        Go to content C!
        </button>
        <button className="button" onClick={() => setNumber(number + 1)}>
        Increase Number
        </button>
        {number}
      </div>
    </div>
  )
}

export default Header