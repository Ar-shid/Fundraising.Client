const CampaignTitle = ({ value, onChange }) => {
  return (
    <>
      <div className="form-group">
        <label
          htmlFor="formGroupExampleInput"
          className="color-dark fs-14 fw-500 align-center"
        >
          Campaign Title *
        </label>
        <input
          type="text"
          className="form-control ih-medium ip-gray radius-xs b-light px-15"
          name="name"
          value={value}
          onChange={onChange}
          placeholder="Campaign Title here"
        />
      </div>
    </>
  );
};
export default CampaignTitle;
