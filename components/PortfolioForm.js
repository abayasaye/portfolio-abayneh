import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
const PortfolioForm = ({ onSubmit, initialData={} }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { register, handleSubmit, setValue } = useForm({defaultValues: initialData});

  useEffect(() => {
    {
      register("startDate");
    }
    {
      register("endDate");
    }
  }, []);


  useEffect(() =>{
const {startDate, endDate} = initialData;
    if(startDate){
      setStartDate(new Date(startDate));
    }
    if(endDate){
      setEndDate(new Date(endDate));
    }

  },[initialData]);

  // const handleStartDate = (date) => {
  //     setStartDate(date);
  //     setValue('startDate', date);
  //   };
  // const handleEndDate = (date) => {
  //     setEndDate(date);
  //     setValue('endDate', date);
  // }

  const handleDateChange = (dateType, setDate) => (data) => {
    setValue(dateType, data);
    setDate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          {...register("title")}
          name="title"
          type="text"
          className="form-control"
          id="title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">Company</label>
        <input
          {...register("company")}
          name="company"
          type="text"
          className="form-control"
          id="company"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">Company Website</label>
        <input
          {...register("companyWebsite")}
          name="companyWebsite"
          type="text"
          className="form-control"
          id="companyWebsite"
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Location</label>
        <input
          {...register("location")}
          name="location"
          type="text"
          className="form-control"
          id="location"
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Job Title</label>
        <input
          {...register("jobTitle")}
          name="jobTitle"
          type="text"
          className="form-control"
          id="jobTitle"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description")}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange("startDate", setStartDate)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange("endDate", setEndDate)}
          />
        </div>
      </div>
      <div className="form-group py-3">
        {endDate && (
          <button
            onClick={() => handleDateChange("endDate", setEndDate)(null)}
            type="button"
            className="btn btn-danger"
          >
            No End Date
          </button>
        )}
        {!endDate && (
          <button
            onClick={() =>
              handleDateChange(
                "endDate",
                setEndDate
              )(new Date(new Date().setHours(0, 0, 0, 0)))
            }
            type="button"
            className="btn btn-success"
          >
            Set End Date
          </button>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
