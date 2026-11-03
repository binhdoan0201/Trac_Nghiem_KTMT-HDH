import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 1280, 'height': 850})
        page = await context.new_page()

        # Listen to console messages and errors
        page.on("console", lambda msg: print(f"[Browser Console] {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"[Browser PageError] {err}"))

        file_url = f"file:///{os.path.abspath('d:/TN_KTMT/index.html').replace(os.sep, '/')}"
        print(f"Navigating to {file_url}")
        await page.goto(file_url)
        await page.wait_for_timeout(1000)

        # 1. Practice Mode verification
        print("Testing Practice Mode...")
        q_text = await page.locator("#practice-q-text").text_content()
        print(f"Practice Q1: {q_text.strip()[:60]}...")
        
        # Test options exist
        opt_btns = await page.locator("#practice-options-list .option-btn").all()
        assert len(opt_btns) == 4, f"Expected 4 options, found {len(opt_btns)}"
        
        # Click Option A
        await opt_btns[0].click()
        await page.wait_for_timeout(500)
        expl_visible = await page.locator("#practice-explanation").is_visible()
        print(f"Explanation shown after answer: {expl_visible}")
        assert expl_visible, "Explanation should be shown"

        # Capture Practice Mode screenshot
        await page.screenshot(path="screenshot_practice_shuffled.png")
        print("Saved screenshot_practice_shuffled.png")

        # 2. Switch to Exam Mode
        print("Testing Exam Mode Paper Selection...")
        await page.locator('.nav-tab[data-target="view-exam"]').click()
        await page.wait_for_timeout(500)

        # Verify 4 paper cards
        cards = await page.locator(".exam-paper-card").all()
        print(f"Found {len(cards)} exam paper cards")
        assert len(cards) == 4, f"Expected 4 cards, found {len(cards)}"

        # Capture Exam Setup Screen with 3 Papers
        await page.screenshot(path="screenshot_exam_paper_selector.png")
        print("Saved screenshot_exam_paper_selector.png")

        # Click Paper 2 (Đề 2: CPU Pipeline, Cache)
        print("Selecting Exam Paper 2...")
        await page.locator('.exam-paper-card[data-paper="paper2"]').click()
        await page.wait_for_timeout(300)

        # Start Exam
        await page.locator("#btn-start-exam").click()
        await page.wait_for_timeout(500)

        # Verify testing screen
        timer_text = await page.locator("#exam-timer").text_content()
        paper_title = await page.locator("#exam-current-paper-title").text_content()
        q_counter = await page.locator("#exam-q-counter").text_content()
        print(f"Exam started: Title='{paper_title.strip()}', Timer='{timer_text.strip()}', Counter='{q_counter.strip()}'")
        assert "50:00" in timer_text or "49:5" in timer_text, "Timer should start at 50:00"
        assert "50" in q_counter, "Counter should be / 50"

        # Answer 5 questions
        for i in range(5):
            exam_opts = await page.locator("#exam-options-list .option-btn").all()
            if exam_opts:
                # pick one option
                await exam_opts[i % 4].click()
                await page.wait_for_timeout(200)
            if i < 4:
                await page.locator("#btn-exam-next").click()
                await page.wait_for_timeout(200)

        await page.screenshot(path="screenshot_exam_testing_shuffled.png")
        print("Saved screenshot_exam_testing_shuffled.png")

        # Submit Exam
        print("Submitting exam...")
        await page.locator("#btn-exam-submit").click()
        await page.wait_for_timeout(300)
        await page.locator("#btn-modal-confirm-submit").click()
        await page.wait_for_timeout(800)

        # Check Result View
        res_paper = await page.locator("#result-paper-name").text_content()
        res_score = await page.locator("#result-score-10").text_content()
        res_total = await page.locator("#result-total").text_content()
        print(f"Exam Result: Paper='{res_paper.strip()}', Score={res_score}, Total={res_total}")
        assert res_total == "50", "Total questions should be 50"

        await page.screenshot(path="screenshot_exam_result_new.png")
        print("Saved screenshot_exam_result_new.png")

        # Test Practice Wrong Questions
        btn_wrong = page.locator("#btn-exam-practice-wrong")
        if await btn_wrong.is_visible():
            print("Clicking 'Luyện tập ngay câu làm sai'...")
            await btn_wrong.click()
            await page.wait_for_timeout(500)
            banner_visible = await page.locator("#targeted-drill-banner").is_visible()
            print(f"Targeted drill banner active: {banner_visible}")
            assert banner_visible, "Targeted drill banner should appear"

        # 3. Check Stats View with Spaced Repetition
        print("Checking Stats and Spaced Repetition Dashboard...")
        await page.locator('.nav-tab[data-target="view-stats"]').click()
        await page.wait_for_timeout(600)

        boxes = await page.locator(".leitner-box").all()
        print(f"Found {len(boxes)} Leitner boxes on stats page")
        assert len(boxes) == 3, f"Expected 3 Leitner boxes, found {len(boxes)}"

        await page.screenshot(path="screenshot_stats_spaced_repetition.png")
        print("Saved screenshot_stats_spaced_repetition.png")

        await browser.close()
        print("All automated checks PASSED successfully!")

if __name__ == "__main__":
    asyncio.run(main())
