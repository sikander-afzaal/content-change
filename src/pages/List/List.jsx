import React from "react";
import "./List.css";
function List() {
  return (
    <div className="list-wrapper">
      <div className="list">
        <h1>Our Services</h1>
        <div className="row-list">
          <a href="#eye">
            <span>Eyelash Services</span>
          </a>
          <a href="#makeup">
            <span>Semi Permanent Makeup Services</span>
          </a>
          <a href="#nails">
            <span>Nail Services</span>
          </a>
        </div>
        <div className="price-list-box" id="eye">
          <h2>Eyelash Service Price</h2>
          <p>
            Home visiting(Dubai) - <strong>70 AED</strong>
          </p>
          <p>
            CLASSIC eyelash extensions (one by one) - <strong>280 AED</strong>
          </p>
          <p>
            H2D (natural look) eyelashes extension - <strong>320 AED</strong>
          </p>
          <p>
            3D (volume) eyelashes extension - <strong>340 AED</strong>
          </p>
          <p>
            DRAMATIC eyelash extension -<strong>440 AED</strong>
          </p>
          <p>
            Eyebrow LAMINATION (trend Brows) - <strong>240 AED</strong>
          </p>
          <p>
            Eyelash Extension & Eyebrow Lamination package -
            <strong>500 AED</strong>
          </p>
          <p>
            Eyelash LIFTING (curly lashes) - <strong>240 AED</strong>
          </p>
          <p>
            Eyelashes extensions BOTTOM line - <strong>100 AED</strong>
          </p>
          <p>
            Refill for 2D (natural look) eyelashes extension -{" "}
            <strong>260 AED</strong>
          </p>
          <p>
            Refill for 3D (volume) eyelashes extension -{" "}
            <strong>280 AED</strong>
          </p>
          <p>
            Refill for Dramatic eyelashes extension - <strong>380 AED</strong>
          </p>
          <p>
            Refill for RUSSIAN VOLUME eyelash extension -{" "}
            <strong>330 AED</strong>
          </p>
          <p>
            REMOVING eyelashes extensions - <strong>50 AED</strong>
          </p>
          <p>
            Eyebrow Cleaning - <strong>50 AED</strong>
          </p>
          <p>
            Eyebrow colour - <strong>50 AED</strong>
          </p>
        </div>
        <div className="price-list-box" id="makeup">
          <h2> Semi Permanent Makeup Service Price</h2>
          <p>
            Consultation - <strong>0 AED</strong>
          </p>
          <p>
            Home visiting - <strong>70 AED</strong>
          </p>
          <p>
            Powder brows - <strong>900 AED</strong>
          </p>
          <p>
            Eyebrow shading - <strong>900 AED</strong>
          </p>
          <p>
            Microblading  -<strong>900 AED</strong>
          </p>
          <p>
            Lips Blushing - <strong>900 AED</strong>
          </p>
          <p>
            Eyeliner SPMU -<strong>900 AED</strong>
          </p>
          <p>
            Retouching EYEBROW SHADING - <strong>500 AED</strong>
          </p>
          <p>
            Retouching MICROBLADING - <strong>500 AED</strong>
          </p>
          <p>
            Retouching LIPS - <strong>500 AED</strong>
          </p>
          <p>
            Retouching EYELINER - <strong>500 AED</strong>
          </p>
          <p>
            Tatoo Removal - <strong>380 AED</strong>
          </p>
        </div>
        <div className="price-list-box" id="nails">
          <h2>Nails Service Price</h2>
          <p>
            Home visiting Dubai - <strong>70 AED</strong>
          </p>
          <p>
            Removal  - <strong>50 AED</strong>
          </p>
          <p>
            Nails cleaning - <strong>70 AED</strong>
          </p>
          <p>
            Manicure - <strong>140 AED</strong>
          </p>
          <p>
            Pedicure  - <strong>160 AED</strong>
          </p>
          <p>
            Gelish -<strong>60 AED</strong>
          </p>
          <p>
            French - <strong>50 AED</strong>
          </p>
          <p>
            Overlay normal - <strong>190 AED</strong>
          </p>
          <p>
            Nail designs per nails - <strong>10 AED</strong>
          </p>
          <p>
            Acrylic gel - <strong>190 AED</strong>
          </p>
          <p>
            Special designs - <strong>50 AED</strong>
          </p>
          <p>
            Nails new - <strong>200 AED</strong>
          </p>
          <p>
            Gelish manicure - <strong>190 AED</strong>
          </p>
          <p>
            Gelish pedicure - <strong>205 AED</strong>
          </p>
          <p>
            Hard gel overlay manicure - <strong>265 AED</strong>
          </p>
          <p>
            Short nail extension - <strong>315 AED</strong>
          </p>
          <p>
            Medium nail extension - <strong>350 AED</strong>
          </p>
          <p>
            Long nail extension - <strong>390 AED</strong>
          </p>
          <p>
            Refill nail extension - <strong>285 AED</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default List;
