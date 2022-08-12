import React from "react";
import MyInput from "./UI/input/MyInput";
import Myselect from "./UI/select/Myselect";

function PostFilter({filter, setFilter}) {
    return ( 
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...setFilter,query:e.target.value})}
                placeholder="Поиск..." />
            <Myselect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Сортировка'}
                options={[
                    { value: 'title', name: 'по названию' },
                    { value: 'body', name: 'по описанию' }
                ]}
            />
        </div>
     )
}

export default PostFilter;