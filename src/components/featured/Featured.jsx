import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
// import img
import featured from "../../assets/img/fetured.jfif";
import info from "../../assets/img/info.png";
import "./featured.scss";

const Featured = (props) => {
  const { type } = props;
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span> {type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={featured} alt="featured" />

      <div className="info">
        <img src={info} alt="info" />
        <span className=" desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
          temporibus provident rerum perspiciatis repudiandae autem dolore,
          aliquam reiciendis debitis iure iste explicabo fugiat sit ullam. Iste
          rerum accusamus suscipit dignissimos!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>play</span>
          </button>

          <button className="more">
            <InfoOutlined />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
