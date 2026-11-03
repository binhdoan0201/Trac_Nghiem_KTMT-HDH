import asyncio
from playwright.async_api import async_playwright
import os

async def check_review():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        path = os.path.abspath('d:/TN_KTMT/index.html').replace('\\', '/')
        file_url = f'file:///{path}'
        print(f"Opening: {file_url}")
        await page.goto(file_url)
        
        # Go to Exam tab
        await page.locator('.nav-tab[data-target="view-exam"]').click()
        await page.wait_for_timeout(300)
        await page.locator('.exam-paper-card[data-paper="paper1"]').click()
        await page.wait_for_timeout(200)
        await page.locator('#btn-start-exam').click()
        await page.wait_for_timeout(300)
        
        # Answer Q1 with option B
        opts = await page.locator('#exam-options-list .option-btn').all()
        await opts[1].click()
        await page.wait_for_timeout(200)
        
        # Submit
        await page.locator('#btn-exam-submit').click()
        await page.wait_for_timeout(200)
        await page.locator('#btn-modal-confirm-submit').click()
        await page.wait_for_timeout(500)
        
        # Click Review
        await page.locator('#btn-exam-review').click()
        await page.wait_for_timeout(500)
        
        review_cards = await page.locator('#exam-review-container .card').all()
        print(f'Rendered {len(review_cards)} review cards in review screen')
        assert len(review_cards) == 50, f'Expected 50 review cards, got {len(review_cards)}'
        
        first_card_text = await review_cards[0].text_content()
        print('First card text excerpt:', first_card_text[:120].replace('\n', ' '))
        await page.screenshot(path='screenshot_exam_review_new.png')
        await browser.close()
        print('Review screen test passed!')

if __name__ == '__main__':
    asyncio.run(check_review())
