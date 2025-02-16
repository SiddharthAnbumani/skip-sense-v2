import { useContext, useState } from "react";
import { ClassesContext } from "./ClassesContext";

export default function Form() {
  const {
    classes,
    setClasses,
    tutorialHours,
    setTutorialHours,
    totWeeklyClass,
    setTotWeeklyClass,
    totalSemClasses,
    setTotalSemClasses,
    skipNum,
    setSkipNum,
  } = useContext(ClassesContext);

  const [toggleForm, setToggleForm] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();
    const numClasses = Number(classes);
    const numTutorialHours = Number(tutorialHours);

    setTotWeeklyClass(() => {
      const weeklyClasses = numClasses - numTutorialHours;
      setTotalSemClasses(() => {
        const semesterClasses = weeklyClasses * 15;

        setSkipNum(() => Math.floor(semesterClasses * 0.25));

        return semesterClasses;
      });
      return weeklyClasses;
    });

    setClasses(0);
    setTutorialHours(0);
    setToggleForm(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#A31621] p-4">
      <form
        className="bg-[#FCF7F8] text-black p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-bold text-center mb-">SkipSense</h3>
        <p className="italic mb-4">Check How many classes you can skip in a semester</p>
        {!toggleForm && totalSemClasses !== null && (
          <h3 className="text-lg font-semibold mb-2">Total Semester Classes: {totalSemClasses}</h3>
        )}
        {!toggleForm && skipNum !== null && (
          <h3 className="text-lg font-semibold mb-4">Max Skippable Classes: {skipNum}</h3>
        )}

        {toggleForm && (
          <label className="block mb-4">
            <span className="text-md font-medium">Classes Per Week:</span>
            <input
              type="number"
              value={classes}
              onChange={(evt) => setClasses(Number(evt.target.value))}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#A31621] text-[#A31621]"
            />
          </label>
        )}

        {toggleForm && (
          <label className="block mb-4">
            <span className="text-md font-medium">Tutorial Hours?</span>
            <input
              type="number"
              value={tutorialHours}
              onChange={(evt) => setTutorialHours(Number(evt.target.value))}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#A31621] text-[#A31621]"
            />
          </label>
        )}

        {toggleForm && (
          <button
            type="submit"
            className="w-full bg-[#A31621] text-white p-3 rounded-md hover:bg-[#820F17] transition-all"
          >
            Calculate
          </button>
        )}

        {!toggleForm && (
          <button
            onClick={() => setToggleForm(true)}
            className="w-full bg-gray-300 text-[#A31621] p-3 rounded-md mt-4 hover:bg-gray-400 transition-all"
          >
            Calculate Another
          </button>
        )}
      </form>
    </div>
  );
}
