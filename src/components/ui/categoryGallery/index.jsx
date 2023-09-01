import { useEffect, useState } from "react";
import apiService from "../../../utilities/apiService";

import "./styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryGallery = ({ max = 20 }) => {
  const [categories, setCategories] = useState(undefined);
  const navigate = useNavigate();

  const handleClick = (id, name) => {
    navigate(`../category/${id}`, { state: { name: name } });
  };

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
                <div
                  key={category.id}
                  className="category__card"
                  id={category.id}
                  onClick={() => handleClick(category.id, category.name)}
                >
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
