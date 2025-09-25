const CampaignDesc = ({ value, onChange }) => {
  return (
    <>
      <div className="form-group form-element-textarea mb-20">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="il-gray fs-14 fw-500 align-center"
        >
          Campaign Description *
        </label>
        <textarea
          className="form-control"
          placeholder="About Campaign "
          rows={5}
          name="description"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
export default CampaignDesc;
