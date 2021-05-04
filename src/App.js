import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import React ,{Component} from 'react'
import Home from './components/Home/Home'

class App extends Component {
  state = {
    showSideDrawer: true

  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer : !prevState.showSideDrawer}
    })

  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})

  }
  render() {
    
    return (
      <div style={{height:'100%'}}>
        
        <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer 
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler} />
        
        
        <Home />
        
      </div>
    );
  }

}

export default App;
