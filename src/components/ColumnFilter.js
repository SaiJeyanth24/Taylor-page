import React from 'react'

export const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column;
    return (
        <span>
          Search: {' '} 
          <input value={filterValue || ''} onChange = {(e) => setFilter(e.target.value)} />
        </span>
    )
}

// export const ColumnFilter = ({ filter, onChange }) => {
//     return (
//       <select
//         onChange={event => onChange(event.target.value)}
//         style={{ width: "100%" }}
//         value={filter ? filter.value : "all"}
//       > 
//         <option value="all">Show All</option>
//         {testData
//           .map(item => item.lastName)

//           .filter((item, i, s) => s.lastIndexOf(item) == i)
//           .map(function (value) {
//             log.debug('renderItem: ', value);
//             return (
//               <option key={value} value={value}>
//                 {value}
//               </option>
//             );
//           })}
//       </select>
//     );
//   };