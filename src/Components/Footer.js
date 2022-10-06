import React from 'react'
import '../Assets/Footer.css'


function Footer() {
  const socials = [
    {
      id: 1,
      link: "https://www.facebook.com/phamquan.2204",
      icon: "fa-brands fa-facebook"
    },
    {
      id: 2,
      link: "https://github.com/phamquan220400",
      icon: "fa-brands fa-github"
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/phamquan2204/",
      icon: "fa-brands fa-linkedin"
    }
  ]
  return (
    <div className="footer_container">

      <div className="footer mt-3 bg-dark p-3 text-light row">
        <div className="col-lg-4 col-sm-12 text-jus">
          <p className="text-wrap">This is my project base on Java Guides's project</p>
          <p className="text-wrap">
            <a
              href="https://www.youtube.com/playlist?list=PLGRDMO4rOGcNLnW1L2vgsExTBg-VPoZHr">
              Java Guides's playlist
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 text-justify">
          <p className="text-wrap">
            Copyright &copy; by <a
              href="https://www.facebook.com/phamquan.2204"
              className="text-light"
            > Pham Quan</a>
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          {socials.map((social) => {
            const { id, link, icon } = social
            return (
              <p key={id} className="socials text-wrap text-justify text-light">
                <i className={icon}></i> <a href={link}>{link}</a>
              </p>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer