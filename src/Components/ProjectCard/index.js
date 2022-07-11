import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col 
} from 'reactstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';

const ProjectCard = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1224px)'
    });

    return (
        <div>
        {isDesktopOrLaptop && <>
            <Card className="m-4">
                <CardHeader tag="h3" className="p-3">{props.projectName}</CardHeader>
                <Row>
                    <Col>
                        <img width="75%" className="m-5"src={props.exampleGif} alt="Project Pic" />
                    </Col>
                    <Col>
                    <CardBody>
                    <CardText className="mt-3"><b>Summary:</b> {props.summary}</CardText>
                    <br />
                    <CardText><b>Tech Used:</b> {props.techUsed}</CardText>
                    </CardBody>
                    </Col>
                </Row>
                <CardFooter className="d-flex justify-content-end p-2">
                    <Button href={props.githubLink} className="mr-5" target="_blank">Github Link</Button>
                    <Button href={props.deployedLink} className="mr-5" target="_blank">Deployed Link</Button>
                </CardFooter>
            </Card>
        </>}
        {isTabletOrPhone && <>
            <Card className="m-4">
            <CardHeader tag="h3" className="p-3">{props.projectName}</CardHeader>
            <CardBody>
                <Row className="justify-content-center">
                    <img width="75%" height="75%" src={props.exampleGif} alt="Project Pic" />
                </Row>
                <br/>
                <Row>
                    <CardText className="m-3"><b>Summary:</b> {props.summary}</CardText>
                </Row>
                <Row>
                    <CardText className="m-3"><b>Tech Used:</b> {props.techUsed}</CardText>
                </Row>
            </CardBody>
            
            <CardFooter className="d-flex justify-content-around p-1">
                <Button href={props.githubLink} className="m-2" target="_blank">Github Link</Button>
                <Button href={props.deployedLink} className="m-2" target="_blank">Deployed Link</Button>
            </CardFooter>
        </Card>
        </>}
        </div>
    )
}

export default ProjectCard;