import React, { useState, useEffect, useRef } from "react";
import mainBg from "../../assets/img/mainBg.png";
import section01 from "../../assets/img/section01.png";
import section02 from "../../assets/img/section02.png";
import section03 from "../../assets/img/section03.png";
import section04 from "../../assets/img/section04.png";
import section05 from "../../assets/img/section05.png";
import section06 from "../../assets/img/section06.png";
import section07 from "../../assets/img/section07.png";
import section08 from "../../assets/img/section08.png";
import section09 from "../../assets/img/section09.png";
import section10 from "../../assets/img/section10.png";
import section11 from "../../assets/img/section11.png";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.container}>
      <div className={styles.mainBg}>
        <img src={mainBg} alt="main" />
      </div>
      <div className={styles.section}>
        <img src={section01} alt="section01" />
        <div className={styles.sectionText01}>
          <h2>Doggienuts</h2>
          <div>
            <span>H</span>uman-grade fresh meat and organs
          </div>
          <div>
            <span>P</span>roprietary vitamin and mineral additions
          </div>
          <div>
            <span>S</span>emi-moist formulation with high moisture content
          </div>
          <div>
            <span>C</span>omplete nutritional balance with over 40 essential
            nutrients
          </div>
          <div>
            <span>C</span>ooked at temperatures below 80 degrees to minimize
            nutrient loss
          </div>
          <div>
            <span>A</span>natural diet that can be fed as a staple food
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section02} alt="section02" />
        <div className={styles.sectionText02}>
          <h2>
            <span>D</span>OGGIENUTS
          </h2>
          <div>Doggienut is an all-natural pet food brand that offers one</div>
          <div>of the most diverse sources of single proteins in korea.</div>
          <div>We make our porducts with a whopping 14 different</div>
          <div>single proteins.</div>
          <div>Chicken, duck, beef, salmon, kangaroo, turkey, deer, and</div>
          <div>
            rabbit, white fish, horse, black goat, pig, sheep, and tuna.
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section03} alt="section01" />
        <div className={styles.sectionText03}>
          <h2>
            <span className={styles.span}>D</span>oggienuts Chips
          </h2>
          <div>
            <span>C</span>omplete nutritional balance with 40+ essential
            nutrients
          </div>
          <div>
            <span>D</span>ry formulation with a chewy, firm texture
          </div>
          <div>
            <span>C</span>ooked at Temperatures below 80 degrees to minimize
          </div>
          <div>nutrient loss</div>
          <div>
            <span>W</span>hole food for stock feeding
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section04} alt="section04" />
        <div className={styles.sectionText04}>
          <h2>
            <span>Buggienut </span>is a natural diet made with superfood
          </h2>
          <h2>white house crickets</h2>
          <div>100% Human Grade Cricket</div>
          <br />
          <div>3x more protein than chicken and beef</div>
          <div>4x more iron than broccoli and spinach</div>
          <div>More calcium than milk</div>
          <div>More Omega-3s than salmon</div>
          <div>
            Excellent source of vitamins, minerals, omega-3 and 6 fatty acids
          </div>
          <div>Complete protein with all nine essential amino acids</div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section05} alt="section05" />
        <div className={styles.sectionText05}>
          <h2>
            <span>D</span>oggienut <span>S</span>tew
          </h2>
        </div>

        <div className={styles.trippa}>
          <div>The Roman diet of nourishment</div>
          <div>
            <span>Trippa</span>
          </div>
        </div>

        <div className={styles.Ratatouille}>
          <div>Healthy Food in Provence</div>
          <div>
            <span>Ratatouille</span>
          </div>
        </div>

        <div className={styles.Bouillabaisse}>
          <div>A gift from the Medierranean</div>
          <div>
            <span>Bouillabaisse</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section06} alt="section06" />
        <div className={styles.sectionText06}>
          <h2>
            <span>S</span>tew
          </h2>
          <div>it’s not churu!</div>
          <div>it’s a delicious dish!</div>
        </div>
        <div className={styles.sectionSubText06}>
          <p>Booster Stew as a sprinkle on top of kibble or raw food</p>
          <p>Convenient meals you can feed anytime, anywhere</p>
          <p>
            Delicious dishes with less excess nutrients and more health
            benefits!
          </p>
          <p>
            A nutritious treat that can be fed as a topping or a special treat.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section07} alt="section07" />
        <div className={styles.sectionText07}>
          <h2>
            <span>D</span>HN
          </h2>
          <div>It will be presented with Dr. Kazuyoshi Tokumoto, a </div>
          <div>veterinarian specializing in nutrition</div>
          <div>Dogginuts Health & Nutrition’s Nutrition Supplement </div>
          <div>Specialized Brand</div>
          <br />
          <div>The difference in the raw materials the difference in </div>
          <div>effectiveness </div>
          <div>Meet the highest-spec nutritional supplements</div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section08} alt="section08" />
        <div className={styles.sectionText08}>
          <div>
            <span>Doggienuts Stew</span> was awarded 1st place for{" "}
          </div>
          <div>“New Product of the Year” at the K-PET FAIR,</div>
          <div>the largest pet fair in Korea.</div>
          <div>this was a significant achievement based solely</div>
          <div>consumer votes.</div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section09} alt="section09" />
        <div className={styles.sectionText09}>
          <div>Doggienuts have grown into a consumer favorite</div>
          <div>
            It’s a traveling staple a must-have gift for your pet’s birthday or
            Christmas
          </div>
          <div>and a comfort food for sick dogs.</div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section10} alt="section10" />
        <div className={styles.sectionText10}>
          <div>
            Our products are loved by kibble-free pets and pets with picky
            eaters.
          </div>
          <div>
            It’s also known for being a greate food for elderly and sick dogs.
          </div>
          <div>
            So it’s been going viral in the dog community and on social media.
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <img src={section11} alt="section11" />
        <div className={styles.sectionText11}>
          <div>
            Consumers recreate Doggienut’s brand image on social edia by
            themseleves.
          </div>
          <div>
            As a result of these times, doggienut has become a game and a
            culture.
          </div>
        </div>
      </div>
    </main>
  );
}
