const puppeteer = require('puppeteer');

describe('Tests TP-7: Funciones en Javascript', () => {
  const url = 'https://rodri-perez.github.io/plataformas-moviles-entregas/tp-7/';
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('El sitio está online', async () => {
    await page.goto(url);
  })

  test('suma(a, b)', async () => {
    expect(await page.evaluate(() => suma(2,3))).toBe(5);
    expect(await page.evaluate(() => suma(4,4))).toBe(8);
    expect(await page.evaluate(() => suma(-10,10))).toBe(0);
  });

  test('elevarAlCubo(x)', async () => {
    expect(await page.evaluate(() => elevarAlCubo(3))).toBe(27);
    expect(await page.evaluate(() => elevarAlCubo(99))).toBe(970299);
  })

  test('restoDivisionEntera(a, b)', async () => {
    expect(await page.evaluate(() => restoDivisionEntera(1,3))).toBe(1);
    expect(await page.evaluate(() => restoDivisionEntera(2,3))).toBe(2);
    expect(await page.evaluate(() => restoDivisionEntera(3,3))).toBe(0);
    expect(await page.evaluate(() => restoDivisionEntera(4,3))).toBe(1);
  })

  test('numeroPi()', async () => {
    expect(await page.evaluate(() => numeroPi())).toBe(Math.PI);
  })

  test('numeroRandom()', async () => {
    expect(await page.evaluate(() => numeroRandom())).toBeGreaterThanOrEqual(0);
    expect(await page.evaluate(() => numeroRandom())).toBeLessThanOrEqual(1);
  })

  test('numeroRandomDesdeHasta(a, b)' , async () => {
    expect(await page.evaluate(() => numeroRandomDesdeHasta(1,6))).toBeGreaterThanOrEqual(1);
    expect(await page.evaluate(() => numeroRandomDesdeHasta(1,6))).toBeLessThanOrEqual(6);
  })

  test('transformarMayuscula(string)', async () => {
    expect(await page.evaluate(() => transformarMayuscula('plataformas móviles'))).toBe('PLATAFORMAS MÓVILES');
    expect(await page.evaluate(() => transformarMayuscula('hola mundo'))).toBe('HOLA MUNDO');
    expect(await page.evaluate(() => transformarMayuscula('abc'))).toBe('ABC');
  })

  test('primeraLetra(string)', async () => {
    expect(await page.evaluate(() => primeraLetra('Plataformas Móviles'))).toBe('P');
    expect(await page.evaluate(() => primeraLetra('hola mundo'))).toBe('h');
    expect(await page.evaluate(() => primeraLetra('abc'))).toBe('a');
  })

  test('sinPrimeraLetra(string)', async () => {
    expect(await page.evaluate(() => sinPrimeraLetra('Plataformas Móviles'))).toBe('lataformas Móviles');
    expect(await page.evaluate(() => sinPrimeraLetra('hola mundo'))).toBe('ola mundo');
    expect(await page.evaluate(() => sinPrimeraLetra('abc'))).toBe('bc');
  })

  test('primeraLetraMayuscula(string)', async () => {
    expect(await page.evaluate(() => primeraLetraMayuscula('plataformas móviles'))).toBe('Plataformas móviles');
    expect(await page.evaluate(() => primeraLetraMayuscula('hola mundo'))).toBe('Hola mundo');
    expect(await page.evaluate(() => primeraLetraMayuscula('abc'))).toBe('Abc');
  })

  test('terminaCon(string, char)', async () => {
    expect(await page.evaluate(() => terminaCon('plataformas móviles', 's'))).toBe(true);
    expect(await page.evaluate(() => terminaCon('hola mundo', 'o'))).toBe(true);
    expect(await page.evaluate(() => terminaCon('abc', 'z'))).toBe(false);
  })

  test('palabraInvertida(string)', async () => {
    expect(await page.evaluate(() => palabraInvertida('hola mundo'))).toBe('odnum aloh');
    expect(await page.evaluate(() => palabraInvertida('abc'))).toBe('cba');
  })
});
