export type ResortType = {
    _id: string;
    resortName: string;
    city: string;
    country: string;
    temperature: string;
    moisture: string;
    wind: string;
    imageUrl: string;
    lastUpdated: string;
    photo1: string;
    photo2: string;
    photo3 :string;
}

export type ResortSearchResponse = {
    data: ResortType[];
    pagination: {
        total: number;
        page: number;
        pages: number;  
    };
};