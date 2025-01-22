import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container, IconButton } from "@mui/material"

export const ReusabeTable = ({ columns = [], rows = [], actions = [], width = "lg" }) => {
      return (
            <Container maxWidth={width}>
                  <Paper elevation={10} sx={{ mt: 2, }}>
                        <TableContainer sx={{ maxHeight: 440, width: '100%' }}>
                              <Table>
                                    <TableHead>
                                          {/* dynamic table row head */}
                                          <TableRow>
                                                {columns?.map((column, index) => (
                                                      <>
                                                            <TableCell key={column.id || index} > {column.headerName}
                                                            </TableCell>
                                                      </>

                                                ))}
                                                {
                                                      actions.length > 0 &&
                                                      <TableCell align="left">
                                                            Actions
                                                      </TableCell>
                                                }
                                          </TableRow>
                                    </TableHead>

                                    {/* Table Body */}
                                    <TableBody>
                                          {/* dynamic table body */}

                                          {
                                                rows?.map((row, index) => (
                                                      <TableRow key={row.id || index}>
                                                            {columns?.map((column) => (
                                                                  <>
                                                                        <TableCell key={column.field}>{row[column.field]}
                                                                        </TableCell>

                                                                  </>

                                                            ))}
                                                            <TableCell align="left" >
                                                                  {
                                                                        actions.length > 0 && actions.map((action, index) => (
                                                                              <IconButton key={index} onClick={() => action.onClick(row)}>{action.icon}</IconButton>

                                                                        ))
                                                                  }
                                                            </TableCell>
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