import React from 'react';
import HomePage from '../components/HomePage';

class HomeController extends React.Component{
  click(){
    alert(" I am clicked");
  }

  render() {
        return (
          <HomePage handleClick={this.click.bind(this)} />
        );
    }

}

export default HomeController;
