var Posts = React.createClass({
  render: function() {
    // Different post entries are saved in posts variable 
    posts = this.props.posts.map( function(post) {
      return (
        <div className="col-md-6 col-md-offset-3 post">
          <h3 className="post-title">{post.title}</h3>
          <h5 className="post-subtitle">{post.subtitle}</h5>
          <p className="post-creator">Escrito por {post.creator}</p>
        </div>
      );
    });

    // Will return all posts + button to show older entries
    return(

      <div className="container">
        <div className="row">
          {posts}
        </div>
        <div className="row">
          <div className="col-md-1 col-md-offset-8 post-older">
            <div className="btn btn-default">
            <h6>Entradas antiguas <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h6>      
            </div>
          </div>
        </div>
      </div>

    )
  }
});