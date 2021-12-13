import { Component } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MyProfile from './pages/my-profile/my-profile.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      createUserProfileDocument(user);
      //console.log(user)  
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route path="/my-profile" element={ <MyProfile /> } />
          <Route path="/shop" element={ <Shop /> } />
          <Route path="/signin" element={ <SignInAndSignUp /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
