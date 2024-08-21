import "./Hero.style.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__profile">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptatem veritatis, similique eaque ut laboriosam deserunt dignissimos ea magni laudantium quis.</p>
          <button>Reserve a Table</button>
        </div>
        <img src="src\assets\restauranfood.jpg" alt="" />
      </div>
    </section>
  );
}

export default Hero;
