import { useEffect, useState } from "react";

const useManageItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://warehouse-management-server-one.vercel.app/api/v1/inventories"
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return [items, setItems];
};

export default useManageItem;
