import { useState } from "react";
import "./AgeForm.css";

const AgeForm = () => {
  const [userDate, setUserDate] = useState("");

  // ErrorMesaage
  const [errorMesaage, setErroMessage] = useState("");

  // Age details state
  const [header, setHeader] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputDate = userDate;

    // Validate user Input.
    if (inputDate === "") {
      setErroMessage("Please enter a date of birth.");
    } else {
      setErroMessage("");
      const todayDate = new Date();

      const birthDate = new Date(inputDate);

      const birthYear = birthDate.getFullYear();

      // birthMonth
      const birthMonth = birthDate.getMonth();

      // birthDay
      const birthDay = birthDate.getDate();

      //Year
      const currentYear = todayDate.getFullYear();

      // Month
      const currentMonth = todayDate.getMonth();

      // Day
      const currentDay = todayDate.getDate();

      let ageYears = currentYear - birthYear;

      let ageMonths = currentMonth - birthMonth;

      let ageDays = currentDay - birthDay;

      if (ageDays < 0) {
        ageMonths--;

        const daysInPreviousMonth = new Date(
          currentYear,
          currentMonth,
          0,
        ).getDate();
      }

      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      setHeader("Your Age");
      setYears(`${ageYears} Years`);
      setMonths(`${ageMonths} Months`);
      setDays(`${ageDays} Days`);
    }
  };

  return (
    <>
      <div className="ageContainer">
        <form action="" onSubmit={handleSubmit}>
          <p style={{ textAlign: "center" }}>Date of Birth</p>
          <input
            type="date"
            name="date"
            id="date"
            value={userDate}
            onChange={(event) => setUserDate(event.target.value)}
          />
          <p>{errorMesaage}</p>

          {/* Age button */}
          <div className="buttonContainer">
            <button id="btn" type="submit">
              Check my age
            </button>
          </div>
        </form>
      </div>

      <div className="ageDetailContainer">
        <div className="ageDetail">
          <h3>{header}</h3>
          <p>{years}</p>
          <p>{months}</p>
          <p>{days}</p>
        </div>
      </div>
    </>
  );
};
export default AgeForm;
