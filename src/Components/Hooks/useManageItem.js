import { useEffect, useState } from "react";

const useManageItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://hasan-rifat-assignment-11.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return [items, setItems];
};

export default useManageItem;
