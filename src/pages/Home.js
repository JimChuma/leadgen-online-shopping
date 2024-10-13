import { useEffect, useState } from "react";
import logo from "../images/logo-leadgen.png";
import "../styles/css/main.css";
import FeatureBox from "../components/home/FeatureBox";
import agencyWork1 from "../images/agency-work-06.jpg";
import agencyWork2 from "../images/agency-work-08.jpg";
import agencyWork3 from "../images/agency-work-03.jpg";
import TopFeature from "../components/home/TopFeature";
import productImg1 from "../images/product-img-01.jpg";
import productImg2 from "../images/product-img-02.jpg";
import productImg3 from "../images/product-img-03.jpg";
import productImg4 from "../images/product-img-04.jpg";

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (autoplay) {
        if (heroSlide < 2) {
          setHeroSlide(heroSlide + 1);
        } else {
          setHeroSlide(0);
        }
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [heroSlide, autoplay]);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      setScroll(1);
    } else {
      setScroll(0);
    }
  });

  const heroHeadline = [
    {
      heading: "WOMEN SUMMER LOOKBOOK",
      link: "#",
      text: "SHOP NOW",
      hero: "hero-one",
    },
    {
      heading: "BEST SELLING PRODUCTS",
      link: "#",
      text: "READ MORE",
      hero: "hero-two",
    },
    {
      heading: "HOT SUMMER FASHION",
      link: "#",
      text: "READ MORE",
      hero: "hero-three",
    },
  ];

  return (
    <>
      <header>
        <nav className={scroll ? "scroll" : null}>
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
          <ul className={menu ? "open" : null}>
            <a href="">
              <li>COLLECTION</li>
            </a>
            <a href="">
              <li>NEW ARRIVALS</li>
            </a>
            <a href="">
              <li>PRODUCTS</li>
            </a>
            <a href="">
              <li>BRANDS</li>
            </a>
            <a href="">
              <li>SALE</li>
            </a>
            <a href="">
              <li>REVIEW</li>
            </a>
            <a href="">
              <li>VISIT SHOP</li>
            </a>
          </ul>
          <button onClick={() => setMenu(!menu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
      <section
        id="home"
        className={heroHeadline[heroSlide].hero}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div>
          <div>
            <h2>{heroHeadline[heroSlide].heading}</h2>
            <a href={heroHeadline[heroSlide].link}>
              {heroHeadline[heroSlide].text}
            </a>
          </div>
          <div>
            <span
              className={heroSlide === 0 ? "active" : null}
              onClick={() => setHeroSlide(0)}
            ></span>
            <span
              className={heroSlide === 1 ? "active" : null}
              onClick={() => setHeroSlide(1)}
            ></span>
            <span
              className={heroSlide === 2 ? "active" : null}
              onClick={() => setHeroSlide(2)}
            ></span>
          </div>
        </div>
      </section>

      <main>
        <section>
          <div>
            <FeatureBox
              icon="ti-thumb-up"
              smallText="We guarantee you"
              bigText="100% original products"
            />
            <FeatureBox
              icon="ti-credit-card"
              smallText="We accept visa and mastercard"
              bigText="Payment options"
            />
            <FeatureBox
              icon="ti-headphone-alt"
              smallText="Amazing customer service"
              bigText="Customer service"
            />
          </div>
        </section>

        <section>
          <div>
            <a href="">
              <img src={agencyWork1} alt="" />
            </a>
            <a href="">
              <img src={agencyWork2} alt="" />
            </a>
            <a href="">
              <img src={agencyWork3} alt="" />
            </a>
          </div>
        </section>

        <section>
          <h2>New Arrivals</h2>
          <div>
            <TopFeature
              link=""
              image={productImg1}
              imageAlt=""
              title="Black Stripes Coat"
              category="Clothing, Man"
              price="$399"
            />
            <TopFeature
              link=""
              image={productImg2}
              imageAlt=""
              title="Navy Silk Coat"
              category="Clothing, Man"
              price="$299"
            />
            <TopFeature
              link=""
              image={productImg3}
              imageAlt=""
              title="Summer Fashion T-Shirt"
              category="Clothing, Man"
              price="$249"
            />
            <TopFeature
              link=""
              image={productImg4}
              imageAlt=""
              title="Formal Raincoat"
              category="Clothing, Man"
              price="$499"
            />
          </div>
        </section>
      </main>
    </>
  );
}
