import { useEffect, useState } from "react";

const useManageItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return [items, setItems];
};

export default useManageItem;