import Header from './Header';
import './App.css';
import React from "react"
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos'
import {BrowserRouter  as Router , Switch ,Route} from "react-router-dom" 
function App() {
  return (
    <div className="app">
    <Router>
    <Switch>
      <Route path="/">
        <h1>Home Page</h1>
        <Header />
        <div className="app_page">
          <Sidebar />
          <RecommendedVideos />
        </div> 
      </Route>
    <Route path="/search/:searchTerm">
      <Header />
      <Sidebar />
    </Route>

    </Switch>
    </Router>

    </div>
  );
}

export default App;
