import "./menu-item.styles.scss";

const MenuItem = (props) => {
  return (
    <div className={props.className}>
      <h1 className="item-name"></h1>
      <span className="subtitle">{props.subtitle}</span>
    </div>
  );
};

export default MenuItem;
