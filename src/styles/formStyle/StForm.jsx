const StForm = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
      {children}
    </form>
  );
};
export default StForm;
