const FormWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center align-middle h-[400px] w-[400px]">
      {children}
    </div>
  );
};
export default FormWrapper;
