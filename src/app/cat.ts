export interface Stats {
  strength: number;
  loudness: number;
}

export interface Cat {
  pictureBlob: Blob;
  stats: Stats;
};

export interface Base64Cat {
  pictureBase64: string;
  stats: Stats;
}