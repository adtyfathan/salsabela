import { Accordion } from "react-bootstrap"
import item from "./ItemsData"

const Items = () => {
    return(
        <div className="itemWrapper">
            <div className="breakAfter"/>
            {item.map((item, i) => {
                return (
                    <div className="itemContainer" key={i}>
                        <img className="itemImg" src={item.img}/>
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body>
                                    <h4>{item.head}</h4>
                                    <p>{item.text}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>    
                )
            })}
        </div>
    )
}

export default Items