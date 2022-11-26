import React from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import DetailTypeIdentificationComponent from "./detailtypeidentification.component";
import DialogComponent from "../../../components/modal/dialog.component";
import { ITypeIdentification } from "../../../core/models/typeidentification/typeidentification";
import { useAppSelector } from "../../../hooks";

interface Props {
    setEditTypeIdentification: (typeIdentification: ITypeIdentification) => void;
}

const ListTypeIdentificationComponent: React.FC<Props> = ({setEditTypeIdentification}) => {
	const { getAllTypeIdentifications } = useAppSelector(s => s.typeIdentifications);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [openDetail, setOpenDetail] = React.useState<boolean>(false);
	const [typeIdentification, setTypeIdentification] = React.useState<ITypeIdentification | undefined>(undefined);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleToggleModal = () => {
		setOpenDetail(!openDetail);
	};

	const setDetailTypeIdentification = (typeIdentification: ITypeIdentification)  =>{
		setTypeIdentification(typeIdentification);
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
				<DetailTypeIdentificationComponent detailTypeIdentification={typeIdentification} onClose={handleToggleModal} />
			</DialogComponent>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell>
                           Type Identification
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
						{getAllTypeIdentifications && getAllTypeIdentifications.typeIdentifications
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((typeIdentification) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={typeIdentification.id}>
										<TableCell>
											{typeIdentification.name}
										</TableCell>
										<TableCell>
											{typeIdentification.status ? "Active" : "Inactive"}
										</TableCell>
										<TableCell>
											<Button onClick={()=> setEditTypeIdentification(typeIdentification)}>Edit</Button>
											<Button onClick={()=> setDetailTypeIdentification(typeIdentification)}>Detail</Button>
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
				count={getAllTypeIdentifications?.typeIdentifications.length ?? 0}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default ListTypeIdentificationComponent;