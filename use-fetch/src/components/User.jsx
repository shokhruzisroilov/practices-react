import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBIcon,
	MDBListGroup,
	MDBListGroupItem,
} from 'mdb-react-ui-kit'

export default function User({ users }) {
	return (
		<section style={{ backgroundColor: '#eee', width: '100%' }}>
			<MDBContainer className='py-5'>
				<MDBRow>
					<MDBCol lg='8'>
						<MDBCard className='mb-4'>
							<MDBCardBody>
								<MDBRow>
									<MDBCol sm='3'>
										<MDBCardText>Full Name</MDBCardText>
									</MDBCol>
									<MDBCol sm='9'>
										<MDBCardText className='text-muted'>
											{users?.name}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm='3'>
										<MDBCardText>Username</MDBCardText>
									</MDBCol>
									<MDBCol sm='9'>
										<MDBCardText className='text-muted'>
											{users?.username}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm='3'>
										<MDBCardText>Email</MDBCardText>
									</MDBCol>
									<MDBCol sm='9'>
										<MDBCardText className='text-muted'>
											{users?.email}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm='3'>
										<MDBCardText>Phone</MDBCardText>
									</MDBCol>
									<MDBCol sm='9'>
										<MDBCardText className='text-muted'>
											{users?.phone}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm='3'>
										<MDBCardText>Address</MDBCardText>
									</MDBCol>
									<MDBCol sm='9'>
										<MDBCardText className='text-muted'>
											{users?.address.street} {users?.address.suite}{' '}
											{users?.address.city}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol lg='4'>
						<MDBCard className='mb-4 mb-lg-0'>
							<MDBCardBody className='p-0'>
								<MDBListGroup className='rounded-3'>
									<MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
										<MDBIcon fas icon='globe fa-lg text-warning' />
										<MDBCardText>{users?.website}</MDBCardText>
									</MDBListGroupItem>
								</MDBListGroup>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</section>
	)
}
