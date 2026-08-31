import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
await page.goto("http://localhost:5176/travel-guides", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: "/private/tmp/claude-501/-Users-vic-DreamlikeDigital-a-la-mode/51f5a6fd-91d1-4935-942f-db08aca0fcf6/scratchpad/travel-guides-locked.png", fullPage: true });
await browser.close();
console.log("done");
