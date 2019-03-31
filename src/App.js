import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, Jumbotron, Button, Panel, Carousel, Image, Collapse, Well } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy'

import eevaa from './Images/eevaa.png';
import zambi from './Images/zambi_logo.jpg';
import roisy from './Images/roisy.jpg';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openFirst: false,
      openSecond: false,
    };
  }

  render() {
    return (
      <div id="roisy" className="App" ref={ el => this.container = el}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span> 
              </button>
              <a className="navbar-brand" href="#roisy">
                Roisy
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <Scrollspy className={"nav navbar-nav navbar-right"} items={ ['about', 'products', 'portfolio'] } currentClassName="active">
                <li><a href="#about" >ABOUT</a></li>
                <li><a href="#products" >PRODUCTS</a></li>
                <li><a href="#portfolio" >PORTFOLIO</a></li>
              </Scrollspy>
            </div>
          </div>
        </nav>

        <Jumbotron className="jumbotron text-center">
          <h1><strong>ROISY</strong></h1>
          <p>
            Robotic Intelligent Systems
          </p>
          <hr style={{maxWidth: "50px"}}/>
          <p>Open source intelligent robots made for research and education</p>
          <Button style={{borderRadius: "300px", fontFamily: "Open Sans,Helvetica,Neue,Arial,sans-serif", fontWeight: 700, padding: "1rem 2rem"}} bsStyle="default" bsSize="large" type="button" href="#products">FIND OUT MORE</Button>
        </Jumbotron>

        <div id="about" className="container-fluid text-center">
          <h3>Robotic Intelligent Systems</h3>
          <p><em>Open source robotics for research and education</em></p>
          <p style={{paddingLeft: 10, paddingRight: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus. Euismod elementum nisi quis eleifend. Accumsan tortor posuere ac ut consequat semper. Pulvinar mattis nunc sed blandit libero. Risus sed vulputate odio ut. Diam donec adipiscing tristique risus nec feugiat in fermentum. At quis risus sed vulputate odio. Pharetra convallis posuere morbi leo urna molestie at. Eget magna fermentum iaculis eu. In fermentum posuere urna nec tincidunt praesent semper. Elit eget gravida cum sociis natoque penatibus et. Sed adipiscing diam donec adipiscing tristique risus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Ac turpis egestas integer eget aliquet nibh praesent.</p>
          <br />
          <Grid>
            <Row>
              <Col sm={4}>
                <p><strong>Juan Francisco Cabrera</strong></p><br />
                <Image src="http://placekitten.com/g/255/255" circle alt="Random Name" onClick={() => this.setState({ openFirst: !this.state.openFirst })}/>
                <Collapse in={this.state.openFirst} style={{padding: 20}}>
                  <div>
                    <Well>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Aliquam purus sit amet luctus venenatis lectus. 
                    Euismod elementum nisi quis eleifend. 
                    </Well>
                  </div>
                </Collapse>
              </Col>
              <Col sm={4}>
                <p><strong>Fernando M. Quintana</strong></p><br />
                <Image src="http://placekitten.com/g/255/255" circle alt="Random Name" onClick={() => this.setState({ openFirst: !this.state.openFirst })}/>
                <Collapse in={this.state.openFirst} style={{padding: 20}}>
                  <div>
                    <Well>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Aliquam purus sit amet luctus venenatis lectus. 
                    Euismod elementum nisi quis eleifend. 
                    </Well>
                  </div>
                </Collapse>
              </Col>
              <Col sm={4}>
                <p><strong>Juan A. Herrera</strong></p><br />
                <Image src="http://placekitten.com/g/255/255" circle alt="Random Name" onClick={() => this.setState({ openSecond: !this.state.openSecond })}/>
                <Collapse in={this.state.openSecond} style={{padding: 20}}>
                  <div>
                    <Well>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Aliquam purus sit amet luctus venenatis lectus. 
                    Euismod elementum nisi quis eleifend. 
                    </Well>
                  </div>
                </Collapse>
              </Col>
            </Row>
          </Grid>
        </div>

        <div id="products" className="container-fluid bg-grey">
          <Grid>
            <Row>
              <Col sm={8}>
                <h2>Zambi</h2>
                <h4>Lorem ipsum..</h4> 
                <p>Lorem ipsum..</p>
                <Button data-toggle="collapse" data-target="#zambi_description" bsStyle="default" bsSize="large" >See more</Button>
                <div id="zambi_description" class="collapse">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan eu dolor iaculis ultricies. Aliquam feugiat aliquam fermentum. Etiam nec faucibus leo, sit amet accumsan tortor. In sit amet ex luctus, sodales nisl vel, ullamcorper lorem. Sed venenatis lectus nec tortor tristique sollicitudin eget sit amet tellus. Mauris eget pulvinar turpis, et egestas nisi. Ut volutpat sed metus sed fermentum. Ut ac tortor volutpat dolor tristique interdum in ut magna. Morbi ultricies tortor vitae diam hendrerit, mollis scelerisque odio vulputate. Aliquam et congue velit, sit amet imperdiet orci. Cras vel ultricies nibh. Phasellus turpis est, pretium id massa at, finibus dignissim dui. Ut gravida eleifend augue at aliquet.

Cras molestie gravida est. In laoreet eu magna a placerat. Vestibulum ut lectus odio. Sed elementum neque lacinia, tempus risus ac, posuere leo. Sed tempor rhoncus libero, lacinia rutrum odio tincidunt in. Curabitur vel maximus dui, eget iaculis justo. Sed hendrerit luctus efficitur. Curabitur vitae metus scelerisque tortor pulvinar rutrum nec ac libero. Maecenas in metus tempor, volutpat ipsum non, lobortis sapien. Aenean sapien nibh, accumsan sit amet lorem in, ornare consectetur lorem. Sed non consectetur velit, ut tincidunt arcu.

Vestibulum a nisl in justo posuere maximus vehicula at ante. Aenean convallis ante eu nulla viverra, nec viverra nibh maximus. Sed vulputate ipsum id tincidunt lacinia. Donec a felis iaculis, dignissim mauris vitae, molestie metus. Nullam vitae malesuada risus. Suspendisse potenti. Nullam tincidunt ornare nisi eget elementum. Donec pharetra est magna, ut porttitor eros laoreet ac. Suspendisse consequat ultrices turpis, sed porttitor erat congue pellentesque. Nullam rutrum odio et elit hendrerit, sit amet consectetur est malesuada. Sed in purus bibendum, molestie turpis eget, gravida urna. Curabitur euismod semper ornare. Phasellus et lectus nec risus gravida vestibulum. Fusce sodales maximus nisi vel auctor.

Pellentesque ut blandit tellus, et sodales nulla. Proin eget arcu pellentesque, scelerisque turpis eu, tempor nibh. Etiam eu nisi at sem vulputate lobortis sit amet sed lacus. Praesent elementum mauris dolor, eget mollis nibh vulputate quis. Vivamus efficitur gravida libero, at varius magna aliquam in. Sed vitae neque et felis elementum aliquam. Donec lacinia convallis commodo. Vivamus efficitur libero quis molestie ornare. Nunc luctus, eros id euismod iaculis, est ante interdum nibh, a volutpat velit libero non orci. Vivamus elementum odio sed neque pulvinar sodales.

Vivamus interdum vitae augue ac tincidunt. Quisque vehicula elementum faucibus. Fusce non dolor et ligula convallis varius cursus sit amet mi. Vestibulum sollicitudin justo ac ligula venenatis ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a consectetur risus. Nullam a sapien ac tellus pulvinar ornare. Nunc pellentesque vestibulum justo a condimentum. Vivamus dignissim ultricies tortor non vehicula. Praesent vehicula pulvinar volutpat. Praesent eu felis tristique, auctor nulla ac, lacinia purus. Praesent in dui non dui semper sagittis luctus a odio. Aliquam non ligula eu ipsum auctor mattis non ac justo.
                </div>
              </Col>
              <Col sm={4}>
              <Image src={zambi} width="75%" rounded responsive/>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="container-fluid">
          <Grid>
            <Row>
              <Col sm={4}>
                <Image src={eevaa} width="100%" />
              </Col>
              <Col sm={8}>
                <h2>Eevaa</h2>
                <h4><strong>Lorem ipsum..</strong> Lorem ipsum..</h4> 
                <p><strong>Lorem ipsum..</strong> Lorem ipsum..</p>

                <Button data-toggle="collapse" data-target="#eevaa_description" bsStyle="default" bsSize="large" >See more</Button>
                <div id="eevaa_description" class="collapse">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan eu dolor iaculis ultricies. Aliquam feugiat aliquam fermentum. Etiam nec faucibus leo, sit amet accumsan tortor. In sit amet ex luctus, sodales nisl vel, ullamcorper lorem. Sed venenatis lectus nec tortor tristique sollicitudin eget sit amet tellus. Mauris eget pulvinar turpis, et egestas nisi. Ut volutpat sed metus sed fermentum. Ut ac tortor volutpat dolor tristique interdum in ut magna. Morbi ultricies tortor vitae diam hendrerit, mollis scelerisque odio vulputate. Aliquam et congue velit, sit amet imperdiet orci. Cras vel ultricies nibh. Phasellus turpis est, pretium id massa at, finibus dignissim dui. Ut gravida eleifend augue at aliquet.

Cras molestie gravida est. In laoreet eu magna a placerat. Vestibulum ut lectus odio. Sed elementum neque lacinia, tempus risus ac, posuere leo. Sed tempor rhoncus libero, lacinia rutrum odio tincidunt in. Curabitur vel maximus dui, eget iaculis justo. Sed hendrerit luctus efficitur. Curabitur vitae metus scelerisque tortor pulvinar rutrum nec ac libero. Maecenas in metus tempor, volutpat ipsum non, lobortis sapien. Aenean sapien nibh, accumsan sit amet lorem in, ornare consectetur lorem. Sed non consectetur velit, ut tincidunt arcu.

Vestibulum a nisl in justo posuere maximus vehicula at ante. Aenean convallis ante eu nulla viverra, nec viverra nibh maximus. Sed vulputate ipsum id tincidunt lacinia. Donec a felis iaculis, dignissim mauris vitae, molestie metus. Nullam vitae malesuada risus. Suspendisse potenti. Nullam tincidunt ornare nisi eget elementum. Donec pharetra est magna, ut porttitor eros laoreet ac. Suspendisse consequat ultrices turpis, sed porttitor erat congue pellentesque. Nullam rutrum odio et elit hendrerit, sit amet consectetur est malesuada. Sed in purus bibendum, molestie turpis eget, gravida urna. Curabitur euismod semper ornare. Phasellus et lectus nec risus gravida vestibulum. Fusce sodales maximus nisi vel auctor.

Pellentesque ut blandit tellus, et sodales nulla. Proin eget arcu pellentesque, scelerisque turpis eu, tempor nibh. Etiam eu nisi at sem vulputate lobortis sit amet sed lacus. Praesent elementum mauris dolor, eget mollis nibh vulputate quis. Vivamus efficitur gravida libero, at varius magna aliquam in. Sed vitae neque et felis elementum aliquam. Donec lacinia convallis commodo. Vivamus efficitur libero quis molestie ornare. Nunc luctus, eros id euismod iaculis, est ante interdum nibh, a volutpat velit libero non orci. Vivamus elementum odio sed neque pulvinar sodales.

Vivamus interdum vitae augue ac tincidunt. Quisque vehicula elementum faucibus. Fusce non dolor et ligula convallis varius cursus sit amet mi. Vestibulum sollicitudin justo ac ligula venenatis ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a consectetur risus. Nullam a sapien ac tellus pulvinar ornare. Nunc pellentesque vestibulum justo a condimentum. Vivamus dignissim ultricies tortor non vehicula. Praesent vehicula pulvinar volutpat. Praesent eu felis tristique, auctor nulla ac, lacinia purus. Praesent in dui non dui semper sagittis luctus a odio. Aliquam non ligula eu ipsum auctor mattis non ac justo.
                </div>
              </Col>

            </Row>
          </Grid>
        </div>

        <div id="portfolio" className="container-fluid text-center bg-grey">
          <h2>Portfolio</h2>
          <h4>What we have created</h4>
          
          <Grid>
            <Row className="text-center">
              <Col sm={4}>
                <div className="thumbnail">
                  <img src="http://placekitten.com/400/300" alt="Paris" />
                  <p><strong>Paris</strong></p>
                  <p>Yes, we built Paris</p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="thumbnail">
                  <img src="http://placekitten.com/400/300" alt="Paris" />
                  <p><strong>Paris</strong></p>
                  <p>Yes, we built Paris</p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="thumbnail">
                  <img src="http://placekitten.com/400/300" alt="Paris" />
                  <p><strong>Paris</strong></p>
                  <p>Yes, we built Paris</p>
                </div>
              </Col>
            </Row>
          </Grid>

          <h2>What our customers say</h2>
          <Carousel>
            <Carousel.Item>
             <h4>"This company is the best. I am so happy with the result!"<br/><span>Michael Roe, Vice President, Comment Box</span></h4>
            </Carousel.Item>
            <Carousel.Item>
              <h4>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h4>
            </Carousel.Item>
            <Carousel.Item>
              <h4>"Could I... BE any more happy with this company?"<br/><span>Chandler Bing, Actor, FriendsAlot</span></h4>
            </Carousel.Item>
          </Carousel>
        </div>

        <footer className="container-fluid text-center">
          <span title="To Top" onClick={() => {
            scroll.scrollToTop({duration: 1500,smooth: "easeInOutQuint"});
            }}>
            <span className="glyphicon glyphicon-chevron-up"></span>
          </span>
          <p>© Copyright 2019   |   Roisy. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
