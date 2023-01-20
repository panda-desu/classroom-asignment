import PostList from "../components/Blogs/PostList";
import Heading from "../components/Heading";
import { useState } from "react";
import DynamicModal from "../components/utils/DynamicModal";
import PostCreate from "../components/Blogs/PostCreate";

export default function Articles() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <div className="container-sm body-container">
      <Heading title="Blog posts" handleShow={handleShow} />
      <PostList />
      <DynamicModal
        show={show}
        handleClose={handleClose}
        title="Create post"
        content={<PostCreate />}
      />
    </div>
  );
}
