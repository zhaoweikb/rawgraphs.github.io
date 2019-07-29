import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import styles from "./modalCampain.module.scss"

class ModalCampain extends React.Component {
  state = {
    modal: true,
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={styles.modal}
        cssModule={{
          "modal-content": styles.modalContent,
        }}
        size="lg"
      >
        <ModalHeader
          toggle={this.toggle}
          className="border-0 mb-auto mb-md-0"
        ></ModalHeader>
        <ModalBody
          cssModule={{
            "modal-body": styles.modalBody,
          }}
        >
          <h1 className="modal-title mb-3">
            Hello!{" "}
            <span role="img" aria-label="hello">
              👋 👋 👋
            </span>
            <br />
            Do you like RAWGraphs?
          </h1>
          <p className="pb-2">
            Soon we will be launching a{" "}
            <span className="font-weight-bold">crowdfunding campaign</span> on
            Indiegogo to continue to improve RawGraphs and to keep it open and
            free to everyone.
          </p>
          <p>
            <span className="mr-2" role="img" aria-label="go">
              👉
            </span>
            <a
              href="https://www.indiegogo.com/projects/rawgraphs-2-0/coming_soon/x/20662697"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the pre-launch page on Indiegogo!
            </a>
          </p>
        </ModalBody>
      </Modal>
    )
  }
}

export default ModalCampain
