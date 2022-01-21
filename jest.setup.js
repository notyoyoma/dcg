// doing this to get rid of node crash after tests run
process.on("unhandledRejection", () => {});

jest.mock("@/game/modules");
jest.mock("@/game/events");
