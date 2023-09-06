interface Industry {
  type: string;
  identifier: string;
}
interface Summary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}
interface Links {
  smallThumbnail: string;
  thumbnail: string;
}
interface Mods {
  text: boolean;
  image: boolean;
}
type VolumeInfo= {
  title: string;
  authors: Array<string>;
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: Array<Industry>;
  readingModes: Mods;
  pageCount: number;
  printType: string;
  categories?: Array<string>;
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: Summary;
  comicsContent: boolean;
  imageLinks?: Links;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}
interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}
interface EPUB {
  isAvailable: false;
}
interface PDF {
  isAvailable: true;
}
interface Access {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: EPUB;
  pdf: PDF;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}
export interface Items {
  kind?: string;
  id?: string;
  etag?: string;
  selfLink?: string;
  volumeInfo?: VolumeInfo;
  saleInfo?: SaleInfo;
  accessInfo?: Access;
  searchInfo?: {
    textSnippet: string;
  };
}
export interface BookList {
  kind?: string;
  totalItems: number;
  items: Items[];
}
