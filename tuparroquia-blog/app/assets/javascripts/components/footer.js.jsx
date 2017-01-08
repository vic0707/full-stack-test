var Footer = React.createClass({
  render: function() {
    // Display footer
    return(
    	<div className="footer">
    	  <div className="container-fluid">
    	    <div className="row">
    	      <div className="col-xs-12 col-md-6">
    	        <div className="links-socials">
    	          <ul>
    	            <li>
    	              <a target="_blank" href="#">
    	              <i className="fa fa-facebook"></i></a>
    	            </li>
    	            <li>
    	              <a target="_blank" href="#">
    	              <i className="fa fa-twitter"></i></a>
    	            </li>
    	            <li>
    	              <a target="_blank" href="#">
    	              <i className="fa fa-instagram"></i></a>
    	            </li>
    	          </ul>
    	        </div>
    	      </div>
    	      <div className="col-xs-12 col-md-5">
    	        <div className="copyrights">
    	          <p>Made with <i className="fa fa-heart"></i> by Victor</p>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</div>
    )
  }
});