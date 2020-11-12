import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FirstPage from './routes/firstPage';
import ThirdPage from './routes/mainpage/thirdPage';
import FourthPage from './routes/mainpage/fourthPage';
import Fivepages from './routes/mainpage/fivepages';
import SixePage from './routes/mainpage/sixePage';
import SevenPage from './routes/mainpage/sevenpage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/second" exact component={FirstPage} />
        <Route path="/third" exact component={ThirdPage} />
        <Route path="/four" exact component={FourthPage} />
        <Route path="/five" exact component={Fivepages} />
        <Route path="/sixe" exact component={SixePage} />
        <Route path="/seven" exact component={SevenPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
