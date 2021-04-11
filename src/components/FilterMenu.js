import './FilterMenu.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const FilterMenu = () => {
  return (
    <div className="filter">
      <span>Electronics<ExpandMoreIcon /></span>
      <span>TVs & Appliances<ExpandMoreIcon /></span>
      <span>Men<ExpandMoreIcon /></span>
      <span>Women<ExpandMoreIcon /></span>
      <span>Baby & Kids<ExpandMoreIcon /></span>
      <span>Home & Furniture<ExpandMoreIcon /></span>
      <span>Sports Books & More<ExpandMoreIcon /></span>
      <span>Flights<ExpandMoreIcon /></span>
      <span>Offer Zone<ExpandMoreIcon /></span>
    </div>
  )
}

export default FilterMenu