import React from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import DetailTypeUserComponent from "./detailtypeusercomponent";
import DialogComponent from "../../../components/modal/dialog.component";
import { ITypeUser } from "../../../core/models/typeuser/typeuser";
import { useAppSelector } from "../../../hooks";

interface Props {
    setEditTypeUser: (typeUser: ITypeUser) => void;
}

const ListTypeUserComponent: React.FC<Props> = ({setEditTypeUser}) => {
	const { getAllTypeUserResponse } = useAppSelector(s => s.typeUsers);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [openDetail, setOpenDetail] = React.useState<boolean>(false);
	const [typeUser, setTypeUser] = React.useState<ITypeUser | undefined>(undefined);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleToggleModal = () => {
		setOpenDetail(!openDetail);
	};

	const setDetailTypeUser = (user: ITypeUser)  =>{
		setTypeUser(user);
		setOpenDetail(true);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: "100%" }}>
			<DialogComponent id={"modal-detail-delete-typeusers"}
				titleDialog={"Detail Type User"}
				onClose={function (): void {
					setOpenDetail(false);
				}}
				open={openDetail}
				maxWidth={"xs"}
				fullWidth={true}>
				<DetailTypeUserComponent detailTypeUser={typeUser} onClose={handleToggleModal} />
			</DialogComponent>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell>
                                Type User
							</TableCell>
							<TableCell>
                                Status
							</TableCell>
							<TableCell>
                                Actions
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{getAllTypeUserResponse && getAllTypeUserResponse.typeUsers
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((typeUser: ITypeUser) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={typeUser.id}>
										<TableCell>
											{typeUser.name}
										</TableCell>
										<TableCell>
											{typeUser.state ? "Active": "Inactive"}
										</TableCell>
										<TableCell>
											<Button onClick={()=> setEditTypeUser(typeUser)}>Edit</Button>
											<Button onClick={()=> setDetailTypeUser(typeUser)}>Detail</Button>
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={getAllTypeUserResponse?.typeUsers.length ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default ListTypeUserComponent;