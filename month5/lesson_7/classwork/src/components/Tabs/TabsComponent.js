import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";

const TabsComponent = ({categoriesSelect, value, setValue}) => {
    const handleChange = (e, newValue) => {
        setValue(newValue);
    }
    return (
        <Box>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {
                    categoriesSelect.map((tab) => {
                        return (
                            <Tab key={tab.value} value={tab.value} label={tab.label}/>
                        )
                    })
                }
            </Tabs>
        </Box>
    );
};

export default TabsComponent;