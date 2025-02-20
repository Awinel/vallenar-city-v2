export function formatDate(dateString: string) {
    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const dateObj = new Date(dateString);
    return {
      day: dateObj.getDate(),
      month: monthNames[dateObj.getMonth()],
      year: dateObj.getFullYear()
    };
  }