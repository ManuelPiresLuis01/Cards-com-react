import "./style/app.css"
import pirex2 from "../images/pirex.jpg"
import pirex from "../images/pirex-2.png"
import Card from "../components/card/card"

function App(){
    return (
        <div className="flex">
            <Card foto = {pirex} titulo = "Manuel Pires Luis" sobre = "O homem mais poderoso da terra amostra neste card, queres conhecer ele?, clique no botão abaixo"/>
            <Card foto = {pirex2} titulo = "Pires Luis Manuel " sobre = "O homem mais poderoso da terra amostra neste card, queres conhecer ele?, clique no botão abaixo"/>
            <Card foto = {pirex} titulo = "Manuel Luis" sobre = "O homem mais poderoso da terra gemeo do Manuel pires luis amostra neste card, queres conhecer ele?, clique no botão abaixo"/>
        </div>
    )
}

export default App