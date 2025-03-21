import '../assets/pagination.css'

function Pagination({ page, totalPages, prev, next }) {
  return (
    <div className="btn__pagination">
      <button className="btn prev" onClick={prev} disabled={page === 1}>Prev</button>
      <span className="text_btn"> 
        <span className="page-number">{page} of {totalPages}</span>
      </span>
      <button className="btn nxt" onClick={next} disabled={page === totalPages}>Next</button>
    </div>
  )
}

export default Pagination