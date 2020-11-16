import Header from './Header';
import './App.css';
import React from "react"
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos'
import {BrowserRouter  as Router , Switch ,Route} from "react-router-dom" 
import { Search } from '@material-ui/icons';
import SearchPage from './SearchPage'
function App() {
  return (
    <div className="app">
    <Router>
    <Header />
    <Switch>
    <Route path="/search/:searchTerm">
    <div className="app_page">
    <Sidebar />
    <SearchPage />
    </div>
    </Route>

    <Route path="/">
          <div className="app_page">
          <Sidebar />
          <RecommendedVideos />
        </div> 
      </Route>

    </Switch>
    </Router>

    </div>
  );
}

export default App;
