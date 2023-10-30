export default function formatDateToDdMmYyyy(inputDate) {
    const date = new Date(inputDate);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

export const statusStates = {
    UNAVAILABLE: "Знятий з обліку",
    AVAILABLE: "В наявності",
    WAITING: "Чекає завдання",
    INPROGRESS: "На завданні",
    FINISHED: "Закінчив завдання",
    CANCELED: "Завдання відмінено",
}

export const statusButtonStates = {
    WAITING: "Відправити на завдання",
    INPROGRESS: "Закінчити завдання",
}
