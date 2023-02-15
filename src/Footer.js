


const Footer = () => {

const sendEmail = () => {
  window.open('mailto:thabti.hicham@gmail.com')
}

const handleArrowClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

    return(
        <div className="footer">

        <div className="footerleftside">
        <p>© 2023 Hicham Thabti</p>
        </div>

        <div className="arrowup">
        <img className="arrowupimg"
        onClick={handleArrowClick}         
        src="../up_arrow_color.png" alt="Arrow icon" />

        </div>


        <div className="footerrightside">
        <img
          className="logolinkedinfooter"
          src="../linkedin_logo_color.png"
          alt="linkedin logo"
          onClick={() => window.open('https://www.linkedin.com/in/hicht/')}

        />
        <img
          className="logogithubfooter"
          src="../github_logo_color.png"
          alt="linkedin logo"
          onClick={() => window.open('https://github.com/hich-t')}
          
        />

        <img
          className="emailicon"
          src="../email_icon_color.png"
          alt="linkedin logo"
          onClick={sendEmail}          
        />

        </div>

        </div>
    )
}

export default Footer