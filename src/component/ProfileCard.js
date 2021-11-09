import "./ProfileCard.css";

export default function CardBig({ name, nim }) {
  return (
    <div className="container">
      <h2>{name}</h2>
			<p>{nim}</p>
    </div>
  );
}
