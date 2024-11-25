const FormWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center align-middle h-[180px] w-[300px]">
      {children}
    </div>
  );
};
export default FormWrapper;
