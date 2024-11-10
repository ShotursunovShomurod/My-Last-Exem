// Fixed type for WishlistItem array
interface WishlistItem {
    id: number;
    title: string;
    price: number;
}

export const saveStorage = (key: string, payload: WishlistItem[]): void => {
    localStorage.setItem(key, JSON.stringify(payload));
};

export const getStorage = (key: string): WishlistItem[] | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as WishlistItem[] : null;
};