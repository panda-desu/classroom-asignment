import { TbPencil, TbTrash } from "react-icons/tb";
const Thead = () => {
  return (
    <>
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
    </>
  );
};
const Tbutton = () => {
  return (
    <>
      <button className="btn btn-sm btn-outline-primary me-3 bg-white">
        Edit <TbPencil />
      </button>
      <button className="btn btn-sm btn-outline-danger bg-white">
        Delete <TbTrash />
      </button>
    </>
  );
};
const Trow = ({ item, id }) => {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td style={{ whiteSpace: `nowrap` }}>
          <Tbutton />
        </td>
      </tr>
    </>
  );
};
export const ContentTable = () => {
  const items = [
    { name: `asfjklhaskopf`, description: `adjshkfjio` },
    { name: `asfjklhaskopf`, description: `adjshkfjio` },
  ];

  return (
    <>
      <div>
        <table className="table table-bordered table-hover">
          <Thead />
          <tbody>
            {items.map((item, index) => {
              return <Trow item={item} id={index + 1} key={`row-${index}`} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
