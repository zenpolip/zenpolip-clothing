import { Component } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MyProfile from './pages/my-profile/my-profile.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';

class App extends Component {

  unsubscribeFromAuth = null;
  unsubscribeFromSnapShot = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        this.unsubscribeFromSnapShot = userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapShot();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
