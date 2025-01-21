import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ReusableTable = ({ columns = [], rows = [], width = "lg", actions = [] }) => {
      return (
            <Container maxWidth={width} sx={{ mt: 2 }}>
                  <Paper elevation={10}>
                        <TableContainer>
                              <Table>
                                    <TableHead>
                                          <TableRow>

                                                {columns.map((column, index) => (
                                                      <TableCell key={column.id || index}>{column.headerName}</TableCell>
                                                ))}
                                                {
                                                      actions.length > 0 && <TableCell>Actions</TableCell>
                                                }

                                          </TableRow>
                                    </TableHead>

                                    {/* body */}
                                    <TableBody>
                                          {
                                                rows.map((row, index) => (
                                                      <TableRow key={row.id || index}>{
                                                            columns.map((column, columnIndex) => (
                                                                  < TableCell key={columnIndex} > {row[column.field]}</TableCell>
                                                            ))}
                                                            {
                                                                  <TableCell>{
                                                                        actions.length > 0 && actions.map((action, index) => (
                                                                              <IconButton key={index} onClick={() => action.onClick(row)}>
                                                                                    {action.icon}
                                                                              </IconButton>
                                                                        ))
                                                                  }
                                                                  </TableCell>

                                                            }
                                                      </TableRow>
                                                ))
                                          }

                                    </TableBody>
                              </Table>
                        </TableContainer>
                  </Paper>
            </Container >
      )
}

export default ReusableTable
