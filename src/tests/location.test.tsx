import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_LOCATION } from '../graphql/queries';
import LocationComponent from '../components/LocationComponent';

const mocks = [
    {
        request: {
            query: GET_LOCATION,
            variables: { id: '1' },
        },
        result: {
            data: {
                location: { name: 'Test Location' },
            },
        },
    },
];

test('renders location name', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <LocationComponent id="1" />
        </MockedProvider>
    );

    expect(await screen.findByText('Test Location')).toBeInTheDocument();
});