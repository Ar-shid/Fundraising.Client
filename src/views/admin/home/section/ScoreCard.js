const ScoreCard = () => {
  return (
    <>
      <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
        {/* Card 1 */}
        <div className="ap-po-details p-25 radius-xl bg-white d-flex justify-content-between">
          <div>
            <div className="overview-content">
              <h1>7,461</h1>
              <p>Orders</p>
              <div className="ap-po-details-time">
                <span className="color-success">
                  <i className="las la-arrow-up" />
                  <strong>25%</strong>
                </span>
                <small>Since last week</small>
              </div>
            </div>
          </div>
          <div className="ap-po-timeChart">
            <div className="overview-single__chart d-md-flex align-items-end">
              <div className="parentContainer">
                <div>
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      <div className="" />
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      <div className="" />
                    </div>
                  </div>
                  <canvas
                    id="mychart8"
                    height={93}
                    width={130}
                    style={{ display: "block", width: 130, height: 93 }}
                    className="chartjs-render-monitor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 1 End */}
      </div>
    </>
  );
};
export default ScoreCard;
