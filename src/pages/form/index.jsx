import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import './style.css'

import { Header, backButton, title } from "./style"

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: {
        value: '',
        status: 'is-wating',
        counter: 0
      },
      description: {
        value: '',
        status: 'is-wating',
        counter: 0
      },
    }
  }

  backToHome = () => {
    this.props.history.replace('/')
  }

  handleName = (event) => {
    let value = event.target.value
    let counter = this.state.name.counter + 1
    let status = !value ? 'is-error' : 'is-ok'
    this.setState({ name: { value, counter, status } })
  }

  handleDescription = (event) => {
    let value = event.target.value
    let counter = this.state.description.counter + 1
    let status = !value ? 'is-error' : 'is-ok'
    this.setState({ description: { value, counter, status } })
  }

  insert = () => {

    const { name, description } = this.state

    if( !!name.value && !!description.value ) {

      const item = {
        name: name.value,
        description: description.value
      }

      this.props.dispatch({ type: 'INSERT', item })
      this.props.dispatch({ type: 'SHOW_ALERT' })
      this.props.history.replace('/')

    } else {

      const status = 'is-error'

      this.setState({
        name: Object.assign(name, { status }),
        description: Object.assign(description, { status })
      })
    }
  }

  render() {
    return (
      <>
        <Header>
          <h3>
            <Link to={`/`}>
              <span style={backButton} >{ '<' }</span>
            </Link>
            <label style={title} >Situação</label>
          </h3>

          <div>
            <button className="btn-custom" onClick={this.backToHome} >voltar</button>
            <button className="btn-custom btn-save" onClick={this.insert}  >salvar</button>
          </div>
        </Header>

        <div className="container-fluid">
          <div className="row" >
            <div className="col-md-4" >
              <label
                htmlFor="inputName"
                className={`custom-label ${this.state.name.status}`}
              >
                Nome: *
              </label>
              <input
                id="inputName"
                className={`form-control custom-input ${this.state.name.status} `}
                type="text"
                onChange={this.handleName}
              />
            </div>
            <div className="col-md-8" >
              <label
                htmlFor="inputDescricao"
                className={`custom-label ${this.state.description.status} `}
              >
                Descrição: *
              </label>
              <input
                id="inputDescricao"
                className={`form-control custom-input ${this.state.description.status}`}
                onChange={this.handleDescription}
                type="text"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  docs: state.docs
})

export default connect(
  mapStateToProps,
)(Form)
