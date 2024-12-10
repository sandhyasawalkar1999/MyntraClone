import React from 'react'
import BagSummary from '../componets/BagSummary'
import BagItems from '../componets/BagItems'
import { useSelector } from 'react-redux'

const Bag = () => {
    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item => {
        const ItemsIndex = bagItems.indexOf(item.id);
        return ItemsIndex >= 0;
    });

    return (
        <>
            <main>

                <div className="bag-page">
                    {finalItems.map((item) => <BagItems item={item} />)}

                    <BagSummary />

                </div>
            </main>


        </>
    )
}

export default Bag