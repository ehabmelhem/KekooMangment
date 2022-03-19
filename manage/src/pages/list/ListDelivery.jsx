import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTableDelivery from "../../components/datatable/DataTableDelivery"

const ListDelivery = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">          
        <Navbar/>
        <DataTableDelivery/>   
        
      </div>
    </div>
  )
}

export default ListDelivery 