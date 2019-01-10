/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Prismic, QueryAt } from 'react-prismic-cms';
import ApplicationsExample from './applicationsExample';
import HeaderPages from '../../components/HeaderPages';
import './styles.css';

export default function Applications() {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-admin-applications_view-port rainbow-background-color_gray-1">
                <HeaderPages
                    className="react-rainbow-admin-applications_header-page"
                    title="Applications"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <div className="react-rainbow-admin-applications_container">
                    <QueryAt
                        component={ApplicationsExample}
                        path="document.type"
                        value="experience-examples" />
                </div>
            </div>
        </Prismic>
    );
}
