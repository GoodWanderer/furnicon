import './nav.scss';

const Nav = ({children}) => {
  return (
    <div className="currentPositionPanel">
      <div className="currentPositionPanel__content _container">
        {children}
      </div>
    </div>
  );
};

export default Nav;