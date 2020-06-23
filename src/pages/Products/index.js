import React, { Component } from "react";

class Products extends Component {
    constructor(props) {
        super(props)
    
      this.state = {
          color:[
              {
                  color: '#2e94da',
                  className: 'color-1'
              },{
                color: '#9b59b6',
                className: 'color-2'
            },{
                color: '#16a085',
                className: 'color-3'
            },{
                color: '#4b6580',
                className: 'color-4'
            },{
                color: '#d64457',
                className: 'color-5'
              },
              {
                color: '#E67E22',
                className: 'color-6'
            },
              {
                color: '#4bac4d',
                className: 'color-7'
            },
            {
              color: '#6e9992',
              className: 'color-8'
          },
          {
            color: '#d73b8c',
            className: 'color-9'
        }
          ]
      }
      }
    
      onClick(e) {
        this.setState({color: e.color, className: e.className});
      }
    
      
    render() {
        return(
            <div id="products">
            </div>
        );
    }
}

export default Products;