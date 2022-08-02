import React from "react";
import logo from "./css/logo3.png";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import { Search, ExpandMore } from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import "./css/QueriousHeader.css";
import Modal from "react-responsive-modal";
import CloseIcon from "@material-ui/icons/Close";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../feature/userSlice";

function QueriousHeader() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [inputUrl, setInputUrl] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          {/* <div className="qHeader__icon">
            <FeaturedPlayListIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInIcon />
          </div>
          <div className="qHeader__icon">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlinedIcon />
          </div> */}

          <div className="qHeader__input">
            <Search />
            <input type="text" placeholder="Search questions" />
          </div>
          <div className="qHeader__Rem">
            <span onClick={handleLogout}>
              <Avatar src={user?.photo} />
            </span>

            <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
            <Modal
              open={isModalOpen}
              closeIcon={Close}
              onClose={() => setIsModalOpen(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                },
              }}
            >
              <div className="modal__title">
                <h5>Add Question</h5>
                <h5>Share Link</h5>
              </div>
              <div className="modal__info">
                <Avatar src={user?.photo} className="avatar" />
                <div className="modal__scope">
                  <PeopleAltOutlinedIcon />
                  <p>Public</p>
                  <ExpandMore />
                </div>
              </div>
              <div className="modal__Field">
                <Input
                  type=" text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Start your question with 'What', 'How', 'Why', etc. "
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    style={{
                      margin: "5px 0",
                      border: "1px solid lightgray",
                      padding: "10px",
                      outline: "2px solid #000",
                    }}
                    placeholder="Optional: inclue a link that gives context"
                  />
                  {inputUrl !== "" && (
                    <img
                      style={{
                        height: "40vh",
                        objectFit: "contain",
                      }}
                      src={inputUrl}
                      alt="displayimage"
                    />
                  )}
                </div>
              </div>
              <div className="modal__buttons">
                <button
                  className="cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button onClick={handleSubmit} type="submit" className="add">
                  Add Question
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueriousHeader;
