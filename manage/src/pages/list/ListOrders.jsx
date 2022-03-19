import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatablOrders from "../../components/datatable/DataTableOrders"

const ListOrders = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">          
        <Navbar/>
        <DatatablOrders/>   
      </div>
    </div>
  )
}

export default ListOrders