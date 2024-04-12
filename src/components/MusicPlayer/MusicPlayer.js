import React from "react";
import { Dropdown } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";
import tracks from "./Track";

const MusicPlayer = (props) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const { title, audioSrc } = tracks[trackIndex];

  function changeSound(e) {
    setTrackIndex(e);
  }

  return (
    <div>
      <ReactAudioPlayer src={audioSrc} controls />
      <Dropdown className="mt-0" onSelect={setTrackIndex}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="0" onClick={changeSound}>
            Tiếng vỗ tay
          </Dropdown.Item>
          <Dropdown.Item eventKey="1" onClick={changeSound}>
            Kiếp Đỏ Đen
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MusicPlayer;
