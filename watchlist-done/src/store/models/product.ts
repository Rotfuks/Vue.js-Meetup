import {RootState} from '../store';
import {getStoreBuilder} from 'vuex-typex';

export class Product {
  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public price: number;

  public constructor(id: number, name: string, description: string, image: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}

export interface ProductState {
  products: Product[];
}

const initialProductState: ProductState = {
  products: [
    new Product(
      1,
      'Kuchen',
      'leckerer Kuchen',
      'https://az809444.vo.msecnd.net/image/4644427/0x0/0/rezept-brenkuchendr-oetkerfeindatenquer.jpg',
      4.99),
    new Product(
      2,
      'Maultaschen',
      'leckere Maultaschen',
      'https://www.kuechengoetter.de/uploads/media/960x960/04/35824-maultaschen-0.jpg?v=1-0',
      3.50),
    new Product(
      3,
      'Labello',
      'Praktischer Labello',
      'https://www.nivea.de/~/images/media-center-items/5/4/3-146640-2.jpg?mw=505&mh=500',
      1.69),
    new Product(
      4,
      'Sodastream Wassersprudler Crystal 2.0',
      'Fassungsvermögen 0,6 l / Bis zu 60 l Sprudelwasser durch mitgelieferten CO2 Zylinder',
      'https://www.lidl.de/media/product/0/2/8/8/9/6/6/sodastream-wassersprudler-crystal-2-0--13.jpg',
      99.99),
    new Product(
      5,
      'Viewsonic PX700HD Beamer',
      'Lichtstarker Home-Entertainer',
      'https://www.lidl.de/media/product/0/2/9/1/3/7/2/viewsonic-px700hd-beamer--7.jpg',
      449.00),
    new Product(
      6,
      'Heißluft-Fritteuse SHFD 1650 B1',
      '8 voreingestellte Programme / Fassungsvermögen: 2,3 l / Mit Timerfunktio',
      'https://www.lidl.de/media/product/0/2/8/9/4/6/0/silvercrest-heissluft-fritteuse-shfd-1650-b1.jpg',
      54.99),
    new Product(
      7,
      'Schwarzwald Distilled Dry Gin 43% Vol',
      'Gin aus dem Schwarzwald mit eingängiger Fichten-Note 43 % vol',
      'https://www.lidl.de/media/product/0/2/3/3/3/9/3/schwarzwald-distilled-dry-gin-43-vol--1.jpg',
      7.49),
    new Product(
      8,
      'Tanqueray N° TEN Distilled Gin 47,3% Vol',
      'Vierfach destillierter Premium Gin mit Zitrusaromen 47,3 % vol',
      'https://www.lidl.de/media/product/0/2/8/6/3/9/0/tanqueray-n-ten-distilled-gin-47-3-vol.jpg',
      25.99),
    new Product(
      9,
      'MONKEY 47 Schwarzwald Dry Gin 47% Vol',
      'Monkey 47 Dry Gin ist ein Gin aus dem Schwarzwald mit 47 Botanicals 47 % vol.',
      'https://www.lidl.de/media/product/0/2/2/6/1/0/8/monkey-47-schwarzwald-dry-gin-47-vol.jpg',
      32.99),
    new Product(
      10,
      'The Glenlivet Speyside',
      'Single Malt Scotch Whisky 18 Jahre mit Geschenkbox 43% Vol',
      'https://www.lidl.de/media/product/0/2/8/6/5/1/5/the-glenlivet-speyside' +
      '-single-malt-scotch-whisky-18-jahre-mit-geschenkbox-43-vol.jpg',
      64.99),
    new Product(
      11,
      'Laphroaig Islay Singe Malt Scotch Whisky',
      '10 Jahre mit Geschenkbox 40% Vol, Islay Klassiker mit intensiver Raucharomatik',
      'https://www.lidl.de/media/product/0/2/8/6/4/0/8/laphroaig-islay-' +
      'singe-malt-scotch-whisky-10-jahre-mit-geschenkbox-40-vol.jpg',
      32.99),
    new Product(
      12,
      'Nintendo Classic Mini: Nintendo Entertainment System',
      'Lass alte Erinnerungen wieder aufleben und bestehe neue Abenteuer',
      'https://www.lidl.de/media/product/0/2/8/4/4/8/2/nintendo-classic-mini-nintendo-entertainment-system.jpg',
      54.99
    ),
  ],
};
const b = getStoreBuilder<RootState>().module('products', initialProductState);

// getters
const productsGetter = b.read((state) => state.products, 'productGetter');
const productByIdGetter = b.read(
  (state) => (i: number) =>
    state.products.filter((p) => {
      return p.id === i;
    }), 'productsFilter');

// state
const stateGetter = b.state();

// exported "model" module interface
const products = {
  // state
  get state() {
    return stateGetter();
  },
  get allProducts() {
    return productsGetter();
  },
  getProductById(i: number) {
    return productByIdGetter()(i);
  },
};

export default products;




