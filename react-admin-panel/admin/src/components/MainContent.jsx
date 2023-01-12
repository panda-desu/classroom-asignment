import { ContentWrapper } from "./Content/ContentWrapper";
import { ContentWrapperFlex } from "./Content/ContentWrapperFlex";
import { ContentHeader } from "./Content/ContentHeader";
import { ContentTable } from "./Content/ContentTable";
import { DynamicModal } from "./Content/utils/DynanicModal";
import { useState } from "react";
import { PostCreate } from "./Blogs/PostCreate";

const ContentTitle = [{ label: "Hello" }];
export const Content = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ContentWrapper>
        <ContentWrapperFlex>
          <DynamicModal
            show={show}
            handleClose={handleClose}
            title="Create post"
            content={<PostCreate />}
          />
          <ContentHeader title={ContentTitle} handleShow={handleShow} />
        </ContentWrapperFlex>
        <ContentTable />
      </ContentWrapper>
      ;
    </>
  );
};
