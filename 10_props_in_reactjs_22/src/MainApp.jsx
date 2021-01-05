import PropsDetails from "./PropsDetails"
import Props from "./PropsBody";
import TheEnd from "./TheEnd"
function MainApp() {
    return (
        <>
            <PropsDetails />
            <p style={{ textDecoration: "underline", color: "red" }}> __Using Single Component  Multiple times this is the benifit of using props in React</p>
            <br />
            <div className="cards">
                <Props name="Munsif" imgSrc="https://picsum.photos/200/300?blur=2" number="1" />
                <Props name="Hamza" imgSrc="https://picsum.photos/200/300" number="2" />
                <Props name="Arslan" imgSrc="https://picsum.photos/200/300?grayscale" number="3" />
                <Props name="Kazmii" imgSrc="https://picsum.photos/200/300" number="4" />
            </div>
            <TheEnd />
        </>
    )
}

export default MainApp
