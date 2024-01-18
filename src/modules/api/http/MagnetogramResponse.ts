interface MagnetogramResponse {
    _id: string
    title: string;
    info: [{
        version: string;
        markup: number[];
        defects_count: string;
        date: Date;
    }];
    author: string;
    pipe: string
}