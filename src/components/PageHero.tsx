interface PageHeroProps {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}

export default function PageHero({ eyebrow, title, text, image }: PageHeroProps) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(/images/${image})` }}>
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="crumb">
          Home <i>/</i> <b>{title}</b>
        </div>
      </div>
    </section>
  );
}
