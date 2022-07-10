import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import StyledGlobal from './../styledGlobal/StyledGlobal';
import Header from './../header/Header';
import ConfigurationPage from './../pages/configurationPage/ConfigurationPage';

const App = () => {
  return (
    <Router>
      <StyledGlobal>
        <Header />
        <Routes>
          <Route path="/KworkFurnicom-1/" element={<ConfigurationPage />} />
        </Routes>
      </StyledGlobal>
    </Router>
      
  );
};

export default App;