import profilePicture from '../assets/profile_picture.png';

/**
 * A component to display designs data in a grid-like manner.
 * Consists of many design cards.
 */
function DesignsCollection(props) {
  const {
    /** The designs data */
    designs,
    /** A function that will run when the 'love' button is clicked on each design card */
    onLovePressed
  } = props;

  return (
    <div id="collection">
      {/**
       * Map for every design, create a "Design card".
       * Each design card will consist of:
       * - A thumbnail
       * - A description that contains design infos (designer, loveCount, viewCount)
       */}
      {designs.map((d) => {
        const { id, name, loveCount, viewCount, isLoved } = d;
        const thumbnail = `https://loremflickr.com/320/240/art?random=${id}`;

        return (
          <div key={id} className="design">
            {/* Thumbnail */}
            <img src={thumbnail} alt="design-thumbnail" />

            {/* Description */}
            <div className="design-desc">
              {/* Designer information */}
              <div className="design-desc-left">
                <img src={profilePicture} alt="author-pic" />
                <p>{name}</p>
              </div>
              {/* Love count and View count */}
              <div className="design-desc-right">
                {/* Love count */}
                <div>
                  <span
                    className={`desc-item-icon ${isLoved ? 'icon-active' : ''}`}
                    onClick={() => onLovePressed(id)}
                  >
                    {/* Love symbol (in unicode). If clicked, onLovePressed runs. */}
                    &#10084;
                  </span>
                  <span className="desc-item-value">{loveCount}</span>
                </div>
                {/* View count */}
                <div>
                  <span className="desc-item-icon">&#128065;</span>
                  <span className="desc-item-value">{viewCount}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DesignsCollection;
