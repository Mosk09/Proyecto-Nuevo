import React from "react";
import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
    {
        name: 'New York',
        sales: 1000
    },
    {
        name: 'Caracas',
        sales: 700
    },
    {
        name: 'México DF',
        sales: 500
    }
]

const ChartDonut = () => {
    return (
        <Card>
            <Title>Sales by City</Title>
            <DonutChart
                data={cities}
                category='sales'
                dataKey='name'
                marginTop='mt-6'
                colors={["slate", "violet", "indigo", "rose", "cyan"]}
            />
        </Card>
    )
}

export default ChartDonut