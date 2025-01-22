import React from 'react'
import { ReusabeTable } from '../component/table/ReusableTable'
import { Delete, Edit } from "@mui/icons-material"
import BasicDialogBox from '../component/BasicDialogBox'
import StudentForm from '../component/form/StudentForm'
const Home = () => {

      const [open, setOpen] = React.useState(false);
      const [selectedRow, setSelectedRow] = React.useState('');

      console.log(selectedRow)

      const handleClickOpen = () => {
            setOpen(true);
      };
      const handleClose = () => {
            setOpen(false);
            // selectedRow(null)
            setSelectedRow('')
      };


      const data = [
            { id: 1, name: 'John', mobile: 9999999999 },
            { id: 2, name: 'mohit', mobile: 8989898989 },
      ]
      const columns = [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'mobile', headerName: 'Mobile No' },
      ]

      const Rowdata = [
            { id: 1, name: 'man', mobile: 9999999999 },
            { id: 2, name: 'xyz', mobile: 8989898989 },
      ]
      const column1 = [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'mobile', headerName: 'Mobile No' },
      ]

      const actions = [
            {
                  icon: <Edit color="primary" />,
                  onClick: (row) => {
                        setSelectedRow(row)
                        setOpen(true)
                  },
            },
            { icon: <Delete color='error' /> }
      ]
      return (
            <div>
                  <BasicDialogBox title={selectedRow ? "Update Form" : "Add Form"} formId={'student'} open={open} selectedRow={selectedRow}
                        handleClickOpen={handleClickOpen} handleClose={handleClose} >
                        <StudentForm formId="student" initialValue={selectedRow} />
                  </BasicDialogBox>
                  <ReusabeTable
                        columns={columns}
                        rows={data}
                        actions={actions}
                        width='md'
                  />
            </div>
      )
}

export default Home
