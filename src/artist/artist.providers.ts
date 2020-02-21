import { Artist } from './artist.entity';

export const authorProviders = [
    {
        provide: 'ARTIST_REPOSITORY',
        useValue: Artist,
    },
];