const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet yor needs.
              </li>
              <li>
                <a href="tel:912345678">
                  <i className="fa-solid fa-phone"></i> &nbsp; 912 345 678
                </a>
              </li>
              <li>
                <a href="mailto:carrental@gmail.com">
                  <i className="fa-solid fa-envelope">
                    &nbsp; carrental@gmail.com
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://xpeedstudio.com/"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Design by XpeedStudio
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Lisbon</a>
              </li>
              <li>
                <a href="#home">Carrers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Newsletter</li>
              <li>
                <p>
                  Subscribe to our newsletter to receive our latest news &
                  updates
                </p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address" />
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
