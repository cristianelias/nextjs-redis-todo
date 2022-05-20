// Dependencies
import Image from "next/image";

// Assets
import logo from "../../public/walking.gif";

const Loading = () => {
  return (
    <Image
      src={logo}
      layout="intrinsic"
      objectFit="cover"
      alt="True North logo"
    />
  );
};

export default Loading;
