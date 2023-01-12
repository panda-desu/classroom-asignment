export const MainButton = ({ href, children, variant = "defualt" }) => {
  if (variant === "reverted")
    return (
      <a href={href} className="btn dropdown-btn  main-btn main-btn-reverted">
        {children}
      </a>
    );
  return (
    <a href={href} className="btn dropdown-btn  main-btn">
      {children}
    </a>
  );
};
