import React from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import DetailUserComponent from "./detailuser.component";
import DialogComponent from "../../../components/modal/dialog.component";
import { IUser } from "../../../core/models/user/user";
import { useAppSelector } from "../../../hooks";

interface ListUserProps {
    setEditUser: (user:IUser) => void;
}

const ListUsersComponent: React.FC<ListUserProps> = ({setEditUser}) => {
	const { getAllUserResponse } = useAppSelector(s => s.user);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [openDetail, setOpenDetail] = React.useState<boolean>(false);
	const [user, setUser] = React.useState<IUser | undefined>(undefined);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleToggleModal = () => {
		setOpenDetail(!openDetail);
	};

	const setDetailUser = (user: IUser)  =>{
		setUser(user);
		setOpenDetail(true);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: "100%" }}>
			<DialogComponent id={"modal-detail-delete-users"}
				titleDialog={"Detail User"}
				onClose={function (): void {
					setOpenDetail(false);
				}}
				open={openDetail}
				maxWidth={"xs"}
				fullWidth={true}>
				<DetailUserComponent userDetail={user} onClose={handleToggleModal} />
			</DialogComponent>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell>
                                Full Name
							</TableCell>
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
						{getAllUserResponse && getAllUserResponse.users
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((user) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={user.identification+user.lastName+user.name}>
										<TableCell>
											{user.name} {user.lastName}
										</TableCell>
										<TableCell>
											{user.typeUser?.name} 
										</TableCell>
										<TableCell>
											{user.status ? "Active": "Inactive"}
										</TableCell>
										<TableCell>
											<Button onClick={()=> setEditUser(user)}>Edit</Button>
											<Button onClick={()=> setDetailUser(user)}>Detail</Button>
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
				count={getAllUserResponse?.users.length ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default ListUsersComponent;