import profilePicture from '../assets/profile_picture.png';

function DesignsCollection(props) {
  const { designs, onLovePressed } = props;

  return (
    <div id="collection">
      {designs.map((d) => {
        const { id, name, loveCount, viewCount, isLoved } = d;
        const thumbnail = `https://loremflickr.com/320/240/art?random=${id}`;

        return (
          <div key={id} className="design">
            <img src={thumbnail} alt="design-thumbnail" />
            <div className="design-desc">
              <div className="design-desc-left">
                <img src={profilePicture} alt="author-pic" />
                <p>{name}</p>
              </div>
              <div className="design-desc-right">
                <div>
                  <span
                    className={`desc-item-icon ${isLoved ? 'icon-active' : ''}`}
                    onClick={() => onLovePressed(id)}
                  >
                    &#10084;
                  </span>
                  <span className="desc-item-value">{loveCount}</span>
                </div>
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
