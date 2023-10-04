import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

export default function Confirm() {
  const params = useParams(); 
  const props = useOutletContext(); 
  const boo = props.salads?.find((x)=>{
    return x.uuid === params.uuid;
  });
  
  return (
    <div>
      {boo ?
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>En sallad har lagts till i varukorgen:</strong> Sallad-Id: {params.uuid}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> :
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Salad ID:t finns inte</strong>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
    </div>
  );
}
