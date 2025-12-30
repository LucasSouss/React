import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

export default function TaskPages() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="container-principal-pg">
      <div className="container-interno-pg">
        <div className="container-pg-header">
          <button onClick={() => navigate(-1)}>
            {" "}
            {/* -1 faz com que a página volte a página anterior*/}
            <ChevronLeftIcon />
          </button>
          <h1 className="pg-header">Detalhes da Tarefa</h1>
        </div>
        <div className="title-description">
          <h2 className="pg-title">{title}</h2>
          <p className="pg-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
