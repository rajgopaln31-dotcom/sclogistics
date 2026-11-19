import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <div>
          <div className="eyebrow light">Move with confidence</div>
          <h2>Reliable transport starts with a conversation.</h2>
        </div>
        <Link className="btn btn-orange" to="/contact">
          Make a custom request <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
