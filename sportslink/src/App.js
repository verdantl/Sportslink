import React from 'react'
import './App.css';
import AthleteSearch from './components/Athlete/AthleteSearch'
import Dashboard from './components/Dashboard/Dashboard'
import AdminDashboard from './components/Admin/AdminDashboard'
import Login from './components/Login/Login'
import Messaging from './components/Messaging/Messaging'
import TopBar from './components/TopBar'
import AdminTopBar from './components/AdminTopBar'

import Profile from './components/Profile/Profile'
import ViewProfile from './components/ViewProfile/Profile'
import Signup from './components/Signup/Signup'
import Onboarding from './components/Signup/Onboarding'
import Settings from './components/Settings/Settings'
import ForgotPass from './components/ForgotPass/ForgotPass'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { uid } from 'react-uid';

import { checkSession } from "./actions/user";

class App extends React.Component {
  constructor(props) {
    super(props);
    checkSession(this); // sees if a user is logged in.
  }
  
  state = {
    currentUser: null,
    signUp: [],

  }
  
  render(){
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path={["/", "/login", "/dashboard", "/admin"] /* any of these URLs are accepted. */ }
            render={ props => (
                <div className="app">
                    { /* Different componenets rendered depending on if someone is logged in. */}
                    {!currentUser ? <Login {...props} app={this} /> : currentUser==='admin' ? <AdminDashboard {...props} app={this} className="adminDashboard"/> : <div><TopBar {...props} app={this}/><Dashboard {...props} currentUser={this.state.currentUser} app={this} /></div>}
                </div>                   // ... spread operator - provides all of the props in the props object
            )}
          />
          <Route exact path = {["/profile", "/profile/" + currentUser, "/viewprofile/" + currentUser] /* any of these URLs are accepted. */ }
                 render={props=>
                        <div className="app">
                          { /* Different componenets rendered depending on if someone is logged in. */}
                          {!currentUser ? <Login {...props} app={this} /> : currentUser==='admin' ? <AdminDashboard {...props} app={this} className="adminDashboard"/> : <div><TopBar {...props}  app={this}/><Profile {...props} currentUser={this.state.currentUser} app={this} /></div>}
                      </div> 
                      }
                      />
                      
          <Route exact path="/viewprofile/:username" render={ props => 
          <div className="app">
          {!currentUser ? <ViewProfile {...props} app={this}/> :  <div><TopBar {...props}  app={this}/><ViewProfile {...props} app={this}/></div>} 
          </div> 
          }
          /> 

          
          {/* <Route exact path = '/admin' render={()=>
                          (<AdminDashboard info={this.state} className="adminDashboard"/>)}/> */}
          <Route exact path = {["/search", ] /* any of these URLs are accepted. */ }
                 render={props=>
                        <div className="app">
                          { /* Different componenets rendered depending on if someone is logged in. */}
                          {!currentUser ? <Login {...props} app={this} /> : currentUser==='admin' ? <AdminDashboard {...props} app={this} className="adminDashboard"/> : <div><TopBar {...props}  app={this}/><AthleteSearch {...props} currentUser={this.state.currentUser} app={this} /></div>}
                      </div> 
                      }
                      />

                                        // ... spread operator - provides all of the props in the props object
          {/* <Route exact path = '/dashboard' render={({ history })=>
                          (<div> <TopBar /><Dashboard history={history} info={this.state} className="dashboard"/></div>)}/>
          <Route exact path = {['/', '/login']} render={({ props }) =>
                          (<Login history={history} app={this}/>)}/> */}
          
          <Route exact path = '/profile/TheRealLebronJames' render={props => 
                          (<div><TopBar {...props} app={this}/><Profile className="profile" global={this.state.users[0]}/></div>)}/>

          <Route exact path = '/userprofile/TheRealLebronJames' render={() => 
                          (<div><AdminTopBar/><Profile className="profile" global={this.state.users[0]}/></div>)}/>
          <Route exact path = '/userprofile/rapsowemeone' render={() => 
                          (<div><AdminTopBar/><Profile className="profile" global={this.state.users[1]}/></div>)}/>
          <Route exact path = '/userprofile/xXx_JamesHarden_xXx' render={() => 
                          (<div><AdminTopBar/><Profile className="profile" global={this.state.users[2]}/></div>)}/>
          <Route exact path = '/userprofile/coolguy123' render={() => 
                          (<div><AdminTopBar/><Profile className="profile" global={this.state.users[3]}/></div>)}/>
          <Route exact path = '/userprofile/PhilJackson' render={() => 
                          (<div><AdminTopBar/><Profile className="profile" global={this.state.users[4]}/></div>)}/>
          
          <Route exact path = '/viewprofile/TheRealLebronJames' render={props => 
                          (<div><TopBar {...props} app={this}/><ViewProfile className="viewProfile" global={this.state.users[0]}/></div>)}/>
          <Route exact path = '/viewprofile/rapsowemeone' render={props => 
                          (<div><TopBar {...props} app={this}/><ViewProfile className="viewProfile" global={this.state.users[1]}/></div>)}/>
          <Route exact path = '/viewprofile/xXx_JamesHarden_xXx' render={props => 
                          (<div><TopBar {...props} app={this}/><ViewProfile className="viewProfile" global={this.state.users[2]}/></div>)}/>
          <Route exact path = '/viewprofile/coolguy123' render={props => 
                          (<div><TopBar {...props} app={this}/><ViewProfile className="viewProfile" global={this.state.users[3]}/></div>)}/>
          <Route exact path = '/viewprofile/PhilJackson' render={props => 
                          (<div><TopBar {...props} app={this}/><ViewProfile className="viewProfile" global={this.state.users[4]}/></div>)}/>
          
          <Route exact path = '/messaging' render={props => 
                          (<div><TopBar {...props} app={this}/><Messaging className="messaging"/></div>)}/>
          <Route exact path = '/signup' render={props => 
                          (<Signup {...props} app={this} className="signup"/>)}/>
          <Route exact path = '/onboarding' render={props => 
                          (<Onboarding {...props} app={this} className="onboarding"/>)}/>
          <Route exact path = '/settings' render={props => 
                          (<div> <TopBar {...props} app={this}/><Settings {...props} global={this}/></div>)}/>
          <Route exact path = '/forgotpassword' render={() => 
                          (<ForgotPass/>)}/>

          <Route render={() => <div>404 Not found</div>} />
        </Switch>
      </BrowserRouter>)
  }
}

export default App;
