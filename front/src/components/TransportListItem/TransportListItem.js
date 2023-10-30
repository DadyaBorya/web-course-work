import React from 'react';
import {Card, ListGroup} from "react-bootstrap";
import formatDateToDdMmYyyy, {statusButtonStates, statusStates} from "../../utils";
import Button from "react-bootstrap/Button";

const TransportListItem = ({item, changeStatus}) => {
    return (
        <div className="col-lg-6 col-md-12 mb-4">
            <Card>
                <Card.Header>Номер #{item.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{item.car.brand} | {item.car.number}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Маршрут: {item.startLocation} - {item.endLocation}</ListGroup.Item>
                    <ListGroup.Item>
                        Кількість багажу(кг): {item.currentWeight}/{item.car.weight}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Примітка до багажу: {item.additionWeight}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Кількість пасажирів: {item.currentPeople}/{item.car.people}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Примітка до пасажирів: {item.additionPeople}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Статус: {statusStates[item.status]}
                    </ListGroup.Item>
                </ListGroup>
                {(item.status !== "CANCELED" && item.status !== "FINISHED") && (
                    <Card.Body className={"d-flex gap-4 mx-auto"}>
                        <Button onClick={() => changeStatus(item.id, item.status === "WAITING" ? "INPROGRESS" : "FINISHED")} variant="primary">{statusButtonStates[item.status]}</Button>
                        <Button onClick={() => changeStatus(item.id, "CANCELED")} variant="danger">Відмінити завдання</Button>
                    </Card.Body>
                )}

                <Card.Footer
                    className="text-muted text-center">{formatDateToDdMmYyyy(item.startDate)}-{formatDateToDdMmYyyy(item.endDate)}</Card.Footer>
            </Card>
        </div>
    );
};

export default TransportListItem;