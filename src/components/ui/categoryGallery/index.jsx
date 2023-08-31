import { useEffect, useState } from "react";
import apiService from "../../../utilities/apiService";

import "./styles.scss";

const CategoryGallery = ({ max = 20 }) => {
  const [categories, setCategories] = useState(undefined);

  useEffect(() => {
    apiService.getAll("genre/movie/list").then((response) => {
      setCategories(response.genres);
    });
  }, []);

  return (
    <section>
      <h2 className="section__title">Popular Categories</h2>
      <div className="category__gallery">
        {categories
          ? categories.map((category, index) => {
              return index <= max ? (
                <div key={category.id} className="category__card">
                  <h3 className="category__card-text">{category.name}</h3>
                </div>
              ) : null;
            })
          : null}
      </div>
    </section>
  );
};
export default CategoryGallery;
