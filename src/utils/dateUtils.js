
const referenceDate = new Date();
referenceDate.setHours(12, 27, 0, 0);
referenceDate.setDate(referenceDate.getDate() - 1);

export function printDate(daysFromReference, format = 'DD-MM-YYYY') {
    const date = new Date(referenceDate);

    if (typeof daysFromReference === "number") {
        date.setDate(date.getDate() + daysFromReference);
    }

    // Handle complex formats with Intl
    if (format.includes('dddd') || format.includes('MMMM')) {
        if (format.includes('[de]')) {
            const dayName = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
            const dayNum = date.getDate();
            const monthName = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date);
            const yearNum = date.getFullYear();
            return `${dayName} ${dayNum} de ${monthName} de ${yearNum}`;
        }
        return new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return format
        .replace('DD', day)
        .replace('MM', month)
        .replace('YYYY', year);
}
