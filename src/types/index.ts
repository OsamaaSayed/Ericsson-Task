export interface CellTower {
    id: string;
    name: string;
    city: string;
    networkType: '4G' | '5G';
    status: 'Active' | 'Offline';
    signalStrength: number;
}