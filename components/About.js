import Link from "next/link";
import Image from "next/image";
import { Card, Button, Modal } from "react-bootstrap";

import { useEffect, useState } from "react";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.br} />
      <div className={styles.about_div} id="about_shipping">
        <h2 className={styles.about_title}>
          <span className={styles.about_title_span}>About Shipping</span>
        </h2>
        <div className={styles.about_p_div}>
          <p className={styles.about_p}>
            Once a purchase is made in the website{" "}
            <strong>Habaneras de Lino</strong>, it takes from 5 days to a week
            for the products to arrive (to the client). Note that most of our
            products are first hand-made in Mexico, and then imported to the USA
            (all decorative shapes embedded in our <strong>guayaberas</strong> and <strong>guayamisas</strong> are
            hand-made, as well as all our <strong>linen</strong> and <strong>cotton</strong> clothes that can be
            found in our website). After arriving to the United States, the products
            are send to the client via UPS or a similar service. This only
            applies to the products that are already in stock, that is, all
            products that can be selected using our website <strong>Habaneras de Lino</strong>.
          </p>

          <p>
            To ask for a product with a different color/size or decorative
            shapes use the following contact info:
          </p>
          <ul>
            <li>
              <p>
                {" "}
                reach to us at any time at{" "}
                <span style={{ color: "#244c77" }}>
                  (habanerasdelino@gmail.com)
                </span>{" "}
                or by{" "}
              </p>
            </li>

            <li>
              <p>
                <span style={{ color: "#244c77" }}>
                  WhatsApp/Phone (+1 941 447 5126)
                </span>
                .
              </p>
            </li>
          </ul>
          <p>
            In this case, it takes from 8 to 15 days for the product to arrive
            to the client.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
