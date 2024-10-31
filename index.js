import fs from 'fs'
import path from 'path';
import { attachment } from 'allure-js-commons'

const failedScreenshotMaker = async (test, driver, folderPath = './failedScreenshots') => {

  if(test.state !== 'failed') {
    return
  }

  const screenshotName = `${test.title.replaceAll(':', '_')}_${Date.now()}.png`

  if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath, { recursive: true })
  }

  let screenshot = await driver.takeScreenshot()
  fs.writeFileSync(path.join(folderPath, screenshotName), Buffer.from(screenshot, 'base64'))

  attachment(screenshotName, fs.readFileSync(`${folderPath}/${screenshotName}`), 'image/png')

}

export default failedScreenshotMaker;
