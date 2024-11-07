import { NavLink } from 'react-router-dom';
import { IBlog } from '../../types/blog-type';
import BlogComments from './blog-comments';
import BlogSidebar from '../blog/blog-sidebar';
import BlogCommentForm from '../forms/blog-comment-form';

const BlogDetailsArea = ({blog}:{blog:IBlog}) => {
  return (
    <section className="blog-area blog-details-area">
    <div className="container">
        <div className="row justify-content-center">
            <div className="blog-post-wrapper">
                <div className="blog-post-item">
                    <div className="blog-post-thumb">
                        <img src={blog.img} alt="img" />
                    </div>
                    <div className="blog-post-content blog-details-content">
                        <div className="blog-post-meta">
                            <ul className="list-wrap">
                                <li>By<NavLink to="#">{blog.author}</NavLink></li>
                                <li><i className="far fa-calendar-alt"></i> {blog.date}</li>
                                <li><i className="far fa-comments"></i><NavLink to="#">{blog.comments === 0 ? 'No comments' : `${blog.comments} comments`}</NavLink></li>
                            </ul>
                        </div>
                        <h2 className="title text-capitalize">{blog.title}</h2>
                        <p>Excepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit in voluptate velit esse cillum dolorliquip ex ea commodo repderit in voluptate consequat nulla ullaorper.</p>
                        <blockquote>
                            <p>Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry.</p>
                        </blockquote>
                        <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit.</p>
                        <p>Simply dummy text of printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum solliciin.Duis aute irure dolor in repderit.</p>
                        <div className="blog-details-inner">
                            <h4 className="inner-title">nft games android no investment</h4>
                            <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industries standsaard sipiscing Duis elementum solliciin.Duis aute irure dolor in repderit.</p>
                        </div>
                        <div className="blog-details-inner-img">
                            <img src="/assets/img/blog/blog_post02.jpg" alt="img" />
                        </div>
                        <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry.</p>
                        <div className="blog-details-bottom">
                            <div className="row">
                                <div className="col-xl-6 col-md-7">
                                    <div className="tg-post-tags">
                                        <h5 className="tags-title">tags :</h5>
                                        <ul className="list-wrap d-flex flex-wrap align-items-center m-0">
                                            <li><NavLink to="#">Esports</NavLink>,</li>
                                            <li><NavLink to="#">Fantasy</NavLink>,</li>
                                            <li><NavLink to="#">game</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-5">
                                    <div className="blog-post-share justify-content-start justify-content-md-end">
                                        <h5 className="share">share :</h5>
                                        <ul className="list-wrap">
                                            <li><NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fab fa-twitter"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog__avatar-wrap mb-65">
                    <div className="blog__avatar-img">
                        <NavLink to="#"><img src="/assets/img/blog/avatar.jpg" alt="img"/></NavLink>
                    </div>
                    <div className="blog__avatar-info">
                        <span className="designation">Written by</span>
                        <h4 className="name"><NavLink to="#">Kaceytron G.</NavLink></h4>
                        <p>Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor.</p>
                    </div>
                </div>
                <div className="comments-wrap">
                    <h4 className="comments-wrap-title">3 Comments</h4>
                   {/* blog comments start */}
                   <BlogComments/>
                   {/* blog comments end */}
                </div>
                <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>
                    {/* form start */}
                    <BlogCommentForm/>
                    {/* form end */}
                </div>
            </div>
            <div className="blog-post-sidebar">
               {/* blog sidebar start */}
            <BlogSidebar />
            {/* blog sidebar end */}
            </div>
        </div>
    </div>
  </section>
  );
};

export default BlogDetailsArea;