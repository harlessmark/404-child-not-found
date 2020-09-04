import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid salmon;
`;

const H1 = styled.h1``;
const H2 = styled.h2``;
const P = styled.p``;

const MissingChildCard = () => {
  useEffect(() => {
    // makes fetch request to missingchild.org API
    // convert from RSS to JSON
    // should save the entire array or most recent child?
    // must check if child has photo, if not pick next child
  }, []);

  const [missingChildren, setMissingChildren] = useState(null);

  return (
    <Card>
      <H1>HAVE YOU SEEN ME?</H1>
      <H2>John Doe</H2>
      <img src='https://via.placeholder.com/150' />
      <div>
        <P>Missing Since: Aug 27, 2020</P>
        <P>Missing From: Ellenwood, GA</P>
        <P>Age: 17</P>
        <P>Sex: Female</P>
        <P>Race: Black</P>
        <P>Hair Color: Brown</P>
        <P>Eye Color: Brown</P>
        <P>Height: 5'7"</P>
        <P>Weight: 130 lbs</P>
      </div>
      <P>Zermire was last seen on August 27, 2020.</P>
    </Card>
  );
};

export default MissingChildCard;
