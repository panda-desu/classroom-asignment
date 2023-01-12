import Button from "react-bootstrap/esm/Button";
import { TbCirclePlus } from "react-icons/tb";
export const ContentHeader = ({ title, handleShow }) => {
  console.log(title);
  return (
    <>
      <div>
        <h1>{title[0].label}</h1>
      </div>
      <Button className="btn btn-sm btn-primary" onClick={handleShow}>
        Create <TbCirclePlus />
      </Button>
    </>
  );
};
