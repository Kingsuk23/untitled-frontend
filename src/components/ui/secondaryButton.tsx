interface SecondaryButtonProps {
  onClick?: () => void;
  text: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="hover:before:bg-button-primary-hover border-border-primary-hover relative px-4 py-2 overflow-hidden border bg-white text-text-primary-default shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-button-primary-hover before:transition-all before:duration-500 hover:text-white hover:shadow-button-primary-hover hover:before:left-0 hover:before:w-full rounded-lg leading-5 font-medium cursor-pointer outline-none focus-visible:ring focus-visible:ring-border-primary-hover focus-visible:ring-offset-2 focus-visible:before:bg-button-primary-focus focus-visible:text-white focus-visible:shadow-button-primary-focus focus-visible:before:left-0 focus-visible:before:w-full"
      onClick={onClick}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default SecondaryButton;
