import storage from 'redux-persist/lib/storage';

export const persist = {
        key: 'root',
        storage,
        blacklist: ['audioPlayer']
}