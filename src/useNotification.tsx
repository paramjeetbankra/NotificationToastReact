import { useEffect, useState } from "react";
const color = {
  success: "lightgreen",
  danger: "red",
  info: "lightblue",
  warning: "orange"
};

export default function useNotification() {
  const [list, setList] = useState([]);
  const [pause, setPause] = useState(false);

  let deleteToast = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    let id = setInterval(() => {
      if (!pause) {
        deleteToast(list[0]?.id);
      }
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [pause, list]);

  let showNotification = (type, msg = "default") => {
    let newList = [
      ...list,
      {
        id: new Date().getTime(),
        title: type,
        body: msg,
        background: color[type]
      }
    ];
    setList(newList);
  };
  return {
    showNotification,
    deleteToast,
    list,
    setPause
  };
}
