import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AmazonHeader/>
      
    </>
  )
}
const AmazonHeader = () => {
  const styles = {
    header: {
      width: "100%",
      color: "white",
      fontFamily: "Arial, sans-serif",
    },
    top: {
      backgroundColor: "#131921",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      flexWrap: "wrap",
    },
    logo: {
      width: "110px",
      cursor: "pointer",
      filter: "brightness(0) invert(1)", // makes dark SVG white
    },
    location: {
      display: "flex",
      alignItems: "center",
      marginLeft: "10px",
      cursor: "pointer",
    },
    smallText: {
      fontSize: "12px",
      color: "#ccc",
      margin: 0,
    },
    boldText: {
      fontSize: "14px",
      fontWeight: "bold",
      margin: 0,
    },
    searchBar: {
      display: "flex",
      flex: 1,
      maxWidth: "600px",
      margin: "8px 10px",
      minWidth: "250px",
    },
    select: {
      padding: "8px",
      border: "none",
      background: "#f3f3f3",
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    input: {
      flex: 1,
      padding: "8px",
      border: "none",
      outline: "none",
      fontSize: "14px",
    },
    button: {
      backgroundColor: "#febd69",
      border: "none",
      padding: "8px 12px",
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
      cursor: "pointer",
    },
    option: {
      margin: "0 10px",
      cursor: "pointer",
      textAlign: "left",
    },
    cart: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      cursor: "pointer",
      marginLeft: "10px",
    },
    cartIcon: {
      fontSize: "24px",
    },
    cartCount: {
      position: "absolute",
      top: "-5px",
      left: "12px",
      backgroundColor: "#f08804",
      color: "black",
      fontWeight: "bold",
      borderRadius: "50%",
      padding: "2px 5px",
      fontSize: "12px",
    },
    bottom: {
      backgroundColor: "#232f3e",
      display: "flex",
      padding: "8px 20px",
      fontSize: "14px",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    bottomItem: {
      cursor: "pointer",
    },
  };

  return (
    <header style={styles.header}>
      {/* --- TOP BAR --- */}
      <div style={styles.top}>
        {/* Logo */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            style={styles.logo}
          />
        </div>

        {/* Location */}
        <div style={styles.location}>
          <FaMapMarkerAlt />
          <div style={{ marginLeft: "5px" }}>
            <p style={styles.smallText}>Deliver to</p>
            <p style={styles.boldText}>India</p>
          </div>
        </div>

        {/* Search Bar */}
        <div style={styles.searchBar}>
          <select style={styles.select}>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
          </select>
          <input type="text" placeholder="Search Amazon" style={styles.input} />
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f3a847")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#febd69")}
          >
            <FaSearch color="black" />
          </button>
        </div>

        {/* Account Info */}
        <div style={styles.option}>
          <p style={styles.smallText}>Hello, Sign in</p>
          <p style={styles.boldText}>Account & Lists</p>
        </div>

        {/* Orders */}
        <div style={styles.option}>
          <p style={styles.smallText}>Returns</p>
          <p style={styles.boldText}>& Orders</p>
        </div>

        {/* Cart */}
        <div style={styles.cart}>
          <FaShoppingCart style={styles.cartIcon} />
          <span style={styles.cartCount}>3</span>
          <p style={{ ...styles.boldText, marginLeft: "5px" }}>Cart</p>
        </div>
      </div>

      {/* --- BOTTOM NAV --- */}
      <div style={styles.bottom}>
        {["All", "Today's Deals", "Customer Service", "Gift Cards", "Sell"].map(
          (item, i) => (
            <p
              key={i}
              style={styles.bottomItem}
              onMouseOver={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              {item}
            </p>
          )
        )}
      </div>
    </header>
  );
};
const HeroSection = () => {
  const heroStyle = {
    width: "100%",
    height: "400px",
    backgroundImage:
      "url('https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/June23/AF/Deals-Unrec-PC._CB603473662_.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#111",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px 40px",
    borderRadius: "8px",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#f0c14b",
    border: "1px solid #a88734",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Welcome to Amazon</h2>
        <p>Discover deals, new arrivals, and more!</p>
        <button style={buttonStyle}>Shop Now</button>
      </div>
    </div>
  );
};
const HeroSection = () => {
  const heroStyle = {
    width: "100%",
    height: "400px",
    backgroundImage:
      "url('https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/June23/AF/Deals-Unrec-PC._CB603473662_.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#111",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px 40px",
    borderRadius: "8px",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#f0c14b",
    border: "1px solid #a88734",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Welcome to Amazon</h2>
        <p>Discover deals, new arrivals, and more!</p>
        <button style={buttonStyle}>Shop Now</button>
      </div>
    </div>
  );
};






export default App
