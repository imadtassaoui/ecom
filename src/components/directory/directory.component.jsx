import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Women",
          imgUrl: "./img/front-image.jpg",
          id: 1,
        },
        {
          title: "Men",
          imgUrl: "./img/men.jpg",
          id: 2,
        },
        {
          title: "Shirts",
          imgUrl: "./img/women.jpg",
          id: 3,
        },
        {
          title: "Jackets",
          imgUrl: "./img/jackets.jpg",
          id: 4,
        },
        {
          title: "Shop Now",
          imgUrl: "./img/shop-now.jpg",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imgUrl, id }) => (
          <MenuItem key={id} title={title} className="item" />
        ))}
      </div>
    );
  }
}

export default Directory;
