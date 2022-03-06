import React, { useRef, useState, useEffect } from "react";
import "./assets/sass/main.scss";

function App() {
  const slider = useRef(null);
  const [sliderValue, setSliderValue] = useState(3);
  const [checked, setChecked] = useState(false);

  const pageviews = ["10K", "50K", "100K", "500K", "1M"];
  const prices = [8, 12, 16, 24, 36];
  const DISCOUNT = 0.25;

  // Set color for slider
  useEffect(() => {
    let value =
      ((slider.current.value - slider.current.min) /
        (slider.current.max - slider.current.min)) *
      100;
    slider.current.style.background =
      "linear-gradient(to right, #82CFD0 0%, #82CFD0 " +
      value +
      "%, #ECF0FB " +
      value +
      "%, #ECF0FB 100%)";
  }, [sliderValue]);

  return (
    <div className="wrapper">
      <div className="cta">
        <h1 className="h1-like">Simple, traffic-based pricing</h1>
        <p className="p-like p-cta">
          Sign-up for our 30 day trial. No credit card required.
        </p>
      </div>
      <div className="price-card">
        <div className="slider">
          <p className="p-like p-slider">
            {pageviews[sliderValue - 1]} PAGEVIEWS
          </p>
          <input
            ref={slider}
            type="range"
            min="1"
            max="5"
            value={sliderValue}
            onInput={(e) => setSliderValue(e.target.value)}
          />
          <p className="p-like">
            <span className="p-price">
              $
              {!checked
                ? prices[sliderValue - 1].toFixed(2)
                : (
                    prices[sliderValue - 1] -
                    prices[sliderValue - 1] * DISCOUNT
                  ).toFixed(2)}
            </span>{" "}
            / month
          </p>
        </div>
        <div className="bill">
          <p className="p-like p-bill">Monthy Billing</p>
          <label class="switch">
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span class="slider round"></span>
          </label>
          <p className="p-like p-bill"> Yearly Billing</p>
          <span className="discount">-25%</span>
        </div>
        <div className="divider"></div>
        <div className="footer-cta">
          <ul className="features">
            <li className="p-like feature">Unlimited websites</li>
            <li className="p-like feature">100% data ownership</li>
            <li className="p-like feature">Email reports</li>
          </ul>
          <button className="p-like btn">Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default App;
