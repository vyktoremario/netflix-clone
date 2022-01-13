import ListItem from "../listItem/ListItem"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./List.scss"
import { useRef, useState } from "react"

const List = () => {

    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const listRef = useRef<HTMLDivElement>(null)

    const handleClick = (direction: string) => {
        setIsMoved(true);
        let getX = listRef.current?.getBoundingClientRect().x
        let distance = getX as number - 50
        if (direction === "left" && slideNumber > 0) {
            if (listRef.current) {
                setSlideNumber(slideNumber - 1)
                listRef.current.style.transform = `translateX(${230 + distance}px)`
            }
        }

        if (direction === "right" && slideNumber < 7) {
            if (listRef.current) {
                setSlideNumber(slideNumber + 1)
                listRef.current.style.transform = `translateX(${-230 + distance}px)`
            }
        }
    }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved ? "none" : "block" }} />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
