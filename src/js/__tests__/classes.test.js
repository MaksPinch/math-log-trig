import { Magician, Daemon } from "../../subclasses";

describe("базовый функционал", () => {
  test("должен корректно устанавливать и получать статус дурмана (stoned)", () => {
    const magician = new Magician(100, 1);
    magician.stoned = true;
    expect(magician.stoned).toBe(true);
  });

  test("должен корректно изменять базовую атаку через сеттер", () => {
    const daemon = new Daemon(50, 1);
    daemon.attack = 100;
    expect(daemon.attack).toBe(100);
  });
});

describe("расчет значения атаки", () => {
  test("атака на 1-ю клетку должна быть 100% от базы", () => {
    const magician = new Magician(100, 1);
    expect(magician.attack).toBe(100);
  });

  test("атака на 5-ю клетку должна быть 60% от базы", () => {
    const magician = new Magician(100, 5);
    expect(magician.attack).toBe(60);
  });
});

describe("логика расчета с эффектом дурмана (stoned)", () => {
  test("должен рассчитывать атаку с дурманом на 2-й клетке (90 - 5 = 85)", () => {
    const magician = new Magician(100, 2);
    magician.stoned = true;
    expect(magician.attack).toBe(85);
  });

  test("должен рассчитывать атаку с дурманом на 4-й клетке (70 - 10 = 60)", () => {
    const daemon = new Daemon(100, 4);
    daemon.stoned = true;
    expect(daemon.attack).toBe(60);
  });
});

describe("граничные условия (Edge cases)", () => {
  test("атака не должна становиться отрицательной при больших штрафах", () => {
    const magician = new Magician(10, 10);
    magician.stoned = true;
    expect(magician.attack).toBe(0);
  });
});
