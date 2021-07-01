import './App.css';
import CourseDetails from './CourseDetails';
import home from './home';
import { Route, Switch } from 'react-router-dom';
import { React } from 'react';
import BookingPage from './bookingPage';
import AboutUs from './aboutUs';
import Login from './Login';
import Signup from './SignupPage';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={home} exact />
        <Route path='/CourseDetails' component={CourseDetails} />
        <Route path='/bookingPage' component={BookingPage} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/Login' component={Login} />
        <Route path='/Signup' component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
