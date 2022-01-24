import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid yellow;
`;

export default function LibraryYoutubePage() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=5qap5aO4i9A"
      width={500}
      height={500}
    />
  );
}
