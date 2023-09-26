import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Confirm(){
  return (
    <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Yay!</strong> Din sallad ligger i varukorgen
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
  )
}