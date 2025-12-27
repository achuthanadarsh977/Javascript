jest.mock("axios");
const axios = require("axios");

const { getWeather } = require("../axios");

test("returns temperature", async () => {
  axios.get.mockResolvedValue({
    data: { temp: 30 },
  });

  const temp = await getWeather("Delhi");

  expect(temp).toBe(30);
  expect(axios.get).toHaveBeenCalledWith("api/weather/Delhi");
});
