import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders the correct initial state and increments count on button click', async () => {
    // Рендерим компонент
    render(<App />);

    // Проверяем, что заголовок отображается
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();

    // Проверяем начальное состояние счётчика
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();

    // Имитируем клик по кнопке
    const button = screen.getByRole('button', { name: /count is/i });
    await userEvent.click(button);

    // Проверяем, что значение увеличилось
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});
