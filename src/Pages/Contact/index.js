import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Row, Col, NavLink } from 'reactstrap';
import emailIcon from "../../Pics/email-logo.png";
import githubIcon from "../../Pics/github-logo.png";
import linkedinIcon from "../../Pics/linkedin-logo.png";
import headshot from "../../Pics/headshot2.jpg";
import resume from "../../Pics/resume.pdf";
import "./style.css";
import MediaQuery, { useMediaQuery } from 'react-responsive';


const Contact = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

    return (
        <div className="cardBody">    
            {isDesktopOrLaptop && <>
                <h3 className=" m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3">
                        <CardHeader tag="h3" >
                            <Row>
                                <Col className="ml-4">
                                    Dexter Vorbe
                                </Col>
                                <Button color="secondary" className="mr-5" href={resume} target="_blank">Resume</Button>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="5"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Col>
                                <Col className="text-Left m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Software Engineer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:dextervorbe@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : Dexter Vorbe</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/dextervorbe/"><img className="logo" src={linkedinIcon} alt="Logo"/> : Dexter Vorbe</NavLink>
                                    <NavLink href="https://github.com/dextervorbe"><img className="logo" src={githubIcon} alt="Logo"/> : dextervorbe</NavLink>                
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
            {isTabletOrPhone && <>
                <h3 className=" m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">
                                Dexter Vorbe
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Row>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Software Engineer</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                    <Button color="secondary" className="mb-3" href={resume} target="_blank">Resume</Button>
                                    <NavLink href="mailto:dextervorbe@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : Dexter Vorbe</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/dextervorbe/"><img className="logo" src={linkedinIcon} alt="Logo"/> : Dexter Vorbe</NavLink>
                                    <NavLink href="https://github.com/dextervorbe"><img className="logo" src={githubIcon} alt="Logo"/> : dextervorbe</NavLink>
                                </Col>                
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    );
}

export default Contact;