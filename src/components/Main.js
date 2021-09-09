import "./Main.css";

function Main({ children }) {
  return (
    <div className='main_content'>
      <div className="main__nav">
        <ul>
          <li>
            <a href="#omelet">Omelet</a>
          </li>
          <li>
            <a href="#cakes">Cake</a>
          </li>
          <li>
            <a href="#comfort-food">Comfort Food</a>
          </li>
          <li>
            <a href="#noodles">Noodles</a>
          </li>
        </ul>
      </div>
      <div className="section__main">{children}</div>
    </div>
  );
}

export default Main;
