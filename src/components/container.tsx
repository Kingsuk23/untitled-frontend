interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative mx-auto flex flex-col justify-between px-2 md:max-w-7xl md:px-4">
      {children}
    </div>
  );
};

export default Container;
