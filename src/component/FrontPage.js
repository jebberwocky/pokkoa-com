import {Col, Container, Row, Image, Nav} from "react-bootstrap";
import {FaLinkedinIn} from "react-icons/fa";

const ResponsiveCenteredImageDescription = () => {
    return (
        <Container fluid className="d-flex flex-column min-vh-100">
            <Row className="mb-3">
                <Col>
                    <Nav className="justify-content-center mt-3">
                        <Nav.Item>
                            <Nav.Link href="https://en.pokkoa.cc">English</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://pokkoa.cc">中文</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://jp.pokkoa.cc">日本語</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            <Row className="flex-grow-1 align-items-center justify-content-center">
                <Col xs={12} md={8} lg={6} className="text-center">
                    <Image
                        src="/logo.jpg"
                        alt="Pokkoa Logo"
                        fluid
                        rounded
                        className="mb-3"
                    />
                    <p className="lead px-3">
                        Life is tiring, but the future "will be better".
                    </p>
                    <p className="lead px-3">
                        Life is tiring, but the future "will be better".
                        Pokkoa Project: Exploring AI's Potential as a Divinatory Tool for Enhancing Mental Well-being. Curious about the potential sparks that could emerge from the collision of AI and I Ching, and their feasibility in psychological consulting. How can we leverage the combination of AI and I Ching to provide more effective solutions for psychological consulting?
                    </p>
                </Col>
            </Row>
            <Row className="mt-auto">
                <Col className="text-center py-3">
                    <a href="https://www.linkedin.com/company/102738501/" className="text-dark mx-2">
                       Linkedin <FaLinkedinIn size={14} />
                    </a>
                    <a href="https://huggingface.co/pokkoa" className="text-dark mx-2">
                        🤗 Hugging Face
                    </a>
                    <a href="https://solscan.io/token/8uM6vA6ajxxgdqUYNM5xYJtfbL1XmDgU5YDvxZg5LL36" className="text-dark mx-2">
                        Pokkoa Coin
                    </a>
                    <a href="https://opensea.io/assets/matic/0xca8a287748c3af7a23459ac16468ae93dc251ebb/1" className="text-dark mx-2">
                        NFTs
                    </a>
                    <a href="https://character.ai/character/QpMOQWQi" className="text-dark mx-2">
                        Character.ai
                    </a>
                    <a href="https://pokkoa.gumroad.com" className="text-dark mx-2">
                        Gumroad
                    </a>
                    <a href="mailto:contact@pokkoa.cc" className="text-dark mx-2">
                        Contact Us
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default ResponsiveCenteredImageDescription