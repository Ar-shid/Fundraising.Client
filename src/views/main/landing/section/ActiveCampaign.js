import CampaignList from "../list/CampaignList";
const ActiveCampaign = () => {
  return (
    <>
      <section className="ActiveCampaign">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <h4>Active Campaigns of Fundraising</h4>
                <p>
                  Elit sit risus lorem proin eget eu molestie nibh odioa non
                  neque turpis proin viverra velarcu venenatis nulla frin
                  blandit tristique morbi nulla curabitur etiam vestibulum
                  suscipit nullam sagittis imperdiet non aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CampaignList />
    </>
  );
};
export default ActiveCampaign;
