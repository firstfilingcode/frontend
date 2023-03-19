import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import blogbottomimg1 from "../common/Images/blogbottomimg1.png";
import blogbottomimg from "../common/Images/blogbottomimg.png";
import Modal from "react-bootstrap/Modal";
import { BASE_URL, myAxios } from "./services/Helper";
import { useLocation } from "react-router-dom";
import { BlogComments } from "./services/BlogComments";
function Blogdetails() {
  let location = useLocation();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const [replyOnComment, setReplyOnComment] = useState(false);
  const [replierUserId, setReplierUserId] = useState(null);
  const [blogCommentId, setBlogCommentId] = useState(null);
  const [userBlogLike, setUserBlogLike] = useState(0);
  const [blogLikes, setBlogLikes] = useState(0);
  const [blogShare, setBlogShare] = useState(0);
  const [shareStatus, setShareStatus] = useState("false");
  const [all_blog_ids, setAll_blog_ids] = useState([]);

  const [currentBlogId, setCurrentBlogId] = useState(location.state.id);

  const handleReply = (value, blogCommId) => {
    var elem = document.getElementById("replyBox");
    elem.scrollIntoView();
    setReplierUserId(value);
    setReplyOnComment(true);
    setBlogCommentId(blogCommId);
  };

  let formData = new FormData();
  let formData1 = new FormData();
  const handleLike = (value) => {
    setLike();
  };
  const handleShare = (value) => {
    setShared();
  };

  const setLike = () => {
    formData.append("user_id", localStorage.getItem("user_id"));
    formData.append("blog_id", currentBlogId);
    myAxios({
      method: "post",
      url: BASE_URL + "/blogLikes",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        if (response.status) {
          getBlog();
        } else {
          getBlog();
        }

        //  alert(JSON.stringify(response.data));
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const setShared = () => {
    formData1.append("user_id", localStorage.getItem("user_id"));
    formData1.append("blog_id", currentBlogId);
    myAxios({
      method: "post",
      url: BASE_URL + "/blogShared",
      data: formData1,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        if (response.status) {
          setShareStatus("true");
          getBlog();

          //  alert("shared")
        }

        //  alert(JSON.stringify(response.data));
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const getBlog = () => {
    fetch(
      BASE_URL +
      "/getBlogDetail/" +
      currentBlogId +
      "/" +
      localStorage.getItem("user_id")
    )
      .then((res) => res.json())
      .then((json) => {
        //alert(JSON.stringify(json.data[0]))
        setData(json.data[0]);
        setComment(json.data_comment);
        setUserBlogLike(parseInt(json.user_blog_like.likes));
        setBlogLikes(json.blog_likes);
        setBlogShare(json.blog_share);
        setAll_blog_ids(json.all_blog_ids);
        //  alert(JSON.stringify(json.user_blog_like.likes));

        if (shareStatus === "true") {
          window.open("https://wa.me/8079094990?text=Isdfslk", "_blank");
        }
      });
  };
  useEffect(() => {
    getBlog();
  }, [currentBlogId]);

  const [showModal, setShowModal] = useState(false);
  const [blogComments, setblogComments] = useState({
    user_id: localStorage.getItem("user_id"),
    blog_id: currentBlogId,
    name: "",
    email: "",
    website: "",
    comments: "",
  });

  const handleChange = (event, property) => {
    setblogComments({ ...blogComments, [property]: event.target.value });
  };

  const [count, setCount] = useState(0);
  const handleNext = () => {
    var index = all_blog_ids.indexOf(currentBlogId);
    if (index < all_blog_ids.length - 1) {
      setCurrentBlogId(all_blog_ids[index + 1]);
    }
  };
  const handlePrev = () => {
    var index = all_blog_ids.indexOf(currentBlogId);

    if (index > 0) {
      setCurrentBlogId(all_blog_ids[index - 1]);
    }
  };

  const Blogcomments = (event) => {
    event.preventDefault();

    // alert(JSON.stringify(blogComments))

    BlogComments({
      user_id: localStorage.getItem("user_id"),
      blog_id: currentBlogId,
      name: blogComments.name,
      email: blogComments.email,
      website: blogComments.website,
      comments: blogComments.comments,
      blogCommentId: blogCommentId,
      replierUserId: replierUserId,
      replyOnComment: replyOnComment,
    }).then((resp) => {
      console.log(resp);
      if (resp.success) {
        getBlog();
        // alert("Comment Send Successfully");
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
        setblogComments({
          user_id: localStorage.getItem("user_id"),
          blog_id: currentBlogId,
          name: "",
          email: "",
          website: "",
          comments: "",
        });
        setReplierUserId("");
        setReplyOnComment(false);
        setBlogCommentId(null);
      } else {
        alert(resp.message);
      }
      console.log("success log");
    });
  };

  let background = data.photo;
  return (
    <>
      <div
        className="backgroundBLogDetail"
        style={{
          backgroundImage: "url(" + JSON.stringify(background) + ")",
        }}
      >
        <section className="video_backcolor2">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-2 blogpage_imgbtn1">
                <button onClick={handlePrev} className="btn">
                  <i className="fa fa-caret-left"></i>
                </button>
                <br />
                <span>Prev Blog</span>
              </div>
              <div className="col-md-8 col_margin_top"></div>
              <div className="col-md-2 blogpage_imgbtn text-right">
                <button onClick={handleNext} className="btn">
                  <i className="fa fa-caret-right"></i>
                </button>
                <br />
                <span>Next Blog</span>
              </div>
              <div className="col-md-12 order-list2 blog_details_li">
                <ul>
                  <li>
                    <span>Home</span>
                    <i className="fa fa-angle-right order-arrow-right"></i>
                  </li>
                  <li>
                    <span>Blogs</span>
                    <i className="fa fa-angle-right order-arrow-right"></i>
                  </li>
                  <li>
                    <span>{data.name}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="like_blog_page">
          <div className="blog_share_page">
            <button className="btn" onClick={handleLike}>
              <i
                className="fa fa-thumbs-up"
                style={{ color: userBlogLike === 0 ? "black" : "pink" }}
              ></i>
            </button>
            <button className="btn" onClick={handleShare}>
              <i className="fa fa-share-alt"></i>
            </button>
            <button className="btn">
              <i className="fa fa-file"></i>
            </button>
          </div>
        </div>
        <div className="row p-5 blog_detailsRow">
          <div className="col-md-3 mt-4 blog_blackimg_text_10">
            <span>
              <i className="fa fa-clock-o"></i> {data.created_at}
            </span>
          </div>
          <div className="col-md-6 mt-4"></div>
          <div className="col-md-3 mt-4 blog_blackright_text_10">
            <span>
              <i className="fa fa-thumbs-up"></i> {blogLikes}
            </span>
            <span>
              <i className="fa fa-share-alt"></i> {blogShare}
            </span>
          </div>

          <div className="col-md-12 text-center slash_1 blog_details">
            <span>{data.name}</span>
            <p>By Admin / {data.author}</p>
          </div>
          <div className="col-md-12 blog_details_1">
            <p dangerouslySetInnerHTML={{ __html: data.ck_editor }}></p>
          </div>

          <div className="col-md-6 blog_detailsimg">
            <img src={data.photo} alt="" />
          </div>
          <div className="col-md-6 blog_details_1">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem.
            </p>
          </div>

          <div className="col-md-12 blog_details_1">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
          </div>

          <div className="col-md-12 blog_detailsimg2">
            <img src={data.photo} alt="" />
          </div>

          <div className="col-md-12 blog_details_1">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
          </div>
        </div>

        <div className="row p-5 blog-comments_main">
          <div className="col-md-12 blog_comments_top text-center">
            <span>{comment.length} Comments</span>
          </div>
          {comment.map((data, index) => (
            <>
              <div className="col-md-1">
                <img src={blogbottomimg} alt="" />
              </div>

              <div className="col-md-8 blog_comments">
                <p>{data.commentor_name}</p>
                <span>{data.created_at}</span>
              </div>
              <div className="col-md-3 text-right blog_comments_bt">
                <button
                  className="btn mt-3"
                  onClick={(e) => {
                    handleReply(data.user_id, data.id);
                  }}
                >
                  <i className="fa fa-mail-reply"></i> Reply
                </button>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-11 mt-3 blogcomments_text">
                <p>{data.comments} </p>
              </div>
              {data.reply.map((item, index) => (
                <>
                  <div className="col-md-1"></div>
                  <div className="col-md-1">
                    <img src={blogbottomimg1} alt={item.replier} />
                  </div>
                  <div className="col-md-7 blog_comments">
                    <p>{item.replier}</p>
                    <span>{item.created_at}</span>
                  </div>
                  <div className="col-md-3 text-right blog_comments_bt">
                    {/* <button className="btn mt-3"><i className="fa fa-mail-reply"></i> Reply</button> */}
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-10 mt-3 blogcomments_text">
                    <p>{item.reply}</p>
                  </div>
                </>
              ))}
              <div className="col-md-12 mt-5 mb-5 blogcomment_break"></div>
            </>
          ))}
        </div>

        <form onSubmit={Blogcomments} id="replyBox">
          <div className="row p-3 mb-5 blog_details_chatcom">
            <div className="col-md-12 mt-5 text-center blog_detailsTOPtext">
              <span>Write a Comment </span>
            </div>
            <div className="col-md-4 mt-4 blog_details_postin">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                id="name"
                onChange={(e) => handleChange(e, "name")}
                value={blogComments.name}
              />
            </div>
            <div className="col-md-4 mt-4 blog_details_postin">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                id="email"
                onChange={(e) => handleChange(e, "email")}
                value={blogComments.email}
              />
            </div>
            <div className="col-md-4 mt-4 blog_details_postin">
              <input
                type="text"
                className="form-control"
                placeholder="Website"
                name="website"
                id="website"
                onChange={(e) => handleChange(e, "website")}
                value={blogComments.website}
              />
            </div>
            <div className="col-md-12 mt-3 blog_details_postin">
              <textarea
                className="form-control"
                name="comments"
                placeholder="Enter your comment here"
                id="comments"
                cols="5"
                rows="5"
                onChange={(e) => handleChange(e, "comments")}
                value={blogComments.comments}
              ></textarea>
            </div>
            <div className="col-md-12 mt-3 blog_details_postchek">
              <input
                className="form-check-input"
                type="checkbox"
                name=""
                id=""
              />
              <span>
                Save my name, email, and website in this browser for the next
                time I comment.
              </span>
            </div>
            <div className="col-md-12 text-center">
              <button type="sumbit" className=" btn buynow59">
                <span className="buytext">Post Comment</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />

      <Modal
        show={showModal}
        id="success_tic"
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        backdrop="static"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="p-0">
          <div className="modal-content">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-12 m-h-20 bg-img rounded-left"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1525097596740-cb2a70e07e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")',
                  }}
                />
                <div className="col-md-12 text-center py-5 px-sm-5">
                  <h2 className="h2Text">Comment Send Successfully</h2>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Blogdetails;
