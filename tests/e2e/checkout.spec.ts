import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/checkoutPage';

test.describe('End-to-End Checkout Flow', () => {

  test('User should complete checkout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.addProductToCart();
    await productPage.goToCart();

    await cartPage.verifyItemInCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutDetails();
    await checkoutPage.completeCheckout();

    await expect(checkoutPage.successMessage)
      .toHaveText('Thank you for your order!');
  });

});
