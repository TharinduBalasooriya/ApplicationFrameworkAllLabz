import React from 'react'
import Posts from './Posts';
import PostHolder from './PostHolder'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export default class App extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
  
                <Router>
                    <Switch>
                        <Route exact path="/posts">
                            <PostHolder></PostHolder>
                        </Route>
                        <Redirect to='/posts'></Redirect>
                    </Switch>
                </Router>
        );
    }
}