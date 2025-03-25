import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn2.gyftr.com%2Fgyftrweb%2Fbrands%2F4.png&w=384&q=75",
  "https://cardinsider.com/wp-content/uploads/2023/10/Get-10-Cashback-With-AU-Bank-Credit-Cards-on-Amazon-Flipkart-news-Post.jpg",
  "https://static.toiimg.com/thumb/msid-113642863,width-1280,height-720,resizemode-4/113642863.jpg",
  "https://img.theweek.in/content/dam/week/week/news/biz-tech/images/2024/7/3/Amazon%20Prime%20Day%20Sale%202024.jpg",
  "https://www.cardexpert.in/wp-content/uploads/2018/07/Amazon-Voucher-Yesbank-spend-based-offer-copy.jpg",
  "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn2.gyftr.com%2Fgyftrweb%2Fbrands%2F4.png&w=384&q=75",
  "https://cardinsider.com/wp-content/uploads/2023/10/Get-10-Cashback-With-AU-Bank-Credit-Cards-on-Amazon-Flipkart-news-Post.jpg",
  "https://static.toiimg.com/thumb/msid-113642863,width-1280,height-720,resizemode-4/113642863.jpg",
  "https://img.theweek.in/content/dam/week/week/news/biz-tech/images/2024/7/3/Amazon%20Prime%20Day%20Sale%202024.jpg",
  "https://www.cardexpert.in/wp-content/uploads/2018/07/Amazon-Voucher-Yesbank-spend-based-offer-copy.jpg",
  "https://www.gyftr.com/_next/image?url=https%3A%2F%2Fcdn2.gyftr.com%2Fgyftrweb%2Fbrands%2F4.png&w=384&q=75",
  "https://cardinsider.com/wp-content/uploads/2023/10/Get-10-Cashback-With-AU-Bank-Credit-Cards-on-Amazon-Flipkart-news-Post.jpg",
  "https://static.toiimg.com/thumb/msid-113642863,width-1280,height-720,resizemode-4/113642863.jpg",
  "https://img.theweek.in/content/dam/week/week/news/biz-tech/images/2024/7/3/Amazon%20Prime%20Day%20Sale%202024.jpg",
  "https://www.cardexpert.in/wp-content/uploads/2018/07/Amazon-Voucher-Yesbank-spend-based-offer-copy.jpg",
  "https://static.toiimg.com/thumb/msid-113642863,width-1280,height-720,resizemode-4/113642863.jpg",
  "https://img.theweek.in/content/dam/week/week/news/biz-tech/images/2024/7/3/Amazon%20Prime%20Day%20Sale%202024.jpg",
  "https://www.cardexpert.in/wp-content/uploads/2018/07/Amazon-Voucher-Yesbank-spend-based-offer-copy.jpg"

];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const cycleCount = useRef(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setIndex((prevIndex) => {
      if (prevIndex + 1 === images.length) {
        cycleCount.current += 1; // Increase cycle count when one full cycle completes
      }

      if (cycleCount.current === 5) {
        cycleCount.current = 0; // Reset cycle count after 5 cycles
        return 0; // Restart from the first image
      }

      return (prevIndex + 1) % images.length;
    });
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container" style={styles.container}>
      <div
        className="slider-track"
        style={{ ...styles.slider, transform: `translateX(${-index * 500}px)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            className="slider-image"
            src={img}
            alt={`Slide ${i}`}
            style={styles.image}
          />
        ))}
      </div>
      <button className="slider-btn slider-btn-left" style={styles.btn} onClick={prevSlide}>
        &#8592;
      </button>
      <button className="slider-btn slider-btn-right" style={styles.btnRight} onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
};

// Styles
const styles = {
  container: {
    position: "relative",
    width: "1500px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
  },
  slider: {
    display: "flex",
    transition: "transform 0.3s ease-in-out",
  },
  image: {
    width: "600px",
    height: "300px",
    objectFit: "cover",
  },
  btn: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "24px",
    borderRadius: "50%",
  },
  btnRight: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "24px",
    borderRadius: "50%",
  }
};


// **Media Queries (Add in CSS File)**
const mediaStyles = `
  @media screen and (max-width: 768px) {
    .slider-container {
      max-width: 50%;
    }
    .slider-image {
      height: 200px;
    }
    .slider-btn {
      padding: 5px 10px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    .slider-image {
      height: 150px;
    }
    .slider-btn {
      padding: 5px;
      font-size: 16px;
    }
  }
`;

// **Dynamically inject styles into the document**
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaStyles;
document.head.appendChild(styleSheet);

export default Slider;
