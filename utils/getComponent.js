import Section from "../components/Landing/Section"
import Section2 from "../components/Landing/Section2"
import Slider from "../components/Landing/Slider"

export default function getComponent(data, index){
    if (data.style.type === 'section') {
        return <Section key={index} data={data} />
    }
    else if (data.style.type === 'section2') {
        return <Section2 key={index} data={data} />
    }
    else if (data.style.type === 'slider') {
        return <Slider key={index} data={data} />
    }
}