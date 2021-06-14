import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters,usePagination, useRowSelect } from 'react-table';//helps to create react table
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css'
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';
import { Checkbox } from './Checkbox';

export const ColumnFilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, []) //useMemo helps to stop creating data automatically

    const { getTableProps, getTableBodyProps, headerGroups, page, state, setGlobalFilter, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, prepareRow, selectedFlatRows} = useTable({
        columns,
        data
    }, useFilters, useGlobalFilter, usePagination, useRowSelect,
    (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell:({row}) => (
                        <Checkbox {...row.getToggleRowSelectedProps()} /> 
                    )
                },
                ...columns
            ]
        })
    }
    )

    const {globalFilter} =state;

    const {pageIndex} = state;

    return (
        <>
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))
                            }
                        </tr>
                    )
                    )
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell =>
                                        {
                                           return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div>
        <span>
            page{' '}
            <strong>
                {pageIndex+1} of {pageOptions.length}
            </strong>{' '}
        </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        </div>
        <pre>
            <code>
                {JSON.stringify(
                    {
                        selectedFlatRows: selectedFlatRows.map((row)=>row.original),
                    },
                    null,
                    2
                )
                }
            </code>
        </pre>
        </>
    )
}
