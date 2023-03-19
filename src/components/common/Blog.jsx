import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "./services/Helper";

function Blog() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [popular, setPopular] = useState([]);
  const [takes, setTakes] = useState(2);
  const [topBlog, setTopBlog] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const getBlog = () => {
      fetch(BASE_URL + "/getBlog/" + takes)
        .then((res) => res.json())
        .then((json) => {
          setData(json.data);
          setAllData(json.data);

          setIsLoaded(true)
          // setRecent_blog(json.recent_blog);
          // setCategory(json.category);
        });
    };
    getBlog();
  }, [takes]);
  useEffect(() => {
    if (isLoaded) {
      setTopBlog(data[0]);
    }
  }, [data]);


  const handleTakes = () => {
    setTakes(takes * 2);
  };

  const [tab, setTab] = useState("");
  function TabChange(event) {
    setTab(event.target.getAttribute("data-label"));
  }
  function handlePopular(event) {
    setTab(event.target.getAttribute("data-label"));
    const numAscending = [...allData].sort((b, a) => a.likes - b.likes);
    setData(numAscending);
    setTopBlog(data[0]);
  }
  function handleAll(event) {
    setTab(event.target.getAttribute("data-label"));

    setData(allData);
    setTopBlog(data[0]);
  }


  function handleLatest(event) {
    var mlist = [];
    var month_name = function (dt) {
      mlist = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return mlist[dt.getMonth()];
    };
    var d = new Date();
    d.setMonth(d.getMonth() - 1);

    // var dateString =String(month_name(d)+"-"+d.getDate()+","+d.getFullYear());




    setTab(event.target.getAttribute("data-label"));

    const numAscending = allData.filter(data => data.created_at > "Feb-13,2023")


    setData(numAscending);
    setTopBlog(data[0]);
  }

  useEffect(() => {
    setTab("AllBlog")
  }, []);

  let background = topBlog.photo;

  if (isLoaded === false) {
    return (
      <><Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12 order-list2">
              <ul>
                <li>
                  <span>Home</span>
                  <i className="fa fa-angle-right order-arrow-right"></i>
                </li>
                <li>
                  <span>Blogs</span>
                </li>
              </ul>
            </div>

            <div className="col-md-12 spaceblog">
              <section className="blogdiv">
                <ul>
                  <li
                    data-label="AllBlog"
                    onClick={TabChange}
                    className={tab === "AllBlog" ? "blogActive" : "blogDeActive"}
                  >
                    All
                  </li>
                  <li
                    data-label="letestBlog"
                    onClick={TabChange}
                    className={tab === "letestBlog" ? "blogActive" : "blogDeActive"}
                  >
                    Latest
                  </li>
                  <li
                    data-label="popular"
                    onClick={TabChange}
                    className={tab === "popular" ? "blogActive" : "blogDeActive"}
                  >
                    Popular
                  </li>
                </ul>
              </section>

              <section>
                <div class="input-group">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Posts"
                    className="SearchInput"
                  />
                  <div class="iconSearch">
                    <span class="input-group-text">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-white text-center mt-5">
              <h5>Loading...</h5>
            </div></div></div>

      </>
    );
  }
  else {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12 order-list2">
              <ul>
                <li>
                  <span>Home</span>
                  <i className="fa fa-angle-right order-arrow-right"></i>
                </li>
                <li>
                  <span>Blogs</span>
                </li>
              </ul>
            </div>

            <div className="col-md-12 spaceblog">
              <section className="blogdiv">
                <ul>
                  <li
                    data-label="AllBlog"
                    onClick={handleAll}
                    className={tab === "AllBlog" ? "blogActive" : "blogDeActive"}
                  >
                    All
                  </li>
                  <li
                    data-label="letestBlog"
                    onClick={handleLatest}
                    className={tab === "letestBlog" ? "blogActive" : "blogDeActive"}
                  >
                    Latest
                  </li>
                  <li
                    data-label="popular"
                    onClick={handlePopular}
                    className={tab === "popular" ? "blogActive" : "blogDeActive"}
                  >
                    Popular
                  </li>
                </ul>
              </section>

              <section>
                <div class="input-group">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Posts"
                    className="SearchInput"
                  />
                  <div class="iconSearch">
                    <span class="input-group-text">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="blog_topimg"
                style={{
                  backgroundImage: "url(" + JSON.stringify(background) + ")",
                }}
              >
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="blog_blackimg">
                      <section>
                        <div className="row">
                          <div className="col-md-6 p-5 blog_blackimg_text">
                            <span>
                              <i class="fa fa-clock-o"></i>{" "}
                              {topBlog.created_at}
                            </span>
                          </div>
                          <div className="col-md-6 p-5 blog_blackright_text">
                            <span>
                              <i class="fa fa-thumbs-up"></i> {topBlog.likes}
                            </span>
                            <span>
                              <i class="fa fa-share-alt"></i> 102
                            </span>
                          </div>

                          <div className="col-md-12 text-center slash_0 blog_blackright_text2">
                            <span>{topBlog.name}</span>
                            <p>By Admin / {topBlog.author}</p>
                          </div>
                          <div className="col-md-12 p-5 blog_blackright_text3">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: topBlog.ck_editor,
                              }}
                            ></p>
                          </div>
                          <div className="col-md-8"></div>
                          <div className="col-md-4 blog_blackbutton">
                            <NavLink
                              to={{ pathname: "/Blogdetails" }}
                              state={{
                                id: topBlog.id,
                              }}
                            >
                              <button className="btn">Read More..</button>
                            </NavLink>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "-5%" }}>
          <div className="row blog_blackpage_card">
            {data.map((data, index) => (
              <div className="col-md-4 service-card">
                <div className="card fcard blog_cards">
                  <div className="card-top blog-img1">
                    <section className="text-right">
                      <span
                        data-aos="fade-bottom"
                        data-aos-delay="1000"
                        className="blog-carddate"
                      >
                        {data.created_at}
                      </span>
                    </section>
                    <img src={data.photo} alt="card-img" />
                  </div>
                  <div className="card-body blog-cardbody">
                    <div className="card-tital blog-cardhead blog_blackcard_text">
                      <h5 data-aos="fade-bottom" data-aos-delay="1100">
                        {data.name}
                      </h5>
                      <span data-aos="fade-bottom" data-aos-delay="1200">
                        By Admin / {data.author}
                      </span>
                      <p
                        dangerouslySetInnerHTML={{ __html: data.ck_editor }}
                        data-aos="fade-bottom"
                        data-aos-delay="1300"
                      ></p>

                      <div className="row">
                        <div className="col-md-8 blog_blackright_text">
                          <span>
                            <i class="fa fa-thumbs-up"></i> {data.likes}
                          </span>
                          <span>
                            <i class="fa fa-share-alt"></i> 102
                          </span>
                        </div>
                        <div className="col-md-4 blog_blackbutton_1">
                          <NavLink
                            to={{ pathname: "/Blogdetails" }}
                            state={{
                              id: data.id,
                            }}
                          >
                            <button className="btn">Read More..</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-md-12 blog_blackpage_bottom">
              <button className="btn" onClick={handleTakes}>
                Load More
              </button>
            </div>
          </div>
        </div>






        <Footer />
      </>
    );
  }

}

export default Blog;
