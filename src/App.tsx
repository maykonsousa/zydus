import { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Login } from './pages/Login/Login';

export const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/player" component={() => <h1>Player</h1>} />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
