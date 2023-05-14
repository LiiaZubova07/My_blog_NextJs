import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

import {
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import ScreenEgg from "../ScreenEgg";

const socialNetworks = [
  { id: 1, href: "https://github.com/LiiaZubova07", icon: AiFillGithub },
  { id: 1, href: "https://github.com/LiiaZubova07", icon: AiFillYoutube },
  { id: 1, href: "https://github.com/LiiaZubova07", icon: AiFillTwitterCircle },
  { id: 1, href: "https://github.com/LiiaZubova07", icon: AiFillLinkedin },
];

const SocialNetworks = ({ className }: any) => {
  return (
    <ScreenEgg>
      <ul className={cl(styles.list, className)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <a
              className={styles.listLink}
              href={socialNetwork.href}
              target="_blank"
              rel="noreferrer"
            >
              {React.createElement(socialNetwork.icon, {
                color: "black",
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
