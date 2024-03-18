import React from "react";
import { Dashboard, Match, Message, Profile } from "./svg";
import { useReactPath } from "./path.hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

type NavItem = {
  path: string;
  Icon: React.ElementType; // Using React.ElementType for icon components
};

type Props = {};

export const Navbar = (_props: Props) => {
  const navigate = useNavigate();

  const handleNavigation = (value: string) => {
    navigate(value);
  };
  const path = useReactPath();

  const navItems: NavItem[] = [
    { path: "/dashboard", Icon: Dashboard },
    { path: "/match", Icon: Match },
    { path: "/message", Icon: Message },
    { path: "/profile", Icon: Profile },
  ];

  useEffect(() => {}, [path]);

  const renderNavButton = ({ path, Icon }: NavItem) => (
    <button onClick={() => handleNavigation(path)}>
      <Icon color={window.location.href.includes(path) ? "red" : "#696969"} />
    </button>
  );

  return (
    <div className={styles.Wrapper}>
      {navItems.map((item) => renderNavButton(item))}
    </div>
  );
};
