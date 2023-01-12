import { NavbarDropdown } from "./Navbar/NavbarDropdown";
import { NavbarMenu } from "./Navbar/NavbarMenu";
import { NavbarWrapper } from "./Navbar/NavbarWrapper";

export const Navbar = () => {
  const MenuItems = [
    { label: "Home", link: "#" },
    { label: "feedback", link: "#" },
    { label: "article", link: "#" },
    { label: "Files", link: "#" },
  ];
  const DropDownsItem = [
    { label: "Profile", link: "#" },
    { label: "inbox", link: "#" },
    { label: "Settings", link: "#" },
    { label: "---", link: "#" },
    { label: "SignOut", link: "#" },
  ];

  return (
    <>
      <NavbarWrapper>
        <NavbarMenu title="Admin" items={MenuItems} />
        <NavbarDropdown
          items={DropDownsItem}
          img="https://avatars.githubusercontent.com/u/81268891?s=200&v=4"
        />
      </NavbarWrapper>
    </>
  );
};
