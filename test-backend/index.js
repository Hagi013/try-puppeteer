const axios = require('axios');

async function runCode(code) {
  const params = {
    method: 'post',
    url: 'https://scrape.peragaru.com/run',
    data: JSON.stringify({ code }),
  };
  params.headers = {};
  params.headers['Accept'] = 'application/json';
  params.headers['Content-Type'] = 'application/json';
  // const resp = await axios.post('http://18.179.60.159:8080/run', {data: formData});
  const resp = await axios(params);
  return await resp.data;
}

const code = `
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  console.log(await page.content());
  browser.close();
`;

runCode(code).then(result => {
  console.error('2222222');
  if (result.errors) {
    console.error(result.errors);
  }
  console.log(result.log);
}).catch((e) => {
  console.error('11111111');
  console.error(e);
});
