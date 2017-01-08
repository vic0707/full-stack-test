var Navbar = React.createClass({
  render: function() {
    return(
      <div className="navbar-parroquia navbar-parroquia-fixed">
        <a href="/" className="navbar-parroquia-brand">
        <img src="assets/logo.png" alt="tuParroquia"/>
        </a>

        <div className="navbar-parroquia-right hidden-xs">

          <a href="" className="navbar-parroquia-item navbar-parroquia-link">Blog</a>
          <a href="" className="navbar-parroquia-item navbar-parroquia-link">Soporte</a>
          <a href="" className="navbar-parroquia-item navbar-parroquia-link">Contacto</a>
        </div>
      </div>
    )
  }
});