import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink activeClassName="active" className="navbar-brand" to="/">
          Home
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/redux">
                Thunk
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/context">
                Context
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saga">
                Saga
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
