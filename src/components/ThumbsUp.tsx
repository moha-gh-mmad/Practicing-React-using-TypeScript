import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

interface Props {
  onClickF: () => void;
}

const ThumbsUp = ({ onClickF }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    onClickF();
    setStatus(!status);
  };
  if (status)
    return <AiFillLike color="darkviolet" size={50} onClick={toggle} />;
  return <AiOutlineLike color="darkviolet" size={50} onClick={toggle} />;
};

export default ThumbsUp;
