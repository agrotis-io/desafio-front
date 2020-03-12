/** Components */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Alert } from 'reactstrap';

/** Redux */
import { connect } from 'react-redux'

/** icons */
import find from '../../assets/images/find.svg'

/** Styles */
import './styles.css'
import { Header, Container, Button, Footer, Card } from './styles';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      docs: [],
      alert_visibility: false
    }
    this.styles = {
      inputGroup: {
        width: '25vw',
        marginTop: '1rem'
      },
      addon: {
        borderRadius: '0px',
        backgroundColor: 'white',
        border: 'none',
      }
    }

  }

  onDismiss = () => {
    this.props.dispatch({ type: 'HIDDE_ALERT' })
  };

  remove = () => {
    this.props.dispatch({ type: 'REMOVE' })
  }

  componentDidMount() {
    if (this.props.alert_visibility) {
      let self = this
      setTimeout(
        () => {
          self.props.dispatch({ type: 'HIDDE_ALERT' })
        },
        5000
      )
    }
  }

  render() {
    let { docs, alert_visibility } = this.props
    
    return (
      <section>
        <Header>
          <h3>Situações do documento</h3>
          <div style={ this.styles.inputGroup } className="input-group mb-3">
            <div className="input-group-prepend">
              <span style={ this.styles.addon } className="input-group-text" id="basic-addon1">
              <img src={find} alt="" style={{width: '1rem'}} />
              </span>
            </div>
            <input style={ this.styles.addon } type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </Header>
        <Container>
          <div>
            {
              docs.map(
                (el, index) => (
                  <Card key={index} >
                    <div style={{ width: '25vw', height: '1rem' }} >
                      <label style={{ marginRight: '1rem' }} >Nome:</label>
                      <strong>{el.name}</strong>
                    </div>
                    <div>
                      <label style={{ marginRight: '1rem' }} >Descrição:</label>
                      <strong>{el.description}</strong>
                    </div>
                  </Card>
                )
              )
            }
          </div>
          <Footer>
            <Link to={`form`}>
              <Button className="rounded-circle">+</Button>
            </Link>
          </Footer>
        </Container>

        <Alert color="success" isOpen={alert_visibility} toggle={this.onDismiss} >
          <span>Situação salva com sucesso</span>
        </Alert>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  docs: state.docs,
  alert_visibility: state.alert_visibility
})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);
