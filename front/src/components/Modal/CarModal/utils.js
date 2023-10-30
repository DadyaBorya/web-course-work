export function validateCar(car, images) {
    const errors = {};

    if (!car.brand) {
        errors.brand = 'Марка обов\'язкова';
    }

    if (!car.number) {
        errors.number = 'Номер обов\'язковий';
    }

    if (!car.year) {
        errors.year = 'Рік обов\'язковий';
    }

    if (!car.people) {
        errors.people = 'Кількість пасажирів обов\'язкова';
    } else if (isNaN(car.people) || car.people < 0) {
        errors.people = 'Невірна кількість пасажирів';
    }

    if (!car.weight) {
        errors.weight = 'Грузопідйомність(кг) обов\'язкова';
    } else if (isNaN(car.weight) || car.weight < 0) {
        errors.weight = 'Невірна кількість грузопідйомність(кг)';
    }

    if(images.length <= 0) {
        errors.images = 'Кількість фотографій повино бути більше 1'
    }

    return errors;
}

export const inputs = [
    {
        label: "Марка машини",
        type: "text",
        property: "brand"
    },
    {
        label: "Номера машини",
        type: "text",
        property: "number"
    },
    {
        label: "Рік випуску",
        type: "date",
        property: "year"
    },
    {
        label: "Кількість пасажирських місць",
        type: "number",
        property: "people"
    },
    {
        label: "Грузопідйомність(кг)",
        type: "number",
        property: "weight"
    },
]