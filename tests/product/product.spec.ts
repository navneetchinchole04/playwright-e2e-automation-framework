import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Product Tests', () => {

  test('User should add product to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.addProductToCart();
    await expect(productPage.cartBadge).toHaveText('1');

    await productPage.goToCart();
    await expect(page).toHaveURL(/cart.html/);
  });

});
