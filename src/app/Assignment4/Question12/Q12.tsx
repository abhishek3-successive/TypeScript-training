'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TablePagination,
  Box,
} from '@mui/material';

interface RowData {
  id: number;
  name: string;
  age: number;
  city: string;
}

type Order = 'asc' | 'desc';

const sampleData: RowData[] = [
  { id: 1, name: 'GG', age: 25, city: 'Delhi' },
  { id: 2, name: 'Goku', age: 30, city: 'Mumbai' },
  { id: 3, name: 'Vegeta', age: 22, city: 'Bangalore' },
  { id: 4, name: 'pikalo', age: 28, city: 'Chennai' },
  { id: 5, name: 'Super Dragron', age: 35, city: 'Kolkata' },
  { id: 6, name: 'Supereme Leader', age: 29, city: 'Pune' },
  { id: 7, name: 'Gohan', age: 33, city: 'Ahmedabad' },
  { id: 8, name: 'Tanjiro', age: 27, city: 'Hyderabad' },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator<Key extends keyof RowData>(
  order: Order,
  orderBy: Key
): (a: RowData, b: RowData) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator<RowData>(a, b, orderBy)
    : (a, b) => -descendingComparator<RowData>(a, b, orderBy);
}

export default function DataTable() {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof RowData>('name');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleRequestSort = (property: keyof RowData) => () => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = [...sampleData].sort(getComparator(order, orderBy));
  const paginatedRows = sortedRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {(['name', 'age', 'city'] as (keyof RowData)[]).map((column) => (
                  <TableCell key={column}>
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : 'asc'}
                      onClick={handleRequestSort(column)}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={sampleData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10]}
        />
      </Paper>
    </Box>
  );
}
