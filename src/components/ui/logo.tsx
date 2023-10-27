import { AiOutlineStock } from "react-icons/ai";

function Logo() {
  return (
    <div className="flex items-center gap-x-3">
      <AiOutlineStock className="text-2xl text-gGreen" />
      <h2 className="font-semibold text-xl">
        GrowIt <span className="text-gGreen">.</span>
      </h2>
    </div>
  );
}

export default Logo;
