import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATION } from '../graphql/queries';

const LocationComponent = ({ id }) => {
    const { loading, error, data } = useQuery(GET_LOCATION, {
        variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <div>{data.location.name}</div>;
};

export default LocationComponent;