import { Delete, Edit, Padding } from "@mui/icons-material"
import { Container, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: '#ef5350',
            // padding: 50,
            fontSize: '18px !important',

      },
      [`&.${tableCellClasses.body}`]: {
            fontSize: '18px !important',
            // padding: 30,
      },
}));

export const TodoTable = ({ handleClickOpen, setOpen, setEditId }) => {
      const row = [
            { id: 1, todoName: "John", date: '2025-01-17' },
            { id: 2, todoName: "Jane", date: '2025-01-18' },
      ]
      return (
            <>
                  <Container maxWidth='lg'>
                        <TableContainer component={Paper} elevation={24}>
                              <Table >
                                    <TableHead>
                                          <TableRow style={{ fontSize: 50 }}>
                                                <StyledTableCell>Todo Name</StyledTableCell>
                                                <StyledTableCell>Date</StyledTableCell>
                                                <StyledTableCell>Action</StyledTableCell>
                                          </TableRow>
                                    </TableHead>
                                    <TableBody>
                                          {
                                                row.map((item, index) => (
                                                      <TableRow key={index}>
                                                            <StyledTableCell>{item.todoName}</StyledTableCell>
                                                            <StyledTableCell>{item.date}</StyledTableCell>
                                                            <StyledTableCell>
                                                                  <IconButton color="primary" onClick={() => { setOpen(true); setEditId(item) }} >
                                                                        <Edit />
                                                                  </IconButton>
                                                                  <IconButton color="primary">
                                                                        <Delete />
                                                                  </IconButton>

                                                            </StyledTableCell>
                                                      </TableRow>
                                                ))
                                          }

                                    </TableBody>
                              </Table>
                        </TableContainer >
                  </Container>
            </>
      )
}