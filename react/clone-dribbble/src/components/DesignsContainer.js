import { useState } from 'react';
import DesignsCollection from './DesignsCollection';
import DesignsControl from './DesignsControl';
import designsData from '../data/designsData';

function DesignsContainer() {
  const [designsCollection, setDesignsCollection] = useState(designsData);
  const [categoryChosen, setCategoryChosen] = useState('all');

  let designsWithCategoryChosen = designsCollection;
  if (categoryChosen !== 'all')
    designsWithCategoryChosen = designsCollection.filter((d) => d.tag === categoryChosen);

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
