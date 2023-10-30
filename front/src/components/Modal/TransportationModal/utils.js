export const inputs = [
    {
        label: "Час відбуття",
        type: "date",
        property: "startDate"
    },
    {
        label: "Місце відбуття",
        type: "text",
        property: "startLocation"
    },
    {
        label: "Час прибуття",
        type: "date",
        property: "endDate"
    },
    {
        label: "Місце прибуття",
        type: "text",
        property: "endLocation"
    },
    {
        label: "Кількість багажу(кг)",
        type: "number",
        property: "currentWeight"
    },
    {
        label: "Приміткти до багажу",
        type: "area",
        property: "additionWeight"
    },
    {
        label: "Кількість пасажирів",
        type: "number",
        property: "currentPeople"
    },
    {
        label: "Приміткти до пасажирів",
        type: "area",
        property: "additionPeople"
    },
]

export function validateTransportation(data) {
    const errors = {};
    if (!data.startDate) {
        errors.startDate = "Час відбуття обов'язковий";
    }

    if (!data.startLocation) {
        errors.startLocation = "Місце відбуття обов'язкове";
    }

    if (!data.endDate) {
        errors.endDate = "Час прибуття обов'язковий";
    } else if(data.startDate > data.endDate) {
        errors.endDate = 'Час відбуття не може бути більше часу прибуття';
    }

    if (!data.endLocation) {
        errors.endLocation = "Місце прибуття обов'язкове";
    }

    if (!data.currentWeight || data.currentWeight < 0) {
        errors.currentWeight = 'Невірна кількість вантажу';
    }

    if (!data.additionWeight) {
        errors.additionWeight = "Примітка обов'язкова";
    }

    if (!data.currentPeople || data.currentPeople < 0) {
        errors.currentPeople = 'Невірна кількість пасажиру';
    }

    if (!data.additionPeople ) {
        errors.additionPeople = "Примітка обов'язкова";
    }

    if(data.carId < 0) {
        errors.carId = "Транспорт обов'язковий"
    }

    return errors;
}
