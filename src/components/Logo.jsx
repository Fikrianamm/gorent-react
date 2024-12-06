import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const LogoImg = styled.img`
  width: ${(props) => (props.size ? `${props.size}px` : "100px")};
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.size768 ? `${props.size768}px` : "120px")};
  }
  @media screen and (min-width: 1280px) {
    width: ${(props) => (props.size1280 ? `${props.size1280}px` : "200px")};
  }
`;

export default function Logo({
  size,
  size768,
  size1280,
  src = "/assets/images/GoRent.png",
  alt = "logo GoRent",
  to = "/",
  className = "",
  ariaLabel = "Go to homepage",
}) {
  return (
    <Link to={to} aria-label={ariaLabel} className={className}>
      <LogoImg
        src={src}
        alt={alt}
        size={size}
        size768={size768}
        size1280={size1280}
      />
    </Link>
  );
}
