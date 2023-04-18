import { useState, useEffect } from "react";
import Card from "./card";
import { ButtonMo, CardContainer, CardItem, Footer, Header, Title } from "./UserList.styled";
import { Button } from "./Card.styled";

const API_ENDPOINT = "https://643ea57d6c30feced82f20cf.mockapi.io/";

function UserList() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(`${API_ENDPOINT}/users`)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    }, []);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const usersPerPage = 12;
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;

    const displayedUsers = users.slice(startIndex, endIndex);

    return (
        <>
            <Header>
                <Title>users list</Title>
            </Header>
            <CardContainer>
                {displayedUsers.map((user) => (
                    <CardItem key={user.id}>
                        <Card  user={user} />
                    </CardItem>
                ))}
            </CardContainer>
            <Footer>
                {users.length > endIndex && (
                    <ButtonMo onClick={handleLoadMore}>Load More</ButtonMo>
                )}</Footer>
        </>

    );
}


export default UserList;
