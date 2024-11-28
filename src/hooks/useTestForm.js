import { useState } from "react";
import { questions } from "../data/questions";

const useTestForm = (onSubmit) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };
  return { answers, handleChange, handleSubmit };
};
export default useTestForm;
