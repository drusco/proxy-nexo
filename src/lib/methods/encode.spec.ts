import Emulator from "../../Emulator";
import Exotic from "../../types/Exotic";

const $ = new Emulator();

describe("(method) encode", () => {
  it("Encodes a proxy into a payload object", () => {
    const proxy = $.use();
    const mock: Exotic.payload = { value: 1, encoded: true };
    expect($.encode(proxy)).toEqual(mock);
  });

  it("Encodes proxies into payload objects deeply", () => {
    const proxy = $.use();
    const deep = proxy.deep;
    const value = [proxy, [[[{ deep }]]]];
    const mock: Exotic.payload = {
      value: [
        { value: 2, encoded: true },
        {
          value: [
            {
              value: [
                {
                  value: [
                    {
                      value: { deep: { value: 3, encoded: true } },
                      encoded: false,
                    },
                  ],
                  encoded: false,
                },
              ],
              encoded: false,
            },
          ],
          encoded: false,
        },
      ],
      encoded: false,
    };
    expect($.encode(value)).toEqual(mock);
  });
});
