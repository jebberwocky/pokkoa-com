import {Col, Container, Row, Image, Nav} from "react-bootstrap";
import {FaLinkedinIn, FaFacebookF, FaTelegramPlane} from "react-icons/fa";

const ResponsiveCenteredImageDescription = () => {
    return (
        <Container fluid className="d-flex flex-column min-vh-100 ">
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
                        Building Pokkoa: Pioneering the Future of AI-Driven Self-Reflection
                        Pokkoa bridges the gap between historical symbolic wisdom and modern cognitive technology to help individuals navigate their emotional landscapes with greater clarity. Our mission is to provide a universal, culturally inclusive framework for meaning-making—empowering users to find personal direction through sophisticated, AI-driven insights.

                        Beyond a digital tool, Pokkoa is evolving into a multidisciplinary creative ecosystem. By integrating original art, narrative storytelling, and digital collectibles, we are building a "creative universe" for the emotionally curious. We believe that by merging mental wellness with contemporary culture, we can make the journey of self-discovery both deeply insightful and visually engaging.
                    </p>
                </Col>
            </Row>
            <Row className="mt-auto">
                <Col className="text-center py-3">
                    <div className="footer-links d-flex justify-content-center flex-wrap">
                    <a href="https://www.linkedin.com/company/102738501/" className="text-dark mx-2 mb-2 d-flex align-items-center">
                        <span className="me-1">LinkedIn</span> <FaLinkedinIn size={14} />
                    </a>
                    <a href="https://huggingface.co/pokkoa" className="text-dark mx-2 mb-2 d-flex align-items-center">
                        <span className="me-1">🤗 Hugging Face</span>
                    </a>
                    <a href="https://www.facebook.com/ai.pokkoa" className="text-dark mx-2 mb-2 d-flex align-items-center">
                        <span className="me-1">Facebook</span> <FaFacebookF size={14} />
                    </a>
                    <a href="https://t.me/pokkoa_bot" className="text-dark mx-2 mb-2 d-flex align-items-center">
                        <span className="me-1">Telegram</span> <FaTelegramPlane size={14} />
                    </a>
                    <a href="https://solscan.io/token/8uM6vA6ajxxgdqUYNM5xYJtfbL1XmDgU5YDvxZg5LL36" className="text-dark mx-2 mb-2">
                        Pokkoa Coin
                    </a>
                    <a href="https://opensea.io/assets/matic/0xca8a287748c3af7a23459ac16468ae93dc251ebb/1" className="text-dark mx-2 mb-2">
                        NFTs
                    </a>
                    <a href="https://character.ai/character/QpMOQWQi" className="text-dark mx-2 mb-2">
                        Character.ai
                    </a>
                    <a href="https://pokkoa.gumroad.com" className="text-dark mx-2 mb-2">
                        Gumroad
                    </a>
                    <a href="mailto:contact@pokkoa.cc" className="text-dark mx-2 mb-2">
                        Contact Us
                    </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ResponsiveCenteredImageDescription