import React from "react";
import { Link } from "react-router-dom";

function MarqueeComponent() {
  return (
    <div className="marquee_container">
      <div className="marquee">
        <div className="marquee__group">
          {/* Repeat the item as needed */}
          <Link className="m-item" href="#your-link">
            <img
              src="https://dynamic.brandcrowd.com/asset/logo/c5d02ad5-9111-4a7c-847f-39199bd91ac6/logo-search-grid-2x?logoTemplateVersion=2&v=638257766655870000"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://dynamic.brandcrowd.com/asset/logo/c5d02ad5-9111-4a7c-847f-39199bd91ac6/logo-search-grid-2x?logoTemplateVersion=2&v=638257766655870000"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://dynamic.brandcrowd.com/asset/logo/c5d02ad5-9111-4a7c-847f-39199bd91ac6/logo-search-grid-2x?logoTemplateVersion=2&v=638257766655870000"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://dynamic.brandcrowd.com/asset/logo/c5d02ad5-9111-4a7c-847f-39199bd91ac6/logo-search-grid-2x?logoTemplateVersion=2&v=638257766655870000"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://dynamic.brandcrowd.com/asset/logo/c5d02ad5-9111-4a7c-847f-39199bd91ac6/logo-search-grid-2x?logoTemplateVersion=2&v=638257766655870000"
              alt="Elementor"
            />
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://dynamic.brandcrowd.com/asset/logo/c5d02ad5-9111-4a7c-847f-39199bd91ac6/logo-search-grid-2x?logoTemplateVersion=2&v=638257766655870000"
              alt="Elementor"
            />
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://i.pinimg.com/474x/34/c3/57/34c357ee31431b6cd13fe1ebe1d47980.jpg"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          {/* More items */}
        </div>
      </div>
      <div className="marquee marquee--reverse ">
        <div className="marquee__group">
          {/* Repeat the item as needed */}
          <Link className="m-item" href="#your-link">
            <img
              src="https://i.pinimg.com/474x/46/f1/4b/46f14b60a81c494a8d67eacf20ee9cf1.jpg"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://i.pinimg.com/474x/e2/a5/f1/e2a5f16042a8a8f9a5e84bcd3bfd989d.jpg"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://i.pinimg.com/474x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://i.pinimg.com/474x/61/2b/8b/612b8b92d8220d2d0c1d962f78015ec0.jpg"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://i.pinimg.com/474x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          <Link className="m-item" href="#your-link">
            <img
              src="https://i.pinimg.com/474x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg"
              alt="Elementor"
            />
            {/* <p>Elementor</p> */}
          </Link>
          {/* More items */}
        </div>
      </div>
    </div>
  );
}

export default MarqueeComponent;
