import "@testing-library/jest-dom";
import { calculateRank } from "../src/calculateRank.js";

describe("Test calculateRank", () => {
  it("should calculate rank correctly", () => {
    expect(
      calculateRank({
        totalCommits: 100,
        totalRepos: 5,
        followers: 100,
        contributions: 61,
        stargazers: 400,
        prs: 300,
        issues: 200,
      }),
    ).toStrictEqual({ level: "PRO+", score: 49.25629684876535 });
  });
});
