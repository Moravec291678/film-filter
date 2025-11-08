import "./Movies.css";
import data from "../data";

const Movies = ({ typeOfMovie }) => {
  return (
    <div className="row">
      <div className="row__track">
        {data.filter(item => item.category === typeOfMovie).map((item) => {
          const { id, image, title, age, tags, description, category } = item;
          return (
            <article className="card one-movie" key={id} aria-label={title}>
              <div className="card__media">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="card__overlay">
                <h3 className="card__title">{title}</h3>
                <p className="card__meta">{age} • {Array.isArray(tags) ? tags.join(" • ") : tags}</p>
                <p className="card__desc">{description}</p>
                <div className="card__actions">
                  <span className="badge">{category}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
