interface PrimaryButtonProps {
  onClick?: () => void;
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-button-primary-default rounded-lg text-base font-medium text-text-primary-inverted leading-5 hover:bg-button-primary-hover active:bg-button-primary-active focus-visible:bg-button-primary-focus focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-border-primary-hover outline-none cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
