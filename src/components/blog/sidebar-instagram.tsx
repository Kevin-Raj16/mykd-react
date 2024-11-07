import { NavLink } from "react-router-dom";

// instagram images
const instagram_images:{
  link: string;
  img: string;
}[] = [
  {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta01.jpg'},
  {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta02.jpg'},
  {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta03.jpg'},
  {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta04.jpg'},
  {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta05.jpg'},
  {link:'https://www.instagram.com/',img:'/assets/img/instagram/insta06.jpg'},
];

const SidebarInstagram = () => {
  return (
    <div className="sidebar__insta">
      {instagram_images.map((item, i) => (
        <div key={i} className="sidebar__insta-item">
          <NavLink to={item.link} target="_blank">
            <img src={item.img} alt="img" />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SidebarInstagram;
