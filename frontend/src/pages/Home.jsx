import { motion } from "framer-motion";
import "./Cart.css";
import ProductCard from "../components/productCard";
import Footer from "../components/Footer";

const Home = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "The Psychology of Money",
      price: 19.99,
      image: "/images/psychology-of-money.jpg",
      description:
        "Learn how people think about money, wealth, and financial decisions.",
      href: "/book/psychology-of-money",
    },
    {
      id: 2,
      name: "Atomic Habits",
      price: 24.99,
      image: "/images/atomic-habits.jpg",
      description:
        "Build better habits and make meaningful changes in your daily life.",
      href: "/book/atomic-habits",
    },
    {
      id: 3,
      name: "The Alchemist",
      price: 14.99,
      image: "/images/the-alchemist.png",
      description:
        "A timeless story about dreams, purpose, and following your journey.",
      href: "/book/the-alchemist",
    },
    {
      id: 4,
      name: "Rich Dad Poor Dad",
      price: 21.99,
      image: "/images/rich-dad-poor-dad.webp",
      description:
        "Explore financial education, investing, and building wealth.",
      href: "/book/rich-dad-poor-dad",
    },
    {
      id: 5,
      name: "Deep Work",
      price: 22.99,
      image: "/images/Deep-Work.jpg",
      description:
        "Discover strategies for focused work and improving productivity.",
      href: "/book/deep-work",
    },
    {
      id: 6,
      name: "Ikigai",
      price: 17.99,
      image: "/images/ikigai.webp",
      description:
        "Explore the Japanese concept of finding purpose and meaning in life.",
      href: "/book/ikigai",
    },
  ];

  const viewBook = (product) => {
    window.location.href = product.href;
  };

  /* =========================================================
     COMMON TEXT ANIMATION
  ========================================================= */

  const textAnimation = {
    initial: {
      opacity: 0,
      y: 55,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.35,
    },

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <div className="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <motion.p
            className="hero-tag"
            {...textAnimation}
          >
            THE ART OF READING
          </motion.p>

          <motion.h1
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.08,
            }}
          >
            Stories that
            <br />
            <span>stay with you.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.16,
            }}
          >
            Discover thoughtfully selected books that inspire
            ideas, shape perspectives, and make every page
            worth turning.
          </motion.p>

          <motion.div
            className="hero-actions"
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.24,
            }}
          >
            <a
              href="#products"
              className="shop-btn"
            >
              Explore Collection
              <span>↗</span>
            </a>

            <a
              href="#about"
              className="hero-link"
            >
              Our Story
            </a>
          </motion.div>

        </div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <span>01</span>

          <div className="hero-line"></div>

          <span>CURATED FOR CURIOUS MINDS</span>
        </motion.div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="features">

        <motion.div
          className="feature"
          {...textAnimation}
        >
          <div className="feature-number">
            01
          </div>

          <div>
            <h3>Curated Collection</h3>

            <p>
              Handpicked books across fiction,
              business, finance and personal growth.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="feature"
          {...textAnimation}
          transition={{
            ...textAnimation.transition,
            delay: 0.1,
          }}
        >
          <div className="feature-number">
            02
          </div>

          <div>
            <h3>Fast Delivery</h3>

            <p>
              Your next great read delivered
              safely and quickly to your doorstep.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="feature"
          {...textAnimation}
          transition={{
            ...textAnimation.transition,
            delay: 0.2,
          }}
        >
          <div className="feature-number">
            03
          </div>

          <div>
            <h3>Secure Checkout</h3>

            <p>
              Simple and secure payments for
              a smooth shopping experience.
            </p>
          </div>
        </motion.div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        className="about"
        id="about"
      >

        <motion.div
          className="about-image"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="about-image-label">
            EST. 2026
          </div>
        </motion.div>


        <div className="about-content">

          <motion.p
            className="section-tag"
            {...textAnimation}
          >
            ABOUT BOOKSTORE
          </motion.p>

          <motion.h2
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.08,
            }}
          >
            More than books.
            <br />
            <span>A place to discover.</span>
          </motion.h2>

          <motion.p
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.16,
            }}
          >
            We believe the right book can change the way
            you see the world. That's why we bring together
            stories, ideas and knowledge worth spending
            time with.
          </motion.p>

          <motion.p
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.24,
            }}
          >
            From timeless fiction to books about money,
            productivity and personal growth, our collection
            is built for curious minds.
          </motion.p>


          <motion.div
            className="about-stats"
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.32,
            }}
          >

            <div>
              <strong>10K+</strong>
              <span>Readers</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Books</span>
            </div>

            <div>
              <strong>4.8</strong>
              <span>Rating</span>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        className="products-section"
        id="products"
      >

        <div className="section-header">

          <div>

            <motion.p
              className="section-tag"
              {...textAnimation}
            >
              OUR COLLECTION
            </motion.p>

            <motion.h2
              {...textAnimation}
              transition={{
                ...textAnimation.transition,
                delay: 0.08,
              }}
            >
              Find your next
              <br />
              <span>great read.</span>
            </motion.h2>

          </div>


          <motion.p
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.16,
            }}
          >
            Carefully selected titles for readers
            who enjoy discovering something new.
          </motion.p>

        </div>


        <div className="products-grid">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductCard
                product={product}
                addToCart={addToCart}
                viewBook={viewBook}
              />
            </motion.div>
          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <motion.p
            className="section-tag"
            {...textAnimation}
          >
            START READING
          </motion.p>

          <motion.h2
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.08,
            }}
          >
            One book can
            <br />
            <span>change everything.</span>
          </motion.h2>

          <motion.a
            href="#products"
            {...textAnimation}
            transition={{
              ...textAnimation.transition,
              delay: 0.16,
            }}
          >
            Explore Books
            <span>↗</span>
          </motion.a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer/>

    </div>
  );
};

export default Home;