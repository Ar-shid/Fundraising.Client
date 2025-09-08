const Referal = () => {
  return (
    <>
      <div className="card card-Vertical card-default campaign-form card-md mb-4">
        <div className="card-header">
          <h5>Your Referral Link</h5>
        </div>
        <div className="card-body p-5">
          <div className="Vertical-form">
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control ih-medium ip-gray radius-xs b-light px-15"
                  placeholder="https://www.example.com"
                />
              </div>

              <div className="layout-button mt-5 text-end">
                <button
                  type="button"
                  className="btn secondry-btn btn-default btn-squared border-normal bg-normal px-20 me-3"
                >
                  Copy Link
                </button>
                <button
                  type="button"
                  className="btn primary-btn btn-default btn-squared px-30"
                >
                  Share Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Referal;
