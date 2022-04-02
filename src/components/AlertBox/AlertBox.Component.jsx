import "./AlertBox.Style.scss";
const AlertBox = ({ MESSAGE, NO, YES }) => {
  return (
    <div>
      <div className="alertBox-container">
        <div className="alertBox-popup">
          <div className="alertBox-message">
            <span>{MESSAGE || "Default message."}</span>
          </div>
          <div className="alertBox-actions">
            <button onClick={YES}>Yes</button>
            <button onClick={NO}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlertBox;
