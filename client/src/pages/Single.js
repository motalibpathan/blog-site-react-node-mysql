import React from "react";
import { Link } from "react-router-dom";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/How-to-store-fruit-to-keep-it-fresh-resized.jpg"
            alt=""
          />
          <div className="info">
            <span>Jhon</span>
            <p>2 Days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          vero, nostrum temporibus ea quaerat blanditiis! Optio sed ab, rem
          doloremque repellendus aperiam cum excepturi, quibusdam labore non
          dolor asperiores alias repellat voluptates hic? Iusto, reiciendis ipsa
          harum aliquam optio esse quae magni odit rerum quisquam neque
          consequatur modi! Odio error suscipit accusamus architecto non sint
          temporibus voluptatum? Molestiae esse non quo omnis. Provident amet
          est inventore excepturi, facere fugit exercitationem nemo quidem?
          Dolor eos, odit dolorum odio doloremque hic adipisci ratione sed
          dignissimos temporibus labore mollitia modi earum ex rem harum alias?
          Reprehenderit dolores distinctio nulla praesentium asperiores non
          architecto?
        </p>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
