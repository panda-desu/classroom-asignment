import { useEffect, useState } from "react";
import CategoryList from "../components/Categories/CategoryList";
import Heading from "../components/Heading";
import { toast } from "react-toastify";
import DynamicModal from "../components/utils/DynamicModal";
import CategoryCreate from "../components/Categories/CategoryCreate";
import CategoryEdit from "../components/Categories/CategoryEdit";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import MenuPositionCreate from "../components/Menu/Positions/PositionCreate";
export default function Menus() {
  const [position, setPosition] = useState(null);
  const [menus, setMenus] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  const { id } = useSearchParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/menu-positions")
      .then((res) => {
        setPosition(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };
  const afterSubmit = (category) => {
    modalClose();
    // setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalContent(<MenuPositionCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    modalClose();
    // let newCategories = categories.map((cat) => {
    //   if (cat.id === category.id) {
    //     return category;
    //   }
    //   return cat;
    // });
    // setCategories(newCategories);
  };

  const showEditModal = (category) => {
    setModalContent(<CategoryEdit category={category} afterEdit={afterEdit} />);
    setModalShow(true);
  };

  return (
    <>
      <div className="container-sm body-container">
        <Heading
          title={`"${position?.name}" - Menus`}
          handleShow={showCreateModal}
        />
        <CategoryList items={menus} onEdit={showEditModal} />
      </div>
      <DynamicModal
        content={modalContent}
        show={modalShow}
        handleClose={modalClose}
        title="Create menus"
      />
    </>
  );
}
