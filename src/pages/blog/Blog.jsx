import React, { useState } from "react";
import "../../css/Blog.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaAngleDown,
  FaAngleUp,
  FaGreaterThan,
  FaGreaterThanEqual,
} from "react-icons/fa";
import icons from "../../theme";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";

const RenderCard = () => {
  return (
    <div className="card_Section_content">
      <div className="card_section_menu">
        <img src={icons.mobile} alt="Card Image" className="card_image" />
        <div className="card_content">
          <p className="card_author">BY SAMUEL - FEBRUARY 7, 2023</p>
          <h3 className="card_title">All you need to know about transfers</h3>
          <p className="card_description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.Lorem ipsum
            dolor sit amet consectetur adipiscing elit elit elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio. Lorem
          </p>
          <button className="read_more_button">Read More</button>
        </div>
      </div>
    </div>
  );
};

const RenderBlogContent = () => {
  const dataItem = [
    {
      id: 1,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 2,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 3,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 4,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 5,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 6,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 7,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 8,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 9,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
    {
      id: 1,
      image: icons.blog,
      title: "Fashion and Money. Joint...",
      author: "BY SAMUEL - FEBRUARY 7, 2023",
      desc: "Lorem ipsum dolor sit amet cVolutpat massa rhoncus odio. Lorem ...",
    },
  ];
  return (
    <>
    <div className="blog-content-container">
      <div className="blog-wrapper">
        {dataItem.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <div className="card_content_start">
              <h3>{item.author}</h3>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href="#">Read more</a>
            </div>
          </div>
        ))}
  
      </div>
     
    </div>
    <div className="pagination">
          <FaArrowLeft />
          <a href="" className="active">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <FaArrowRight />
        </div>
    </>
  );
};


const HaveMoreQuestions = () => {
  return (
    <div className="More_container_wrapper">
      <div className="container_wrapper_more">
        <div className="leftside_wrapper">
          <h1>WANT TO READ MORE?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
          <div className="getinfo_btn">
            <button>Subscribe to newsletter</button>
          </div>
        </div>
        <div className="rightside_Wrapper">
          <div className="circle">
            <img
              src={icons.dk}
              alt="contact"
              className="circle-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <div className="container_blog">
        <div className="container_blog_section">
          <div className="content_section_Blog">
            <div className="content_heading_blog">
              <h1>
                F<span style={{ color: "blue" }}>x</span>MASTER BLOG
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit posuere
                vel venenatis, eu sit massa. Volutpat massa rhoncus odio.
              </p>
            </div>
          </div>
          <div className="button_section_blog">
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              All
            </button>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Personal
            </button>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Business
            </button>
            <button
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick(4)}
            >
              MSB
            </button>
            <button
              className={activeButton === 5 ? "active" : ""}
              onClick={() => handleButtonClick(5)}
            >
              Academy
            </button>
            <button
              className={activeButton === 6 ? "active" : ""}
              onClick={() => handleButtonClick(6)}
            >
              News
            </button>
          </div>
          <div className="search_section_blog">
            <input type="text" placeholder="Search" />
            <FaSearch className="fa-search_icon" />
          </div>
        </div>
      </div>
      <RenderCard />
      <RenderBlogContent />
      <HaveMoreQuestions/>
      <TransferFxmaster/>
      <Footer/>
    </>
  );
};

export default Blog;
