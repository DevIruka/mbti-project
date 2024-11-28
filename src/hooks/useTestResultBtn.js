const useTestResultBtn = (
  visibilityMutation,
  deleteMutation,
  jsonId,
  visibility
) => {
  const visibilityBtnHandler = async () => {
    await visibilityMutation({ jsonId, visibility });
  };

  const deleteBtnHandler = async () => {
    await deleteMutation(jsonId);
  };
  return { visibilityBtnHandler, deleteBtnHandler };
};
export default useTestResultBtn;
