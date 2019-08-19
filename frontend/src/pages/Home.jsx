import React from "react";
import css from "styled-components";
const H1 = css.h1``;
const P = css.p`
padding: 0;
padding-left: 200px;
padding-right: 200px;
text-indent: 100px;
text-align: justify;
`;

export const Home = () => (
  <React.Fragment>
    <H1>Home</H1>
    <P>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error atque
      dolor dicta iste ipsam rerum eligendi magnam delectus quo vel vero quasi
      libero explicabo, qui obcaecati, suscipit nemo nesciunt impedit. Illum
      unde mollitia magni deserunt fugiat obcaecati, consequuntur doloribus est
      consequatur voluptatum. Sapiente ab tempora praesentium error nesciunt
      iure laboriosam quis obcaecati ea, soluta tempore provident alias autem
      eum. Esse? Enim fugit quis, fuga accusantium unde repellat architecto
      officiis. Excepturi laudantium deleniti qui animi ut sed itaque iusto nam,
      voluptatum blanditiis! Consequuntur ea illum ullam voluptas. Deserunt
      dolorem quae fuga.
    </P>
  </React.Fragment>
);
