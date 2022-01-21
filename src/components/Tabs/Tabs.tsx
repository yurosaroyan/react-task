import React, { useEffect, useState } from 'react';
const Tabs: React.FC = () => {
    let [tab,setActive] = useState([
        {name: 'active',class:true},
        {name: 'Inactive',class:false}
    ])

    return (
        <div className="btn_block d_flex">
            {tab.map((name, index) => {
                return (
                    <button className={`btn ${name.class ? "active" : "" }`} key={index} onClick={(e) => {
                        if(e.currentTarget.className.includes("active")) {
                            setActive(tab)
                        } else {
                            setActive([
                                {...tab[0],class:!tab[0].class},
                                {...tab[1],class:!tab[1].class}
                            ])
                        }
                    }}>{name.name}</button>
                );
            })}
        </div>
    );
}
export default Tabs;
