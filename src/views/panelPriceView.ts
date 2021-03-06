import PanelPrice from '../models/PanelPricesModel';
import panelView from './panelView';

export default {
    render(panelPrice: PanelPrice) {
        return {
            id: panelPrice.id,
            potency: panelPrice.potency,
            price: panelPrice.price,
            inversor: panelPrice.inversor,
            panel: panelPrice.panel && panelView.render(panelPrice.panel),
        }
    },

    renderMany(panelPrices: PanelPrice[]) {
        const panelPricesSorted = panelPrices.sort((a, b) => a.potency - b.potency);

        return panelPricesSorted.map(panelPrice => this.render(panelPrice));
    }
}