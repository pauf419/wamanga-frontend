"use client";

import type { ReactNode } from "react";
import React, { useRef, useState, useEffect } from "react";
import { Arrow, Body, Content, Header, Title, Wrapper } from "./styled";
import ArrowIcon from "@icons/svg/counter-arrow-bottom.svg";

interface Props {
  first?: boolean;
  last?: boolean;
  children: ReactNode;
  placeholder: string;
}

const CatalogDropdown = ({
  first = false,
  last = false,
  children,
  placeholder,
}: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bodyElement = bodyRef.current;
    const contentElement = contentRef.current;

    if (!bodyElement || !contentElement) return;

    const observer = new ResizeObserver(() => {
      if (active) {
        bodyElement.style.maxHeight = `${contentElement.scrollHeight}px`;
      }
    });

    observer.observe(contentElement);

    return () => observer.disconnect();
  }, [active]);

  const handleToggle = () => {
    setActive((prev) => !prev);

    if (bodyRef.current && contentRef.current) {
      const bodyElement = bodyRef.current;
      const contentElement = contentRef.current;

      if (!active) {
        bodyElement.style.maxHeight = `${contentElement.scrollHeight}px`;
      } else {
        bodyElement.style.maxHeight = "0";
        bodyElement.style.overflow = "hidden";
      }
    }
  };

  return (
    <Wrapper $active={active} $first={first} $last={last}>
      <Header onClick={handleToggle}>
        <Title>{placeholder}</Title>
        <Arrow as={ArrowIcon} />
      </Header>
      <Body ref={bodyRef}>
        <Content ref={contentRef}>{children}</Content>
      </Body>
    </Wrapper>
  );
};

export default CatalogDropdown;
