import CategoryList from "../components/Categories/CategoryList";
import Heading from "../components/Heading";
import CategoryCreate from "../components/Categories/CategoryCreate";
import CategoryEdit from "../components/Categories/CategoryEdit";
import { useModal } from "../Context/ModalContext";
import { useCategories } from "../hooks/categories";
import { useCrud } from "../hooks/useCrud";

export default function Categories() {
  const { items } = useCrud("categories");

  const { setModalContent, setModalTitle, setModalShow } = useModal();

  const afterSubmit = (category) => {
    // setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalTitle("Category nemeh");
    setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
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
        <Heading title="Categories" handleShow={showCreateModal} />
        <CategoryList items={items} onEdit={showEditModal} />
      </div>
    </>
  );
}
