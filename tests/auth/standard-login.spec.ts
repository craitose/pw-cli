import { test, expect } from '../../src/fixtures/base';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import users from '../data/users.json';

test(' @smoke @critical standard user should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await page.goto('https://www.saucedemo.com');
  
  const user = users.standard;
  await loginPage.login(user.username, user.password);

  await expect(page).toHaveURL(/.*inventory.html/);
  await inventoryPage.verifyLoaded();
});
