import { useState } from "react";
import DialogBox from "../components/DialogBox"
import Header from "../components/Header"
import { TodoTable } from "../components/table/TodoTable"
import ReusableTable from "../components/table/ReusableTable";
import { Delete, Edit } from "@mui/icons-material";

export const Home = () => {
      const [open, setOpen] = useState(false);
      const [text, setText] = useState([{ todoName: '', date: '' }]);
      const [editId, setEditId] = useState(null)

      console.log(text)

      const handleChange = (e) => {
            const { value, name } = e.target;
            setText((prev) => ({ ...prev, [name]: value }))
      }

      const handleClickOpen = (item) => {
            setOpen(true);


      };
      const handleClose = () => {
            setOpen(false);
            setEditId([{}])
      };

      const data = [
            { id: 1, name: "John", age: 30 },
            { id: 2, name: "man", age: 30 },
      ]

      const column = [
            { field: 'id', headerName: 'Id' },
            { field: 'name', headerName: 'Todo Name' },
            { field: 'age', headerName: 'Age', },
      ]

      const data1 = [
            { id: 3, name: "hello", age: 20 },
            { id: 4, name: "world", age: 50 },
      ]

      const column1 = [
            { field: 'id', headerName: 'Todo Name' },
            { field: 'name', headerName: 'Todo Name' },
            { field: 'age', headerName: 'Age' },
      ]

      const actions = [
            {
                  icon: <Edit />,
                  onClick: (row) => console.log(row)
            },
            {
                  icon: <Delete />,
                  onClick: () => console.log('hello')
            },
      ]

      return (
            <>
                  <Header />
                  <DialogBox handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} editId={editId} handleChange={handleChange} />
                  <TodoTable handleClickOpen={handleClickOpen} setOpen={setOpen} setEditId={setEditId} />
                  <ReusableTable columns={column} width="md" rows={data} actions={actions} />
                  <ReusableTable columns={column1} width="lg" rows={data1} />

            </>
      )
}