import {Container} from "@mui/material";
import TabsComponent from "../../components/Tabs/TabsComponent";
import {useState} from "react";
import One from "../../components/One";
import Two from "../../components/two/Two";
import Three from "../../components/Three";
import Four from "../../components/Four";
import Five from "../../components/Five";
import SwiperComponent from "../../components/Swiper";


const values = {
    one: 'one',
    two: 'two',
    three: 'three',
    four: 'four',
    five: 'five',
}

const GetCategories = ({value}) => {
    switch (value) {
        case values.one:
            return <SwiperComponent/>
        case values.two:
            return <Two/>
        case values.three:
            return <Three/>
        case values.four:
            return <Four/>
        case values.five:
            return <Five/>
        default:
            return <div>{value}</div>
    }
}

const MainPage = () => {
    const categoriesSelect = [
        {
            value: values.one,
            label: "Item one"
        },
        {
            value: values.two,
            label: "Item two"
        },
        {
            value: values.three,
            label: "Item three"
        },
        {
            value: values.four,
            label: "Item four"
        },
        {
            value: values.five,
            label: "Item five"
        },
    ]
    const [value, setValue] = useState(categoriesSelect?.[0].values);

    return (

        <Container>
            <GetCategories value={value}/>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue} />
            {/*<SwiperComponent/>*/}
        </Container>
    );
};

export default MainPage;