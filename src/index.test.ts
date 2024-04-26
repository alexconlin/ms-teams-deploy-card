import {run} from "./index";

test('Does not throw an error', () => {
    expect(() => {
        run()
    }).not.toThrow();
});