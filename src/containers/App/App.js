import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from '../IndexPage/IndexPage';
import TableTypeOne from '../TableTypeOne/TableTypeOne';
import TableTypeTwo from '../TableTypeTwo/TableTypeTwo';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            index
            element={<IndexPage/>}
          />
          <Route
            path="/table_one"
            element={<TableTypeOne/>}
          />
          <Route
            path="/table_two"
            element={<TableTypeTwo/>}
          />
        </Routes>
      </Router>
    );
  }
}
