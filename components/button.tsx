interface ButtonProps {
  title: string;
  Icon: React.ElementType;
  action?: () => void | undefined;
}

const Button: React.FC<ButtonProps> = ({ title, Icon, action }) => {
  return (
    <div
      className="flex justify-center items-center gap-x-1 bg-white border border-gray-300 px-3 py-1 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 delay-100"
      onClick={action}
    >
      <p className="text-sm font-normal mr-1">{title}</p>
      <Icon className="text-md" />
    </div>
  );
};

export default Button;
