export const ContentWrapperFlex = ({ children }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        {children}
      </div>
    </>
  );
};
