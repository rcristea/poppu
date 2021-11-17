import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'

class TrailerModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      trailerLink: this.props.trailerLink,
      trailerPhoto: this.props.trailerPhoto,
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <>
        <img
          src={`${process.env.PUBLIC_URL}/${this.state.trailerPhoto}`} alt={this.state.trailerLink} width={'350px'}
          height={'518px'}
          onClick={this.handleShow}/>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <iframe width='853' height='427' src={`https://www.youtube.com/embed/${this.state.trailerLink}`} title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen/>
        </Modal>
      </>
    )
  }
}

export default TrailerModal