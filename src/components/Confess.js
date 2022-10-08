import { useState } from "react" 
import { Button } from "react-bootstrap"

const Confess = props => {
    return(
        <div className="confessWrapper">
            <div className="confessContainer">
                <h1>Nazwa Salsabela</h1>
                <p>Aku mau cerita kita terus berjalan, kamu buat hari-hari aku lebih berwarna. Aku mau treat kamu sebagai salah satu orang terpenting buat aku. Jadi Nazwa Salsabela....</p>
                <h3 style={{margin: "15px 0"}}>Would you be mine?</h3>
                <Button style={{padding: "5px 30px", borderRadius: "20px", margin: "0 10px"}} variant="success" onClick={() => props.setAccepted(true)}>Yes</Button>
                <Button style={{padding: "5px 30px", borderRadius: "20px", margin: "0 10px"}} variant="outline-success">No</Button>
            </div>
        </div>
    )
}

export default Confess