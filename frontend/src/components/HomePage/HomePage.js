import React from "react";

import PropTypes from "prop-types";
import { Link, Element } from "react-scroll";
import { Container, Col, Row } from "react-bootstrap";
import { NavBar } from "../NavBar/NavBar";
import BrushOver from "../../assets/brushOver.gif";
import "./HomePage.css";

export const HomePage = ({ setShowCategories }) => {
  return (
    <>
      <Element name="homepage" />
      <NavBar />
      <Container fluid>
        <Row className="home-row">
          <Col>
            <div
              className="homepage"
              id="videoBG"
              style={{
                backgroundImage: "url(" + BrushOver + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Link
                className="h1-link"
                activeClass="active"
                to="art"
                onClick={() => {
                  setShowCategories(true);
                }}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <div className="d-flex justify-content-center link-brush">
                  click to go over the line
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
HomePage.propTypes = {
  setShowCategories: PropTypes.func,
};
