const SalesTable = () => {
  return (
    <>
      <div className="col-12">
        <div className="userDatatable global-shadow border p-30 bg-white radius-xl w-100 mb-30">
          <div className="table-responsive">
            <table className="table mb-0 table-borderless">
              <thead>
                <tr className="userDatatable-header">
                  <th>Name</th>
                  <th>
                    <span className="userDatatable-title">Unit Sold</span>
                  </th>
                  <th>
                    <span className="userDatatable-title">Sales</span>
                  </th>
                  <th>
                    <span className="userDatatable-title">Profit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="userDatatable-inline-title">
                        <h6>Product 1</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="userDatatable-content">1200</div>
                  </td>
                  <td>
                    <div className="order-bg-opacity-primary userDatatable-content">
                      $3000
                    </div>
                  </td>
                  <td>
                    <div className="userDatatable-content">60%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="userDatatable-inline-title">
                        <h6>Product 2</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="userDatatable-content">1200</div>
                  </td>
                  <td>
                    <div className="order-bg-opacity-primary userDatatable-content">
                      $3000
                    </div>
                  </td>
                  <td>
                    <div className="userDatatable-content">60%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="userDatatable-inline-title">
                        <h6>Product 3</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="userDatatable-content">1200</div>
                  </td>
                  <td>
                    <div className="order-bg-opacity-primary userDatatable-content">
                      $3000
                    </div>
                  </td>
                  <td>
                    <div className="userDatatable-content">60%</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hide COde for pagination */}

          {/* <div className="d-flex justify-content-end pt-30">
            <nav className="atbd-page ">
              <ul className="atbd-pagination d-flex">
                <li className="atbd-pagination__item">
                  <a
                    href="#"
                    className="atbd-pagination__link pagination-control"
                  >
                    <span className="la la-angle-left" />
                  </a>
                  <a href="#" className="atbd-pagination__link">
                    <span className="page-number">1</span>
                  </a>
                  <a href="#" className="atbd-pagination__link active">
                    <span className="page-number">2</span>
                  </a>
                  <a href="#" className="atbd-pagination__link">
                    <span className="page-number">3</span>
                  </a>
                  <a
                    href="#"
                    className="atbd-pagination__link pagination-control"
                  >
                    <span className="page-number">...</span>
                  </a>
                  <a href="#" className="atbd-pagination__link">
                    <span className="page-number">12</span>
                  </a>
                  <a
                    href="#"
                    className="atbd-pagination__link pagination-control"
                  >
                    <span className="la la-angle-right" />
                  </a>
                  <a href="#" className="atbd-pagination__option"></a>
                </li>
                <li className="atbd-pagination__item">
                  <div className="paging-option">
                    <select name="page-number" className="page-selection">
                      <option value={20}>20/page</option>
                      <option value={40}>40/page</option>
                      <option value={60}>60/page</option>
                    </select>
                  </div>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default SalesTable;
