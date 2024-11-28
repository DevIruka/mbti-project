const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center shadow-lg p-4 bg-white rounded ml=[400px] min-h-[300px]">
      {children}
    </div>
  );
};
export default Container;
