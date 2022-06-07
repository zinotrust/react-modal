import { useState } from "react";
import "./App.scss";
import profilePic from "./assets/profilepic.jpg";
import Modal from "./components/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = (e) => {
    // e.stopPropagation();
    if (e.target.classList.contains("cm")) {
      setShowModal(false);
    }
  };

  return (
    <>
      <section className="intro-section --100vh --flex-center">
        <div className="intro --center-all">
          <img src={profilePic} alt="profile" />
          <h1 className="--text-light --text-md">
            Lets <span className="--fw-thin">Create a Modal!!!</span>
          </h1>
          <p className="--text-light --mb2">Click the Button Below</p>
          <button className="--btn --btn-secondary" onClick={handleShowModal}>
            OPEN MODAL
          </button>
        </div>
      </section>
      {showModal && <Modal onCloseModal={handleCloseModal} />}
    </>
  );
}

export default App;
