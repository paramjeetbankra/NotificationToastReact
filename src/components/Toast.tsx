import "./Toast.css";

const Toast = ({ list, deleteToast, setPause }) => {
  return (
    <div
      className="container topLeft"
      onMouseOver={() => {
        console.log("heree");
        setPause(true);
      }}
      onMouseLeave={() => {
        console.log("there");
        setPause(false);
      }}
    >
      {list.map((item) => {
        return (
          <div
            style={{ background: item.background }}
            className="notify"
            key={item.id}
          >
            <div className="header">
              <p>{item.title}</p>{" "}
              <span onClick={() => deleteToast(item.id)}>X</span>
            </div>
            <div className="body">
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
