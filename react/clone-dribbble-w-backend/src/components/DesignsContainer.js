import { useEffect, useState } from 'react';
import { getDesignsData } from '../api/designs';
import DesignsCollection from './DesignsCollection';
import DesignsControl from './DesignsControl';

/**
 * A container component that basically consists of:
 * - DesignsControl     : to filter designs (e.g. based on category)
 * - DesignsCollection  : displays all the designs based on information from DesignsControl.
 */
function DesignsContainer() {
  /**
   * Designs data. This will be displayed in a grid-like manner in DesignsCollection.
   */
  const [designsCollection, setDesignsCollection] = useState([]);
  /**
   * What category is currently chosen. This state can be modified by DesignsControl.
   */
  const [categoryChosen, setCategoryChosen] = useState('all');

  useEffect(() => {
    getDesignsData(categoryChosen).then((res) => setDesignsCollection(res));
  }, [categoryChosen]);

  /**
   * A function that will toggle the 'isLoved' info in designsCollection
   * for a design with a specific id.
   */
  const loveDesignById = (id) => {
    console.log(id);
    // const newDesignsCollection = [...designsCollection];
    // newDesignsCollection[id].isLoved = !newDesignsCollection[id].isLoved;
    // setDesignsCollection(newDesignsCollection);
  };

  return (
    <section id="designs">
      <div className="container">
        <DesignsControl setCategory={setCategoryChosen} />
        <DesignsCollection
          designs={designsCollection}
          onLovePressed={loveDesignById}
        />
      </div>
    </section>
  );
}

export default DesignsContainer;
