const Header = () => {
    return(
      <div>
      <img src="logo.png" style={{width: "100px", marginTop: "10px",}}/>
      <div className="header_main">
        <h2>
          <b>DynastyBitcoin Tweets</b>
        </h2>
        <div className="buttons">
        <a href="https://twitter.com/dynastybitcoin?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-related="EricSan27481063" data-show-screen-name="false" data-show-count="true">
          Follow us on twitter
        </a>
        </div>
      </div>
      </div>
    ); 
  }

  
  export default Header;