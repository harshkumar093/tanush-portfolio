import "./Header.css";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div id="app-name">
        <a href="/">Portfolio</a>
      </div>
      <div>
        <a href="/contact" style={styles.anchors}>
          Contact
        </a>
        <a style={styles.anchors}>Project</a>
        <a style={styles.anchors}>Personal</a>
      </div>
      <div style={{ padding: "0px 10px" }}>
        <button style={styles.buttons}>Login</button>
        <button style={styles.buttons}>Signup</button>
      </div>
    </div>
  );
}

const styles = {
  buttons: {
    padding: 10,
    margin: "0px 10px",
    backgroundColor: "#2926ff",
    color: "white",
    borderRadius: 5,
    borderColor: "#2926ff",
  },
  anchors: {
    padding: 10,
    margin: "0px 10px",
  },
};
