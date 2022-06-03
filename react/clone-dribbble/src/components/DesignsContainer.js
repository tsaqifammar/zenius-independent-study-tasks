import { useState } from 'react';
import DesignsCollection from './DesignsCollection';
import DesignsControl from './DesignsControl';
import designsData from '../data/designsData';

/**
 * A container component that basically consists of:
 * - DesignsControl     : to filter designs (e.g. based on category)
 * - DesignsCollection  : displays all the designs based on information from DesignsControl.
 */
function DesignsContainer() {
  /**
   * Designs data. This will be displayed in a grid-like manner in DesignsCollection.
   */
  const [designsCollection, setDesignsCollection] = useState(designsData);
  /**
   * What category is currently chosen. This state can be modified by DesignsControl.
   */
  const [categoryChosen, setCategoryChosen] = useState('all');

  let designsWithCategoryChosen = designsCollection;
  if (categoryChosen !== 'all') {
    // Filter-in the designs with 'tag' matching with 'categoryChosen'
    designsWithCategoryChosen = designsCollection.filter((d) => d.tag === categoryChosen);
  }

  /**
   * A function that will toggle the 'isLoved' info in designsCollection
   * for a design with a specific id.
   */
  const loveDesignById = (id) => {
    const newDesignsCollection = [...designsCollection];
    newDesignsCollection[id].isLoved = !newDesignsCollection[id].isLoved;
    setDesignsCollection(newDesignsCollection);
  };

  return (
    <section id="designs">
      <div className="container">
        <DesignsControl setCategory={setCategoryChosen} />
        <DesignsCollection
          designs={designsWithCategoryChosen}
          onLovePressed={loveDesignById}
        />
      </div>
    </section>
  );
}

export default DesignsContainer;
