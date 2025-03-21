import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";
import './ResidentsList.css'
import { usePagination } from "../hooks/usePagination";


function ResidentsList({ residents }) {
  
  if (!residents || residents.length === 0) {
    return <h2 style={{ textAlign: 'center', color: '#D80286' }}>It´s Empty</h2>;
  }
  //pagination
  const {
    page, 
    prev, 
    next, 
    itemsPagination, 
    totalPages,
    maxItemsVisible 
  } = usePagination(residents, 4)



  return (

    <>
    {residents.length === 0 && 
    <h2 style={{ textAlign: 'center', color:'#D80286'}}>It´s Empty</h2> 
    }
    


    {residents.length > maxItemsVisible &&
      <Pagination 
        page={page}
        totalPages={totalPages}
        prev={prev}
        next={next}
      />
    }
    
        {/* ResitentList*/}
        <div className="residents">
            {itemsPagination.map(resident => (
              <ResidentCard key={resident} url={resident}/>
            ))}
        </div>
    {/* </div> */}

    {residents.length > maxItemsVisible &&
      <Pagination 
        page={page}
        totalPages={totalPages}
        prev={prev}
        next={next}
      />
    }
    </>
  )
}
export default ResidentsList;
