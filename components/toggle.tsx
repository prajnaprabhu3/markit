interface ToggleProps {
  onClick: () => void;
  color: string;
}

const Toggle: React.FC<ToggleProps> = ({ onClick, color }) => {
  return (
    <div
      className={`h-4 w-4 ${color} rounded-full cursor-pointer`}
      onClick={onClick}
    ></div>
  );
};

export default Toggle;
