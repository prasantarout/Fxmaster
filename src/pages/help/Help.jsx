import React, { useState } from "react";
import "../../css/Help.css";
import {
  FaArrowLeft,
  FaSearch,
  FaAngleDown,
  FaAngleUp,
  FaGreaterThan,
  FaGreaterThanEqual,
} from "react-icons/fa";
import Collapsible from "react-collapsible";
import icons from "../../theme";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <FaAngleUp /> : <FaAngleDown />}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const CardItemCard = ({ item }) => {
  return (
    <div className="card-item">
      <img src={item.icon} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
};

// const RenderFxAbout = () => {
//   const accordionData = [
//     {
//       title: "What is FX masters?",
//       content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
//       laborum cupiditate possimus labore, hic temporibus velit dicta earum
//       suscipit commodi eum enim atque at? Et perspiciatis dolore iure
//       voluptatem.`,
//     },
//     {
//       title: "Can I transfer without online banking?",
//       content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
//       reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
//       quaerat iure quos dolorum accusantium ducimus in illum vero commodi
//       pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
//       quidem maiores doloremque est numquam praesentium eos voluptatem amet!
//       Repudiandae, mollitia id reprehenderit a ab odit!`,
//     },
//     {
//       title: "Can I transfer without online banking?",
//       content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
//       quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
//       dolor ut sequi minus iste? Quas?`,
//     },
//     {
//       title: "Can I transfer without online banking?",
//       content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
//       quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
//       dolor ut sequi minus iste? Quas?`,
//     },
//   ];

//   return (
//     <div className="fxmaster_container_section">
//       <div className="fxmaster_wrapper">
//         <FaArrowLeft />
//         <span>About FX masters</span>
//       </div>
//       <div className="accordion">
//         {accordionData.map(({ title, content }) => (
//           <Accordion title={title} content={content} />
//         ))}
//       </div>
//     </div>
//   );
// };

const FrequentlyAsk = () => {
  const accordionData = [
    {
      title: "What is FX masters?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Can I transfer without online banking?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Can I transfer without online banking?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
    {
      title: "Can I transfer without online banking?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];
  return (
    <div className="frequent_Container">
      <div className="content_Frequent">
        <div className="content_header">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
        </div>
      </div>
      <div className="accrdian_wrapper">
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

const HaveMoreQuestions = () => {
  return (
    <div className="More_container">
      <div className="container_wrapper_help">
        <div className="leftside_wrapper">
          <h1>HAVE MORE QUESTIONS?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
          <div className="getinfo_btn">
            <button>GET IN TOUCH</button>
          </div>
        </div>
        <div className="rightside_Wrapper">
          <div className="circle">
            <img
              src={icons.dk}
              alt="contact"
              className="circle-img_help"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderCardItem = ({ item }) => {

  let CardItem=[
    {
      id:1,
      title:'About Fxmaster',
      icon:icons.fxx,
    },
    {
      id:2,
      title:'Wallet creation',
      icon:icons.icon6,
    },
    {
      id:3,
      title:'Adding money',
      icon:icons.icon5,
    },
    {
      id:4,
      title:'Sending money',
      icon:icons.icon3,
    },
    {
      id:5,
      title:'Account manager',
      icon:icons.icon2,
    },
    {
      id:6,
      title:'Adding recepient',
      icon:icons.icon8,
    },
    {
      id:7,
      title:'Fxmaster cards',
      icon:icons.icon4,
    },
  ]

  return (
    <div className="card_Cotainer">
    <div className="carditem-container">
    <div className="carditem-wrapper">
      {CardItem.map((item) => (
        <CardItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
  </div>
  )
}


const Help = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className="container_help">
        <div className="container_Wrapper_section">
          <div className="content_section">
            <div className="content_heading">
              <h1>DISCOVER WHAT YOU ARE LOOKING FOR</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit posuere
                vel venenatis, eu sit massa. Volutpat massa rhoncus odio.
              </p>
            </div>
          </div>
          <div className="button_section">
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              Personal
            </button>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Business
            </button>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              MSB
            </button>
          </div>
          <div className="search_section">
          <FaSearch className="fa-search" />
            <input type="text" placeholder="Search" /> 
          </div>
          {/* <RenderFxAbout /> */}
        </div>
      </div>
      <RenderCardItem/>
      <FrequentlyAsk />
      <HaveMoreQuestions />
      <TransferFxmaster />
      <Footer />
    </>
  );
};

export default Help;
