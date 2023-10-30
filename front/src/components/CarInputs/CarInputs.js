import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import CarouselView from "../Carousel/CarouselView";

const CarInputs = (props) => {
    function handeFileInput(e) {
        props.setImages(e.target.files)
    }

    function handleCar(e, property) {
        const value = e.target.value;
        props.setCar({...props.car, [property]: value});
    }

    function transformImages() {
        if(props.images instanceof FileList) {
            return Array.prototype.slice.call(props.images).map(image => {
                return {src: URL.createObjectURL(image)}
            })
        } else {
            return props.images.map(image => {
                return {...image, src: `${process.env.REACT_APP_API_URL}${image.src}`}
            })
        }

    }


    return (
        <>
            {props.inputs.map((i) => (
                <FloatingLabel className="mb-3" label={i.label} key={i.label}>
                    <Form.Control
                        onChange={(e) => handleCar(e, i.property)}
                        type={i.type}
                        placeholder={i.label}
                        value={props.car[i.property]}
                        className={props.inputsErrors[i.property] ? "border-danger" : ""}
                    />
                    <div className="text-danger">{props.inputsErrors[i.property]}</div>
                </FloatingLabel>
            ))}


            {props.images.length !== 0 && (
                <CarouselView
                    theme={"dark"}
                    height={400}
                    images={transformImages()}
                />
            )}

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Зображення техніки</Form.Label>
                <Form.Control onChange={handeFileInput} type="file" accept="image/png, image/gif, image/jpeg"
                              multiple={true}
                              className={props.inputsErrors["images"] ? "border-danger" : ""}
                />
                <div className="text-danger">{props.inputsErrors["images"]}</div>
            </Form.Group>
        </>
    );
};

export default CarInputs;