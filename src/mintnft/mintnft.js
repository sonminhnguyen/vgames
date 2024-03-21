import React from "react";
import { Modal, Button, ButtonToolbar, Placeholder, Form } from "rsuite";

import "./styles.css";

const MintNFT = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mint-container">
      <div className="mintnft">
        <div className="mintnft-background"></div>
        <Button
          className="mintnft-button"
          color="green"
          appearance="primary"
          onClick={handleOpen}
        >
          Mint
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <Form layout="horizontal">
              <Form.Group controlId="numberMint-8">
                <Form.ControlLabel>Number of Mint</Form.ControlLabel>
                <Form.Control placeholder="Enter number Mint" name="numberMint" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MintNFT;
