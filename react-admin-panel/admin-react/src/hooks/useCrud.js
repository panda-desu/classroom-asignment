import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useCrud = (path) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/" + path).then((res) => {
            setItems(res.data);
        });
    }, []);

    useEffect(() => {
        console.log('items', items);
    }, [items]);
    const deleteItem = (id) => {
        axios
            .delete("http://localhost:8000/" + path + "/" + id)
            .then(() => {
                toast.success("Амжилттай устгалаа");
                setItems(items.filter((row) => row.id !== Number(id)))
            })
            .catch((err) => {
                console.log(err);
                toast.error("Алдаа гарлаа");
            });
    };
    return { items, deleteItem };

}