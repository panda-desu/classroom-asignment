import Modal from "react-bootstrap/Modal";
export const DynamicModal = ({
  show,
  handleClose,
  title,
  content,
  handleSave,
}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
    </Modal>
  );
};
