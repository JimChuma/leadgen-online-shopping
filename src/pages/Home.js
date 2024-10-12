import { useEffect, useState } from "react";
import logo from "../images/logo-leadgen.png";
import "../styles/css/main.css";

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
    }, 3500);

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
    </>
  );
}
