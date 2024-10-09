export const fetchData = async () => {
  try {
    const response = await fetch('https://t-pay.iqfit.app/subscribe/list-test');
    if (!response.ok) {
      throw new Error('Сетевой ответ не был ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};
