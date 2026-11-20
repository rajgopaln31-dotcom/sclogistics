import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icon';
import {  NAV, PHONE, PHONE_HREF } from '../data/site';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="l">
  <a
    href="https://www.google.com/maps/search/?api=1&query=Yousufguda+Checkpost+Hyderabad"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <Icon name="pin" />Yousufguda Checkpost, Hyderabad
  </a>
 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adinarayana@sclogistics.in"
  target="_blank"
  rel="noopener noreferrer"
>
  adinarayana@sclogistics.in
</a>
          </div>
          <div className="r">Safe journeys. Dependable operations.</div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <Link className="brand" to="/" onClick={close}>
            <img src="/images/logo.png" alt="Sri Chinimilli Logistics" />
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={close}
                className={({ isActive }) => `link${isActive ? ' active' : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
    <a
  className="talk"
  href="tel:+9000202828"
>
  <Icon name="phone" size="18px" />
  <span>
    <small>Talk to us</small>
    <b>{PHONE}</b>
  </span>
</a>
            <Link className="btn btn-navy btn-sm" to="/contact" onClick={close}>
              Get a quote <Icon name="arrow" />
            </Link>
          </nav>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            &#9776;
          </button>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div>
            <img className="logo" src="/images/logo1.png" alt="SCL" />
            <p>Sri Chinimilli Logistics provides safe, technology-enabled employee and corporate transportation across Hyderabad.</p>
            <a className="ph" href={PHONE_HREF}><Icon name="phone" />{PHONE}</a>
          </div>
          <div>
            <h5>Our Gallery</h5>
            <div className="fg">
              <img src="/images/team.jpg" alt="" />
              <img src="/images/fleet-row-2.jpg" alt="" />
              <img src="/images/driver.jpg" alt="" />
              <img src="/images/cars-row.jpg" alt="" />
            </div>
          </div>
          <div>
            <h5>Our Services</h5>
            <ul>
              <li><Link to="/services">Staff Transportation</Link></li>
              <li><Link to="/services">Shuttle Services</Link></li>
              <li><Link to="/services">Corporate Solutions</Link></li>
              <li><Link to="/services">Electric Vehicle Fleet</Link></li>
            </ul>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/about">About SCL</Link></li>
              <li><Link to="/infrastructure">Infrastructure</Link></li>
              <li><Link to="/#insights">Insights</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
         <div>
  <h5>Get in Touch</h5>

  <p>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Road+No+49+Plot+No+961+Swamy+Ayyappa+Society+Madhapur+Hyderabad+Telangana+500081"
      target="_blank"
      rel="noopener noreferrer"
    >
      Road No. 49, Plot No. 961,<br />
      Swamy Ayyappa Society, Madhapur,<br />
      Hyderabad, Telangana 500081
    </a>
  </p>

  <p style={{ marginTop: 12 }}>
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adinarayana@sclogistics.in"
  target="_blank"
  rel="noopener noreferrer"
>
  adinarayana@sclogistics.in
</a>
  </p>
</div>
        </div>
        <div className="copy">
          <span>&copy; 2026 Sri Chinimilli Logistics Pvt. Ltd.</span>
          <span>Designed and developed by <b>Megaviz Technologies</b></span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
