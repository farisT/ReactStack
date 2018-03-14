import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../components/Header/Header';

class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
    <div className="App">
        <Container>
          <NavBar/>
          <Row>
          <Col className="title" xs="12" sm="12" md={{ size: 12, offset: 0 }} lg={{ size: 12, offset: 0 }} xl={{ size: 12, offset: 0 }}>
                <h3>Welcome to ReactStack</h3>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md={{ size: 12, offset: 0 }} lg={{ size: 12, offset: 0 }} xl={{ size: 12, offset: 0 }}>
                <p>This is a working react app with Express, MongoDB and Bootstrap capabilities.</p>
                <p>Have a look at the readme for the indepth guide to working with ReactStack.</p>
                <p>This is a message from the API = {this.state.response}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;