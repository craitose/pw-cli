import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  private readonly productsHeader = this.page.getByTestId('title').filter({ hasText: 'Products' });

  async verifyLoaded() {
    await this.productsHeader.waitFor({ state: 'visible' });
  }
}
