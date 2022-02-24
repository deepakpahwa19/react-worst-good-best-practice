import React from 'react';
import './HomePage.css';
import { WorstApproach } from '../WorstApproach/WorstApproach';
import { BetterApproach } from '../BetterApproach/BetterApproach';
import { BestApproach } from '../BestApproach/BestApproach';

export const HomePage = () => {
    return (
        <div className='home-page'>
            <WorstApproach />
            <BetterApproach />
            <BestApproach />
        </div>
    );
};
