import React from 'react';
import {Card, ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import formatDateToDdMmYyyy, {statusStates} from "../../utils";
import CarouselView from "../Carousel/CarouselView";


const CarListItem = ({car, className, handleRemoveCarListItem, handleEditCarListItem}) => {
    return (
        <>
            <Card className={className} style={{width: '18rem'}}>
                <CarouselView
                    className={"bg-body-secondary"}
                    height={180}
                    images={car.car_images}
                    prefixSrc={process.env.REACT_APP_API_URL}
                />
                <Card.Body>
                    <Card.Title>{car.brand}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Номер машини: {car.number}</ListGroup.Item>
                    <ListGroup.Item>Рік випуску: {formatDateToDdMmYyyy(car.year)}</ListGroup.Item>
                    <ListGroup.Item>Кількість пасажирських місць: {car.people}</ListGroup.Item>
                    <ListGroup.Item>Грузопідйомність(кг): {car.weight}</ListGroup.Item>
                    <ListGroup.Item>Статус: {statusStates[car.status]}</ListGroup.Item>

                    {car.status === "UNAVAILABLE" ?
                        (
                            <ListGroup.Item>Дата списання: {formatDateToDdMmYyyy(car.removedAt)}</ListGroup.Item>
                        ) :
                        (
                            <ListGroup.Item>Дата прийнятя: {formatDateToDdMmYyyy(car.createdAt)}</ListGroup.Item>
                        )
                    }

                </ListGroup>
                <Card.Body className={`d-flex justify-content-between flex-column gap-2`}>

                    {car.status !== "UNAVAILABLE" && (
                        <Button onClick={() => handleEditCarListItem(car.id)} variant="primary">Змінити</Button>
                    )}

                    <Button disabled={car.status !== "UNAVAILABLE" && car.status !== "AVAILABLE" } variant="danger" onClick={() => handleRemoveCarListItem(car.id)}>
                        {car.status === "UNAVAILABLE" ?
                            "Поставити на облік"
                            :
                            "Зняти з обліку"
                        }
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default CarListItem;