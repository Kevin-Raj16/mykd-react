import { NavLink } from "react-router-dom";

function CommentBox({
  user,
  name,
  date,
  desc,
}: {
  user: string;
  name: string;
  date: string;
  desc: string;
}) {
  return (
    <div className="comments-box">
      <div className="comments-avatar">
        <img src={user} alt="img" />
      </div>
      <div className="comments-text">
        <div className="avatar-name">
          <h6 className="name">
            {name}{" "}
            <NavLink to="#" className="comment-reply-link">
              <i className="fas fa-reply"></i> Reply
            </NavLink>
          </h6>
          <span className="date">{date}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
const BlogComments = () => {
  return (
    <div className="latest-comments">
      <ul className="list-wrap">
        <li>
          <CommentBox
            user="/assets/img/blog/comment01.png"
            name="John William"
            date="September 6, 2023"
            desc="Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today."
          />
          <ul className="children">
            <li>
              <CommentBox
                user="/assets/img/blog/comment02.png"
                name="Hanry Foul"
                date="October 12, 2023"
                desc="Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today."
              />
            </li>
          </ul>
        </li>
        <li>
          <CommentBox
            user="/assets/img/blog/comment03.png"
            name="Luna Rose"
            date="December 12, 2022"
            desc="Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today."
          />
        </li>
      </ul>
    </div>
  );
};

export default BlogComments;
