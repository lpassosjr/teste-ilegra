import React from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

import Details_request from './details-request'

export default class Details_modal extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false,
          cardEpisode: ''
        };
      }
    
      handleHide() {
        this.setState({ show: false });
      }
      render() {
        return (
          <div className="modal-container">
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={() => this.setState({ show: true })}
            >
              Show
            </Button>
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  Header Modal
                </Modal.Title>
              </Modal.Header> */}
              <Modal.Body>
                <Details_request episode={this.props.episode}/>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    }
