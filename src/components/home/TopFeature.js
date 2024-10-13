export default function TopFeature({
  link,
  image,
  imageAlt,
  title,
  category,
  price,
}) {
  return (
    <div>
      <a href={link}>
        <img src={image} alt={imageAlt} />
      </a>
      <a href={link}>
        <h3>{title}</h3>
      </a>
      <div>{category}</div>
      <div>{price}</div>
      <a href={link}>SHOP NOW</a>
    </div>
  );
}
