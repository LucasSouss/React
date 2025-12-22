
import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router"

export default function TaskPages() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    
    return (
        <div className="container-principal">
            <div className="container-interno">
                <div>
                <button onClick={() => navigate(-1)}> {/* -1 faz com que a página volte a página anterior*/}
                    <ChevronLeftIcon/>
                </button>
                <h1>Detalhes da Tarefa</h1>

                </div>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
    )
}