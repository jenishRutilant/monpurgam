import Carousel from 'react-bootstrap/Carousel';
import "../Styles/Slider.css"

function Slider() {
    return (
        <div className="bg-color">
            <div className="container-fluid">
                <Carousel>
                    <Carousel.Item>
                        <div className="display-flex-slider">
                            <div>
                                <h3 className='monpur'>મોણપુરગામ પ્રગતિ મંડળ ના
                                    દરેક સભ્ય નું ભાવભર્યું સ્વાગત છે.</h3><br />
                                <p className='monpur-dis'>સ્નેહમિલન કાર્યક્રમ એટલે જાહેર જીવનમાં જીવંત લોકસંપર્કનું એક ઉમદું માધ્યમ.પરિવારના દરેક સભ્ય સુધી પહોંચવાનો એક નમ્ર પ્રયત્ન છે. પરસ્પર સ્નેહની આપ-લેનેજીવંત રાખીને સંબંધોની આત્મીયતાને એક નવું જ જોમ પૂરું પાડવાનો અવસર છે.વવિવાહ ફાર્મ, ભડિયાદરા ફાર્મ ની બાજુ માં દુખીયા દરબાર રોડ, મોટા વરાછા, સુરત.
                                    સ્નેહમિલન સમારોહ : વિચારગોષ્ઠી, દાતા-વિદ્યાર્થીતથા ટ્રસ્ટીનું સન્માન, બિઝનેસ પ્રેઝેન્ટશન, સ્નેહ ભોજન,પારિવારિક લોક ડાયરો</p>
                            </div>
                            <img
                                className="d-block w-100"
                                src={require("../Images/book.png")}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <div className="display-flex-slider">
                            <div>
                                <h3>મોણપુરગામ પ્રગતિ મંડળ ના
                                    દરેક સભ્ય નું ભાવભર્યું સ્વાગત છે.</h3>
                            </div>
                            <img
                                className="d-block w-100"
                                src={require("../Images/book.png")}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="display-flex-slider">
                            <div>
                                <p>સ્નેહમિલન કાર્યક્રમ એટલે જાહેર જીવનમાં જીવંત લોકસંપર્કનું એક ઉમદું માધ્યમ.પરિવારના દરેક સભ્ય સુધી પહોંચવાનો એક નમ્ર પ્રયત્ન છે. પરસ્પર સ્નેહની આપ-લેનેજીવંત રાખીને સંબંધોની આત્મીયતાને એક નવું જ જોમ પૂરું પાડવાનો અવસર છે.વવિવાહ ફાર્મ, ભડિયાદરા ફાર્મ ની બાજુ માં દુખીયા દરબાર રોડ, મોટા વરાછા, સુરત.
                                    સ્નેહમિલન સમારોહ : વિચારગોષ્ઠી, દાતા-વિદ્યાર્થીતથા ટ્રસ્ટીનું સન્માન, બિઝનેસ પ્રેઝેન્ટશન, સ્નેહ ભોજન,પારિવારિક લોક ડાયરો</p>
                            </div>
                            <img
                                className="d-block w-100"
                                src={require("../Images/book.png")}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        </div>
    );
}

export default Slider;