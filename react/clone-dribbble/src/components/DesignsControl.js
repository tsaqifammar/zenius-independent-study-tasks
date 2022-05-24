const CATEGORIES = [
  { value: 'all', display: 'All' },
  { value: 'animation', display: 'Animation' },
  { value: 'branding', display: 'Branding' },
  { value: 'illustration', display: 'Illustration' },
  { value: 'mobile', display: 'Mobile' },
  { value: 'print', display: 'Print' },
  { value: 'product-design', display: 'Product Design' },
  { value: 'typography', display: 'Typography' },
  { value: 'web-design', display: 'Web Design' },
];

function DesignsControl(props) {
  const { setCategory } = props;

  return (
    <div id="control">
      <select>
        <option value="popular">Popular</option>
        <option value="new">New & Noteworthy</option>
        <option value="goods">Goods for Sale</option>
      </select>
      <ul>
        {CATEGORIES.map(({ value, display }, idx) => (
          <li key={idx} onClick={() => setCategory(value)}>
            {display}
          </li>
        ))}
      </ul>
      <button type="button" className="btn">
        Filters
      </button>
    </div>
  );
}

export default DesignsControl;
