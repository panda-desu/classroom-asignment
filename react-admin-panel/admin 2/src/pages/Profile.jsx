export const Profile = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3">
          <div className="About-Section ">
            <img
              src="https://via.placeholder.com/250x250"
              alt=""
              className="rounded-circle"
            />
            <h2>UserName</h2>
            <p className="text-secondary">About</p>
            <button className="w-100 rounded-5">Edit Profile</button>
          </div>
        </div>
        <div className="col-9">
          <div>
            <ul className="d-flex flex-wrap ">
              <li className="list-style-none">
                <div className="profile-card">
                  <div className="card-body">
                    <div className="card-body-top d-flex justify-content-between">
                      <div>Project 1</div>
                      <div className="border-white rounded-pill">
                        Public or private
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
