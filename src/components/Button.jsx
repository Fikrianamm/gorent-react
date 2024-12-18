import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const PrimaryButton = styled(Button)`
  background-color: #2d83b2;
  border: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #2a79a3;
  }
`;

const BorderBlueButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #2d83b2;
  transition: all 0.5s ease-in-out;
  color: #2d83b2;

  &:hover {
    color: #2d83b2;
    background-color: #e9f5fc;
  }
`;

const BorderGreyButton = styled(Button)`
  && {
    border: 1px solid #e3e3e7;
    transition: all 0.2s;
    background-color: ${(props) => (props.active ? "#2D83B2" : "transparent")};
    color: ${(props) => (props.active ? "white" : "#666666")};
  }

  &&&:hover {
    background-color: #e9f5fc;
    color: #2d83b2;
  }
`;

const BorderRedButton = styled(Button)`
  && {
    border: 1px solid red;
    transition: all 0.2s;
    background-color: transparent;
    color: red;
  }

  &&&:hover {
    background-color: #fce9e9;
  }
`;

const SecondaryButton = styled(Button)`
  &&& {
    margin: 5px 10px 10px 0;
    background-color: ${(props) => (props.active ? "#2D83B2" : "white")};
    color: ${(props) => (props.active ? "white" : "#949494")};
    border: 1px solid #949494;
  }

  &&&:hover {
    background-color: #2d83b2;
    color: white;
  }
`;

const ButtonBackCircle = styled(Button)`
  &&& {
    background-color: #696969;
    color: white;
    position: absolute;
    top: 20px;
    left: 12px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: all 0.5s ease-in-out;
    font-size: 1.5rem;
    padding: 1.25rem;
    filter: opacity(0.6);
  }

  &&&:hover {
    background-color: #4e4e4e;
    filter: opacity(1);
  }
`;

const PrimaryBackButton = styled(Button)`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.2s;
  cursor: pointer;
  background-color: #2d83b2;
  border: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #1d6891;
    color: white;
  }
`;

export function Back({ variant, className, children, navigateTo }) {
  const navigate = useNavigate();
  function back() {
    if (navigateTo) {
      navigate(navigateTo);
    } else {
      navigate(-1);
    }
  }

  switch (variant) {
    case "text-btn":
      return (
        <Button variant="light" onClick={() => back()} className={className}>
          {children}
        </Button>
      );
    case "primary-btn":
      return (
        <PrimaryBackButton onClick={() => back()} className={className}>
          {children}
        </PrimaryBackButton>
      );
    case "circle-btn":
      return (
        <ButtonBackCircle
          onClick={() => back()}
          className={`rounded-5 z-3 ${className}`}
        >
          <i className="bi bi-arrow-left"></i>
        </ButtonBackCircle>
      );

    default:
      return (
        <button
          onClick={() => back()}
          className={`text-black border-0 bg-transparent p-0 fs-5 ${className}`}
        >
          {children || <i className="bi bi-arrow-left"></i>}
        </button>
      );
  }
}

export function MyButton({
  variant,
  className,
  onClick,
  type,
  children,
  active,
}) {
  switch (variant) {
    case "primary-btn":
      return (
        <PrimaryButton
          type={type}
          onClick={() => onClick()}
          className={className}
        >
          {children}
        </PrimaryButton>
      );
    case "clicked-btn":
      return (
        <SecondaryButton
          active={active}
          type={type}
          onClick={() => onClick()}
          className={className}
        >
          {children}
        </SecondaryButton>
      );
    case "border-blue":
      return (
        <BorderBlueButton
          type={type}
          onClick={() => onClick()}
          className={className}
        >
          {children}
        </BorderBlueButton>
      );
    case "border-grey":
      return (
        <BorderGreyButton
          active={active}
          type={type}
          onClick={() => onClick()}
          className={className}
        >
          {children}
        </BorderGreyButton>
      );
    case "border-red":
      return (
        <BorderRedButton
          active={active}
          type={type}
          onClick={() => onClick()}
          className={className}
        >
          {children}
        </BorderRedButton>
      );

    default:
      return (
        <PrimaryButton
          type={type}
          onClick={() => onClick()}
          className={className}
        >
          {children}
        </PrimaryButton>
      );
  }
}
