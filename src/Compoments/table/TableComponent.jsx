// TableComponent.js

import React from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';

const TableComponent = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <div>
      <div>
        <input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup,index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column,index) => (
                <th key={index}  {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row,index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell,index) => (
                  <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {page.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default TableComponent;

