export function CardProject({ title, type, link, image }) {
  const propsLink = {};
  !!link && (propsLink["href"] = link);
  !!link && (propsLink["target"] = "_blank");
  return (
    <a {...propsLink}>
      <div className="Project">
        <img src={image} />
        <h4 className="Type-project">{type}</h4>
        <p className="Title-project">{title}</p>
      </div>
    </a>
  );
}
