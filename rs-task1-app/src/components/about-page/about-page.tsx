import "./about-page.css";
function AboutPage() {
  return (
    <div id="About">
      <h2>About Us</h2>
      <p>This is first module of RS School React course</p>
      <p>I am Ranynight. My contacts:</p>
      <div
        className="social-list"
        id="Socials"
      >
        <li className="social-item">
          <div className="social-icon telegram"></div>
          <a
            href="https://t.me/raNYnight"
            className="social-link"
          >
            Telegram
          </a>
        </li>
        <li className="social-item">
          <div className="social-icon github"></div>
          <a
            href="https://github.com/raNYnight"
            className="social-link"
          >
            GitHub
          </a>
        </li>
        <li className="social-item">
          <div className="social-icon discord"></div>
          <a
            href="https://discordapp.com/users/raNYnighty#0973"
            className="social-link"
          >
            Discord
          </a>
        </li>
        <li className="social-item">
          <div className="social-icon inst"></div>
          <a
            href="https://www.instagram.com/ranynight/"
            className="social-link"
          >
            Instagram
          </a>
        </li>
      </div>
    </div>
  );
}
export default AboutPage;
