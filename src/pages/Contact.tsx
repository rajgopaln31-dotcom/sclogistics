import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import Cta from '../components/Cta';
import { EMAIL } from '../data/site';

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact SCL" title="Let’s plan the journey" text="Tell us where your transport operation needs to go next." image="fleet-wide.jpg" />
      <section>
        <div className="container cform" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2 className="big">Your requirements, our full attention</h2>
            <p className="muted" style={{ marginBottom: 30 }}>Speak to our team about employee transportation, event travel, airport transfers or a custom mobility plan.</p>
 <ul className="cinfo">
  <li>
    <div className="ico"><Icon name="mail" /></div>
    <div>
      <small>Email address</small>
      <b>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </b>
    </div>
  </li>

  <li>
    <div className="ico"><Icon name="phone" /></div>
    <div>
      <small>Phone</small>
      <b>
        <a href="tel:+914045166065">+91 40 4516 6065</a>
      </b>
      <span className="muted" style={{ display: 'block', fontSize: 13 }}>
        <a href="tel:+919441202828">+91 94412 02828</a>
      </span>
    </div>
  </li>

  <li>
    <div className="ico"><Icon name="pin" /></div>
    <div>
      <small>Office address</small>
      <b>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Road+No+49+Plot+No+961+Swamy+Ayyappa+Society+Madhapur+Hyderabad+500081"
          target="_blank"
          rel="noopener noreferrer"
        >
          Road No. 49, Plot No. 961
        </a>
      </b>
      <span className="muted" style={{ display: 'block', fontSize: 13 }}>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Road+No+49+Plot+No+961+Swamy+Ayyappa+Society+Madhapur+Hyderabad+500081"
          target="_blank"
          rel="noopener noreferrer"
        >
          Swamy Ayyappa Society, Madhapur,<br />
          Hyderabad, Telangana 500081
        </a>
      </span>
    </div>
  </li>
</ul>
          </div>
          <div className="formcard">
            <h3>Contact us</h3>
            <p>Complete the form and our team will get back to you shortly.</p>
            <ContactForm full />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
