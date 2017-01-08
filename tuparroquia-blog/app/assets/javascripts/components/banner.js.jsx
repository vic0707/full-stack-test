var Banner = React.createClass({
  render: function() {
    // store background image in variable to use later
    var imgUrl = this.props.img_src;
    var bannerStyle = {
      backgroundImage: 'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url('+imgUrl+')'
    };

    // Display banner
    return(
      <div className="banner" style={bannerStyle}>
        <div className="banner-content">
        <img src="assets/logo.png" alt="tuParroquia"/>
          <h1>tuParroquia</h1>
          <p>Gestiona las necesidades de tuParroquia en una sola plataforma</p>
        </div>
      </div>
    )
  }
});