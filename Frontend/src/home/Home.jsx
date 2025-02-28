import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Evento🎉
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your one-stop platform for seamless event management.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="explore-btn"
        >
          Explore Events
        </motion.button>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <h2>Upcoming Events 📅</h2>
        <div className="events-list">
          <motion.div
            className="event-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Tech Innovators Meetup</h3>
            <p>Join the brightest minds in tech on March 15, 2025.</p>
          </motion.div>
          <motion.div
            className="event-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Startup Pitch Fest</h3>
            <p>Pitch your startup idea & win funding! April 10, 2025.</p>
          </motion.div>
          <motion.div
            className="event-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>AI Conference 2025</h3>
            <p>Discover the latest AI innovations. May 20, 2025.</p>
          </motion.div>
        </div>
      </section>

      {/* Previous Users */}
      <section className="users-section">
        <h2>Our Community 🌟</h2>
        <div className="users-grid">
          <motion.div className="user-card" whileHover={{ scale: 1.05 }}>
            <img src="https://th.bing.com/th/id/OIP.MkDe0JAMDwUZ78yqJaWUIAHaKX?w=208&h=291&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User" />
            <p>John Doe - Hosted 5 Events</p>
          </motion.div>
          <motion.div className="user-card" whileHover={{ scale: 1.05 }}>
            <img src="https://th.bing.com/th/id/OIP.y5o3pHrXFNYlQujcBkcmIQHaJc?w=156&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User" />
            <p>Emma Smith - Attended 12 Events</p>
          </motion.div>
          <motion.div className="user-card" whileHover={{ scale: 1.05 }}>
            <img src="https://thumbs.dreamstime.com/z/indian-business-man-5950030.jpg" alt="User" />
            <p>Michael Lee - Organizer</p>
          </motion.div>
        </div>
      </section>

      {/* Acknowledgements */}
      <section className="testimonials-section">
        <h2>User Testimonials 💬</h2>
        <div className="testimonials">
          <motion.div className="testimonial" whileHover={{ scale: 1.05 }}>
            <p>"EventSphere made our conference a huge success!"</p>
            <span>- Sarah Johnson</span>
          </motion.div>
          <motion.div className="testimonial" whileHover={{ scale: 1.05 }}>
            <p>"Best platform for organizing hassle-free events!"</p>
            <span>- Alex Roberts</span>
          </motion.div>
        </div>
      </section>
    </div>
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
