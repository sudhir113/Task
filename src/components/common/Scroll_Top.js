import React, { Component } from 'react'

export class Scroll_top extends Component {

    componentDidMount(){
      $(window).scroll(function(){
				var toTopOffset =  $(window).scrollTop();
      console.log('toTopOffset',toTopOffset);
      var toTopHidden = 150;
      if(toTopHidden<toTopOffset){
        console.log('add class caled');
        $('#scrollTop').addClass('btn btn-icon btn-circle btn-success btn-scroll-to-top fade show ');
      }else {
        $('#scrollTop').removeClass('btn btn-icon btn-circle btn-success btn-scroll-to-top fade show ');
      }
			});

        $('#scrollTop').on('click', function () {
          console.log('scoll top called')
            $('html, body').animate({ scrollTop: 0 }, 1000);
        });
         }
    
  render() {
    return (
        <div >
      <a id="scrollTop" className="topvisible  ">
      <i className="fa fa-angle-up arrow"></i>
      </a>
      </div>
    )
  }
}

export default Scroll_top;

