from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

opts = Options()
opts.add_argument('--headless=new')
opts.add_argument('--disable-gpu')
opts.add_argument('--no-sandbox')
opts.add_argument('--disable-dev-shm-usage')
opts.add_argument('--window-size=1440,1200')

driver = webdriver.Chrome(options=opts)
try:
    driver.get('http://localhost:5173/login')
    WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.NAME, 'email')))
    print('TITLE=' + driver.title)
    print('URL=' + driver.current_url)
    print('H1=' + driver.find_element(By.TAG_NAME, 'h1').text)
    print('EMAIL_VISIBLE=' + str(driver.find_element(By.NAME, 'email').is_displayed()))
    print('PASSWORD_VISIBLE=' + str(driver.find_element(By.NAME, 'password').is_displayed()))
finally:
    driver.quit()
