import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useOutletContext, useParams } from 'react-router-dom';

export default function Confirm(){
  return (
    <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>En sallad har lagts till i varukorgen:</strong> Din sallad ligger i varukorgen {useParams().uuid}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
  )
}