import {
  IoGridOutline,
  IoStopwatchOutline,
  IoCheckmarkDoneOutline,
  IoSearchOutline,
  IoHourglassOutline,
  IoChevronDownOutline,
  IoOptionsOutline,
  IoEllipsisVertical,
} from "react-icons/io5";

function NextActions() {
  return (
    <main>
      <h2 className="section_heading">Summary</h2>
      <div className="stats">
        <div className="stat">
          <div className="stat_icon stat_all">
            <IoGridOutline className="icon" />
          </div>
          <div className="stat_description">
            <p className="stat_description-light">All</p>
            <p className="stat_description-dark">23</p>
          </div>
        </div>

        <div className="stat">
          <div className="stat_icon stat_pending">
            <IoStopwatchOutline className="icon" />
          </div>
          <div className="stat_description">
            <p className="stat_description-light">Pending</p>
            <p className="stat_description-dark">12</p>
          </div>
        </div>

        <div className="stat">
          <div className="stat_icon stat_completed">
            <IoCheckmarkDoneOutline className="icon" />
          </div>
          <div className="stat_description">
            <p className="stat_description-light">Completed</p>
            <p className="stat_description-dark">11</p>
          </div>
        </div>
      </div>

      <h2 className="section_heading">Next Actions</h2>
      <div className="th">
        <div className="search">
          <IoSearchOutline className="icon" />
          <input type="text" placeholder="Search ..." />
        </div>
        <div className="options">
          <button>
            <IoOptionsOutline className="icon" />
          </button>
        </div>
      </div>

      <div className="card next_action">
        <div className="top">
          <p className="item_name">Call Beth</p>
          <div className="status pending">
            <div className="dot"></div>
            <p>Pending</p>
          </div>
          <div className="action">
            <IoEllipsisVertical className="icon" />
          </div>
        </div>
        <p className="item_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
          accusamus.
        </p>
        <div className="bottom">
          <div className="context chip">@Home</div>
          <div className="chip priority">High</div>
          <div className="chip deadline">In 3 weeks</div>
        </div>
      </div>

      <div className="card next_action">
        <div className="top">
          <p className="item_name">Call Beth</p>
          <div className="status completed">
            <div className="dot"></div>
            <p>Completed</p>
          </div>
          <div className="action">
            <IoEllipsisVertical className="icon" />
          </div>
        </div>
        <p className="item_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
          accusamus.
        </p>
        <div className="bottom">
          <div className="context chip">@Home</div>
          <div className="chip priority">High</div>
          <div className="chip deadline">In 1 hour</div>
        </div>
      </div>

      <div className="card next_action">
        <div className="top">
          <p className="item_name">Call Beth</p>
          <div className="status inprogress">
            <div className="dot"></div>
            <p>In progress</p>
          </div>
          <div className="action">
            <IoEllipsisVertical className="icon" />
          </div>
        </div>
        <p className="item_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
          accusamus.
        </p>
        <div className="bottom">
          <div className="context chip">@Home</div>
          <div className="chip priority">High</div>
          <div className="chip deadline">In 1 hour</div>
        </div>
      </div>
    </main>
  );
}

export default NextActions;
